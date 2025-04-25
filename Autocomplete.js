import React, { useState } from "react";

function Autocomplete({ doctors, setSearchParams }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
    if (val.trim() === "") {
      setSuggestions([]);
      return;
    }
    const matches = doctors
      .filter((doc) => doc.name.toLowerCase().includes(val.toLowerCase()))
      .slice(0, 3);
    setSuggestions(matches);
  };

  const handleSelect = (name) => {
    setInput(name);
    setSuggestions([]);
    setSearchParams((prev) => {
      prev.set("search", name);
      return prev;
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchParams((prev) => {
        prev.set("search", input);
        return prev;
      });
      setSuggestions([]);
    }
  };

  return (
    <div className="autocomplete">
      <input
        data-testid="autocomplete-input"
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search doctors..."
      />
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((doc) => (
            <div
              data-testid="suggestion-item"
              key={doc.id}
              className="suggestion-item"
              onClick={() => handleSelect(doc.name)}
            >
              {doc.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Autocomplete;
