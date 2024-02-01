import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handlerAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handlerDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handlerToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handlerClearItem() {
    const confirm = window.confirm(
      "Are you sure want to delete all items 🧐😲"
    );
    if (confirm) setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handlerAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handlerDeleteItem}
        onToggleItem={handlerToggleItem}
        onClearItem={handlerClearItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
