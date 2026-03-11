const express = require("express")
const cors = require("cors")
const multer = require("multer")
const fs = require("fs")
const csv = require("csv-parser")
const generateSummary = require("./aiService")
require("dotenv").config()
const sendEmail = require("./emailService")
const { swaggerUi, swaggerSpec } = require("./swagger")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const upload = multer({ dest: "uploads/" })

app.get("/", (req, res) => {
  res.send("Sales Insight Automator API Running")
})

app.post("/upload", upload.single("file"), async (req, res) => {
  try {

    const email = req.body.email

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" })
    }

    const results = []

    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => { 
        
        const summary = await generateSummary(results)
        await sendEmail(email, summary)

  res.json({
    message: "CSV processed successfully",
    rows: results.length,
    summary: summary
  })


      })

  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})