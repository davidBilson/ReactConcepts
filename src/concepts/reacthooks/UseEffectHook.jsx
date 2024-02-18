import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {

    const [count, setCount] = useState(0);
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);
    const [display, setDisplay] = useState(true)
    const [intervalCount, setIntervalCount] = useState(0)

    // dependency array is not used to run functions over and over when it is empty, dependency array is used to watch for changes
    useEffect(() => {
         const interval = setInterval(() => {
            setIntervalCount(prev => prev + 1);
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const checkMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    };

    // useEffect run once
    useEffect(() => {
        window.addEventListener('mousemove', checkMousePosition);

        // useEffect with cleanup function
        // depicts componentWillUnmount - the returned function is executed when the component unmounts
        return () => {
            window.removeEventListener('mousemove', checkMousePosition);
        }
    }, []);

    // useEffect run conditionally
    useEffect(() => {
      document.title = count + " clicked"
    }, [count]);


  return (
    <div>
        <h2>UseEffect Hook</h2><br />
        <button onClick={() => setCount(prev => prev + 1)} >Clicked {count}X</button>
        <br />
        <h3>Toggler Effect</h3>
        <button onClick={() => setDisplay(!display)}>Toggle Display</button>
        {display && <h3>Mouse Window Position - X={X} Y={Y}</h3>}
        <h3>Interval Counter</h3>
        <p>{intervalCount}</p>
    </div>
  )
}

export default UseEffectHook
// UseEffect Hook lets you perform side effects in functional components
//  it is a close replacement for componentDidMount, componentWillUnmountt