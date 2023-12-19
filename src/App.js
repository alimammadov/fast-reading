import React, { useState } from 'react';
import './App.css'; // Import your custom styles

const App = () => {
  const [article, setArticle] = useState('');
  const [result, setResult] = useState('');

  const analyzeArticle = () => {
    const words = article.split(' ');

    if (words.length === 0) {
      setResult('Please enter an article.');
      return;
    }

    const analyzedWords = words.map((word) => {
      const medianIndex = Math.floor(word.length / 2);
      const firstHalf = word.slice(0, medianIndex);
      const secondHalf = word.slice(medianIndex);
      return `<strong>${firstHalf}</strong>${secondHalf}`;
    });

    const formattedResult = analyzedWords.join(' ');
    setResult(formattedResult);
  };

  return (
    <div className="article-analyzer-container">
      <textarea
        className="article-input"
        placeholder="Paste or type your article here..."
        value={article}
        onChange={(e) => setArticle(e.target.value)}
      ></textarea>
      <button className="analyze-button" onClick={analyzeArticle}>
        Analyze
      </button>
      <div
        className="result-display"
        dangerouslySetInnerHTML={{ __html: result }}
      ></div>
    </div>
  );
};

export default App;
