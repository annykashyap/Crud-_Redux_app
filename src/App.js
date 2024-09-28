import TodoProvider from "./Contextprovider";
import Todoredux from "./Todoredux";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Todoredux />
      </TodoProvider>
    </div>
  );
}
export default App;
