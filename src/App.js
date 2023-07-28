const ItemDetails = [
  {
    id: 1,
    description: "passport",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "passport",
    quantity: 3,
    packed: true,
  },
];

export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Nanna Yatra ❤🧡</h1>;
}
function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your trip</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item" />
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {ItemDetails.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>👎</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have</em>
    </footer>
  );
}
