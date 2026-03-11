const { GoogleGenerativeAI } = require("@google/generative-ai")

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

async function generateSummary(data) {

  const model = genAI.getGenerativeModel({ model: "gemini-pro" })

  const prompt = `
  You are a business analyst.

  Analyze the following sales data and create a short executive summary.

  Include:
  - total revenue
  - top selling product
  - best region
  - trends or insights

  Data:
  ${JSON.stringify(data)}
  `

  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()

  return text
}

module.exports = generateSummary