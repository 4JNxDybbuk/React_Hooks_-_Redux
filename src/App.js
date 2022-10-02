import logo from './logo.svg';
import './App.css';
import UseStateHook from './Components/UseStateHook';
import UseStateHookTwo from './Components/UseStateHookTwo';
import UseStateHookThree from './Components/UseStateHookThree';
import UseEffectHook from './Components/UseEffectHook';
import UseEffectHookTwo from './Components/UseEffectHookTwo';
import UseEffectHookThree from './Components/UseEffectHookThree';
import ComponentA from './Components/UseContextHook/ComponentA';
import React, { useReducer } from 'react';
import UseReducerHook from './Components/UseReducerHook';
import UseReducerHookTwo from './Components/UseReducerHookTwo';
import UseReducerHookThree from './Components/UseReducerHookThree';
import ComponentONE from './Components/UseReducerWithUseContextHook/ComponentONE';
import ParentComponent from './Components/UseCallbackHook/ParentComponent';
import UseMemoHook from './Components/UseMemoHook';
import UseRefHook from './Components/UseRefHook';
import HookOne from './Components/Custom Hooks/HookOne';
import HookTwo from './Components/Custom Hooks/HookTwo';
import UserForm from './Components/Custom Hooks/UserForm';
import CakeContainer from './React Redux/Components/CakeContainer';
import { Provider } from 'react-redux';
import store from './React Redux/redux/store';
import HooksCakeContainer from './React Redux/Components/HooksCakeContainer';
import IceCreamContainer from './React Redux/Components/IceCreamContainer';
import NewCakeContainer from './React Redux/Components/NewCakeContainer';


export const UserContext = React.createContext()
export const EmailContext = React.createContext()

export const CountContext = React.createContext()

const initialState = 0
const reducer = (currentState, action) => {
  switch (action) {
    case 'increment':
      return currentState + 1
    case 'decrement':
      return currentState - 1
    case 'reset':
      return initialState
    default:
      return currentState
  }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      {/* useState hook example */}
      {/* <UseStateHook />
      <br/> <br/>
      <UseStateHookTwo/>
      <br/> <br/>
      <UseStateHookThree /> */}


      {/* useEffect Hook example */}
      {/* <UseEffectHook />
      <br /> <br />
      <UseEffectHookTwo />
      <br /> <br />
      <UseEffectHookThree /> */}


      {/* useContext Hook Examples */}
      {/* <UserContext.Provider value={"Aniket Dutta"}>
        <EmailContext.Provider value={"anike@gmail.com"}>
          <ComponentA />
        </EmailContext.Provider>
      </UserContext.Provider> */}


      {/* useReducer Hook example */}
      {/* <UseReducerHook />
      <UseReducerHookTwo />
      <UseReducerHookThree /> */}

      {/* to use useContext Hook With useReducer Hook to manage global state */}
      {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <h2>App Component Count : {count} </h2>
        <ComponentONE />
      </CountContext.Provider> */}


      {/* useCallback Hook Example. */}
      {/* <ParentComponent /> */}

      {/* useMemo Hook Example */}
      {/* <UseMemoHook /> */}

      {/* useRef Hook Examples */}
      {/* <UseRefHook/> */}


      {/* Custom Hooks examples */}
      {/* <HookOne />
      <HookTwo /> */}
      {/* <UserForm /> */}


      {/* React Redux Tutorials */}

      <Provider store={store}>
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </Provider>

    </div>
  );
}

export default App;
