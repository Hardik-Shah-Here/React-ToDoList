import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App = () => {
  //Hook to store the item just added
  const [inputList, setInputList] = useState("");
  //Hook to store array of itmes
  const [items, setItems] = useState([]);

  //Method for input made
  const itemEvent = (event) => {
      setInputList(event.target.value);
  };
  
  //Method for button click
  const listOfItems = () => {
    //Getting already present itmes in array, getting new item 
    //and adding it to array if it is not blank
    if(inputList !== "")
    {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
    setInputList("");
    }
  };

  //Method to return all elemets whose Index does not match the
  //item id where Cross was clicked
  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return (index !== id);
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input onChange={itemEvent} type="text" placeholder="Add a Task" value={inputList}/>
          <button onClick={listOfItems} > + </button>

          {/*Calling the ToDoLists component using props*/}
          <ol>
            {items.map( (itemval, index) => {
              return <ToDoLists 
                key = {index}
                id = {index}
                text = {itemval}
                onSelect = {deleteItem}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;