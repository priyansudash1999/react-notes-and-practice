import React, { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("");

  // 🔹 Load data from localStorage on first render
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  // 🔹 Save data whenever name changes
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello, {name}</h2>
    </div>
  );
};

export default App;