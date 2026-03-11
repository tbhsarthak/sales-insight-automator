import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file || !email) {
      alert("Please select a file and enter email");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setMessage(data.summary || "Summary generated and email sent!");
    } catch (error) {
      setMessage("Error uploading file.");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Sales Insight Automator</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Recipient Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={handleUpload}>
        Upload & Generate AI Summary
      </button>

      <br /><br />

      <p>{message}</p>
    </div>
  );
}

export default App;