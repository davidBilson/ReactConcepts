import React from 'react';
// import context to be able to use it
import { UserContext } from './UseContext';

const UseContextC = () => {
  return (
    <>
        <UserContext.Consumer>
            { user => {
                return (
                    <div>User context value : {user}</div>
                )
            }}
        </UserContext.Consumer>
    </>
  )
}

export default UseContextC