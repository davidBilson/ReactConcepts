import React from 'react';
import StateHook from './StateHook';
import UseEffectHook from './UseEffectHook';
import UseEffectFetchData from './UseEffectFetchData';

const ReactHooks = () => {
  return (
    <>
        <StateHook />
        <UseEffectHook />
        <br /><br />...
        <UseEffectFetchData />
    </>
  )
}

export default ReactHooks;

// Only Call hooks at the top level
// Don't call hooks inside loops, conditions, or nested functions
// Only call hooks from react functions (functional components)