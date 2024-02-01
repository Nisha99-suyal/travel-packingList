import React, { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handlerSubmit(e) {
    e.preventDefault();

    const newItems = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItems);

    setDescription("");
    setQuantity(1);
  }
  return (
    <div className="header-bottom">
      <p>What do you need for your 😍 trip? </p>
      <form onSubmit={handlerSubmit}>
        <select
          className="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="description"
          value={description}
          placeholder="Items..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="add-btn">ADD</button>
      </form>
    </div>
  );
}
