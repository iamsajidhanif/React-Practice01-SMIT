
import './App.css';
import AddItem from './components/AddItem/AddItem';
import List from './components/list/List';
import { useState } from 'react';

function App() {
  const bool = true;

  // let cls = 'my-class';
  // if (bool) {
  //   cls += ' App';
  // }

  const [items, setItems] = useState(['Computer', 'Monitor', 'Printer']);

  // Passing data from Child (AddItem) to Parent (App):
  const onAddHandler = (data) => {
    setItems([...items, data]);
    console.log(items); // shows previous values inside onAddHandler
    
    // solution for showing previous value in REPL:
    // setItems(updatedState => [...updatedState, data]);
    console.log(items); // shows previous values inside onAddHandler
  };
  console.log(items); // shows updated values outside onAddHandler

  return (
    <>
      {/* Conditional Classes using Ternary Operator: */}
      {/* NOTE: className should be in camelCase: */}
      <div
        className='App'
        // <div className={bool ? "App" : ""}
        // <div className={`my-class ${bool ? "App" : ""}`}
        // <div className={`my-class ${bool && "App"}`}

        // Conditional Styling using Ternary Operator:
        // We use OBJ for styling:
        // style={{'background-color': 'hsl(199, 88.40%, 52.70%)'}}
        // style={{backgroundColor: 'hsl(330, 76%, 55%)'}}
        style={{
          backgroundColor: bool
            ? 'hsl(199, 88.40%, 52.70%)'
            : 'hsl(330, 76%, 55%)',
        }}
      >
        <h1>02 | Styles-Form-State</h1>
        {/* Passing data from Child (AddItem) to Parent (App): */}
        <AddItem onAdd={onAddHandler} />
        <br />
        <List itemsArr={items} />
      </div>
    </>
  );
}

export default App;
