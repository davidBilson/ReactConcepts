import { createContext } from 'react'
import UseContextA from './UseContextA'


// Create context and export it for it to be available anywhere
export const UserContext = createContext();
export const DayContext = createContext();
export const ClickContext = createContext();

const UseContext = () => {

    const shoutOut = () => {
        alert("Perfectly navigating context")
    }

  return (
    <>
        <h1>useContext</h1>
        <UserContext.Provider value={"Creating, and consuming"}>
            <DayContext.Provider value="Sunday">
                <ClickContext.Provider value={shoutOut}>
                    <UseContextA />
                </ClickContext.Provider>
            </DayContext.Provider>
        </UserContext.Provider>
    </>
  )

}

export default UseContext
// NOTES //
// useContext is a React Hook used for consuming context that has been created by the React.createContext API. 
// It allows functional components to subscribe to context changes. 
// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// So, useState is used for managing component-local state, while useContext is used for consuming context provided by a parent component. They serve different purposes and are not direct replacements for each other. However, you might use them together in some cases where you need both local component state and context data within the same component
// However, when you need to share state or functions between components that are not directly connected through parent-child relationships, you can use React's Context API along with useContext to achieve this.
// With the Context API, you can create a context object that holds some data or functions, and then use useContext to access that context from any component in the application, regardless of its position in the component tree.
// So, while useState is used for managing local component state, useContext is used for accessing shared data or functions throughout the application via the Context API. These two hooks serve complementary purposes and are often used together to manage both local and shared state in React applications.

// Finally Context provides a way to pass data through the component tree without having to pass props down manually at every level

// 3 steps in using contexts
// Step 1 - create context
// Step 2 - provide context with a value, provider must wrap the children component for the value to be available