import './App.css';
import Task from './components/Task';


function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description = "Clean dishes" />
      <Task title="Laundry" deadline="Tomorrow" description = "Fold laundry" />
      <Task title="Tidy" deadline="Today" description = "Tidy up room" />
       
    </div>
  );
}


export default App;
