import React, {useContext} from 'react';
// import context to be able to use it
import { UserContext, DayContext, ClickContext } from './UseContext';
import { LoginToggleContext } from '../../App';

const UseContextC = () => {
    const user = useContext(UserContext);
    const day = useContext(DayContext);
    const click = useContext(ClickContext);

    const [showLogin, hideLogin] = useContext(LoginToggleContext);

  return (
    <>
        <p>Topic: {user} </p>
        <p>Day: {day}</p>
        <button onClick={click}>Shout Out</button>
        <br /><br />
        <button onClick={showLogin}>show</button>
        <button onClick={hideLogin} >hide</button>
    </>
  )
}

export default UseContextC