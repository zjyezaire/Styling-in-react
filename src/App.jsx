// src/App.jsx
import './App.css';
// Later on, we'll import button components here

const App = () => {
  return (
    <div className="App">
        <h1>Hello</h1>
      {
        // Add all example components:
        <Button1 buttonText="Example 1" />
        //...
      }
    </div>
  );
};

export default App;
