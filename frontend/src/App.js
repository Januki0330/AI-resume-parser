import React, { useState } from "react";

const styles = {
  container: {
    maxWidth: 600,
    margin: "40px auto",
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fff",
    borderRadius: 8,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: 30,
    fontWeight: "700",
  },
  fileInput: {
    display: "block",
    width: "100%",
    padding: "12px",
    borderRadius: 6,
    border: "1px solid #ccc",
    marginBottom: 20,
  },
  select: {
    width: "100%",
    padding: "12px",
    borderRadius: 6,
    border: "1px solid #ccc",
    marginBottom: 30,
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: 6,
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonDisabled: {
    backgroundColor: "#6c757d",
    cursor: "not-allowed",
  },
  resultBox: {
    marginTop: 30,
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 6,
    whiteSpace: "pre-wrap",
    color: "#444",
    minHeight: 150,
  },
  footer: {
    marginTop: 40,
    fontSize: 14,
    textAlign: "center",
    color: "#aaa",
  },
};

function App() {
  const [file, setFile] = useState(null);
  const [option, setOption] = useState("improve_resume");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleOptionChange = (e) => setOption(e.target.value);

  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a file");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    setLoading(true);
    setResult("");

    try {
      const response = await fetch(`http://localhost:8000/${option}`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const data = await response.json();
      setResult(data.result || JSON.stringify(data));
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📄 AI Resume Assistant</h1>

      <input
        type="file"
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx"
        style={styles.fileInput}
      />

      <select value={option} onChange={handleOptionChange} style={styles.select}>
        <option value="improve_resume">Improve Resume</option>
        <option value="extract_skills">Extract Skills</option>
        <option value="match_jobs">Match to Jobs</option>
      </select>

      <button
        style={{ ...styles.button, ...(loading ? styles.buttonDisabled : {}) }}
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Processing..." : "Submit"}
      </button>

      {result && <pre style={styles.resultBox}>{result}</pre>}

      <div style={styles.footer}>
        Made with 💙 by You — Upload your resume and get AI-powered insights!
      </div>
    </div>
  );
}

export default App;
