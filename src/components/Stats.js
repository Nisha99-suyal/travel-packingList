import React from "react";

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <div className="stats">
        <em>Start adding some items to your packing list 🚀</em>;
      </div>
    );
  }
  const numItems = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemPacked / numItems) * 100);

  return (
    <div className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${itemPacked} (${percentage}%)`}
      </em>
    </div>
  );
}
