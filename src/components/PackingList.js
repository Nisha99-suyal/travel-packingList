import React, { useState } from "react";
import Item from "./Item";
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItem,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="itemList-section">
      <ul className="item-list">
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div>
        <select
          className="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description (A-Z)</option>
          <option value="packed">Sort By Packed</option>
        </select>
        <button className="clear-items" onClick={onClearItem}>
          Clear Items
        </button>
      </div>
    </div>
  );
}
