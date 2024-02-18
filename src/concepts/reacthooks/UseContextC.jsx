import React, {useContext} from 'react';
// import context to be able to use it
import { UserContext, DayContext, ClickContext } from './UseContext';

const UseContextC = () => {
    const user = useContext(UserContext);
    const day = useContext(DayContext);
    const click = useContext(ClickContext);
  return (
    <>
        <p>Topic: {user} </p>
        <p>Day: {day}</p>
        <button onClick={click}>Shout Out</button>
    </>
  )
}

export default UseContextC