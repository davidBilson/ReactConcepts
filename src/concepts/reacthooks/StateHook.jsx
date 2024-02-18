import React, { useState } from 'react';

const StateHook = () => {
    // This is called array destructuring
    const [count, setCount] = useState(0);

    // useState with object
    const [name, setName] = useState({
        firstName: "",
        lastName: ""
    });

    // useState with array variable
    const [items, setItems] = useState([]);
    // update the array
    const addItem = () => {
        setItems( prev => (
            [
                ...prev, {
                    id: items.length,
                    value: Math.floor(Math.random() * 10) + 1
                }
            ]));
    };

  return (
    <section>
        <h1>useState Hook</h1>
        {/* Counter */}
        <button onClick={() => setCount(prev => prev + 1)} >Count {count}</button>
        {/* Controlled Components */}
        <form>
            <input 
                type='text'
                value={name.firstName} 
                onChange={(e) => setName(prev => ({
                    ...prev,
                    firstName: e.target.value
                }))}
            />
            <input 
                type='text' 
                value={name.lastName}
                onChange={(e) => setName(prev => ({
                    ...prev,
                    lastName: e.target.value
                }))}
            />
            <h4>Your first name is - {name.firstName}</h4>
            <h4>Your last name is - {name.lastName}</h4>
        </form>
        {/* render items of array in UI */}
        <div>
        <button onClick={addItem}>Add Number</button>
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>{item.value} {index}</li>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}

export default StateHook