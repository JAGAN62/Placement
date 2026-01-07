import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      const json = await result.json();
      setResponse(json);
      setData("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="layout">

        <div className="card">
          <h1>Resume Viewer</h1>
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Paste Resume Text..."
              rows={6}
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
            <button type="submit">Review</button>
          </form>
        </div>

        {response && (
          <div className="response">
            <h3>Server Response</h3>
            <p><strong>Status:</strong> {response.status}</p>
            <p><strong>Message:</strong> {response.message}</p>
            <p><strong>Feedback:</strong></p>
            <div className="feedback-text">
              {response.Feedback}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;
