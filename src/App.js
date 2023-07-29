import "./index.css";

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
  return <div className="list">LIST</div>;
};
const Stats = () => {
  return (
    <footer>
      <em>💼 You have n items on your list, and you already packed n (n%)</em>
    </footer>
  );
};

export default App;
