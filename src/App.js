import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
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
  return (
    <div className="add-form">
      <h3>What do you need for your trip? </h3>
    </div>
  );
};
const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
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
      <span>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};
export default App;
