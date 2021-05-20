//import logo from './logo.svg';
import './App.css';

function App(props) {

//const activity = props.activity
const {activity} = props            // destructuring

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello! <strong>{activity.name}</strong> </h2>
        <p>This is "{activity.assignment}" Assignment</p>
        <div className="assignment">
          <h1>This is h1 tag</h1>
          <ol>
            <li>JS inside JSX</li>
            <li>
              <ul>
                <li>5 + 5 = {5 + 5}</li>
                <li>5 - 5 = {5 -5}</li>
                <li>5 * 5 = {5 * 5}</li>
                <li>5 / 5 = {5 / 5}</li>
              </ul>
            </li>
            <li>Ordered List</li>
          </ol>
        </div>
      </header>
    </div>
  );
}

export default App;
