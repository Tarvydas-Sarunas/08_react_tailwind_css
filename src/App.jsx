import './styles/App.css';

export default function App() {
  console.log('App susikure');
  return (
    <div className="App container mx-auto">
      <h1 className="text-3xl font-bold underline">Hello, world!</h1>
      <button className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm">Save Changes</button>
      <hr />
    </div>
  );
}
