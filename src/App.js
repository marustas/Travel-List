import { useState } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

const Logo = () => {
  return <h1>🏝️ Far away 🧳</h1>;
};
const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? </h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
};
const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
const Stats = () => {
  return (
    <footer className="stats">
      <em>💼 You have n items on your list, and you already packed n (n%)</em>
    </footer>
  );
};
const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};
export default App;
