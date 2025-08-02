import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");

    try {
      const res = await axios.post("http://localhost:5000/api/ask", { question });
      setAnswer(res.data.answer);
    } catch (err) {
      setAnswer("Failed to fetch answer.");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Ask Me Anything</h1>
      <textarea
        rows="4"
        placeholder="Type your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleAsk} disabled={loading}>
        {loading ? "Thinking..." : "Ask"}
      </button>

      {answer && (
        <div className="answer-box">
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
