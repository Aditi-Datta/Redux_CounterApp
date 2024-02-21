import './App.css';
import CounterView from "./features/counter/CounterView";
import PostView from './features/posts/postView';

function App() {
  return (
    <div className="App">
      <h1>Counter App with Redux-toolkit</h1>
      <CounterView></CounterView>
      <PostView></PostView>
    </div>
  );
}

export default App;
