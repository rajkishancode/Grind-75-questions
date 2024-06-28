Dependency Injection.
Ans-
---------------------------------------------------------
What are high order components, explain with an example.
Ans-
---------------------------------------------------------
Design patterns.
Ans-
---------------------------------------------------------
What solid principles are followed in React.
Ans-
---------------------------------------------------------
Presentational Components - What are pros and cons.
Ans-
---------------------------------------------------------
Virtual Dom.
Ans-
---------------------------------------------------------
Lazy loading and Suspense.
Ans-
---------------------------------------------------------
what are protected routes, how will you implement that.
Ans-
---------------------------------------------------------
Lifting the state up.
Ans-
---------------------------------------------------------
What components will you use lazy loading.
Ans-
---------------------------------------------------------
Controllled vs Uncontrolled components.
Ans-
---------------------------------------------------------
Class based vs Functional based components pros and cons.
Ans-
---------------------------------------------------------
Why does component re-render.
Ans-
---------------------------------------------------------
useMemo and useCallback Hook differences.
Ans-
---------------------------------------------------------
Memoisation.
Ans-
---------------------------------------------------------
CSR VS SSR.
Ans-
---------------------------------------------------------
how to handle image uploading -> asset optimization techniques.
Why the key should be unique.
Ans-
---------------------------------------------------------
Why should you use redux instead of context.
Ans-
---------------------------------------------------------
Can redux have multiple stores, and can context have multiple context.
Life cycle hooks.
Ans-
---------------------------------------------------------
Difference between state and props.
Ans-
---------------------------------------------------------
What is batching.
Ans-
---------------------------------------------------------
what is prop drilling how can you avoid prop drilling.
Ans-
---------------------------------------------------------
How will you structure your folder architecture - redux, helpers, utils, constants, components.
Ans-
---------------------------------------------------------
What are reusable component - create a reusable Input component that will handle email, password, number, text at same time.
Ans-
---------------------------------------------------------
If props are passed from parent to child and if I made some changes in props value in child will the value be affected in the Parent component.
Ans-
---------------------------------------------------------
Why does state use previous values to update or set state.
Ans-
---------------------------------------------------------
What are the things that can be passed in dependency array of useEffect.
Ans-
---------------------------------------------------------
Can functions be passed in the dependency array.
Ans-
---------------------------------------------------------
Diffrence between useLayoutEffect and useEffect which is synchronous and which is asynchronous.
Ans-
---------------------------------------------------------
Can you use this keyword in functional component.
Ans-
---------------------------------------------------------
Create a h2 tag with classname attached to it and display it on the screen without using JSX.
Ans-
---------------------------------------------------------
What is babel.
Ans-
---------------------------------------------------------
Why is React so fast.
Ans-
---------------------------------------------------------
React VS VueJs VS Angular JS which is better and why.
Ans-
---------------------------------------------------------
What problems does Next JS solve, that React does not.
Ans-
---------------------------------------------------------
React is declarative or imperative library.
Ans-
---------------------------------------------------------
What are children props.
Ans-
---------------------------------------------------------
What is useReducer hook how is it useful instead of using useState.
Ans-
---------------------------------------------------------
What value does useCallback hook return function or value?.
Ans-
---------------------------------------------------------
Why is Switch used in react-router-dom.
Ans-
---------------------------------------------------------
Create a custom useAsync hook, that will take API URL as parameter, and return loading, error, response and use this useAsync hook to fetch data.
Ans-
---------------------------------------------------------
Why setState is asynchronous.
Ans- setState is Generally Asynchronous as when you call setState(
     - react schedules the update and not update immediately
     - It queue the update and batch multiple update for better performance.
)
---------------------------------------------------------
What is cleanup function in useEffect where is it used.
Ans-

It is a function of the useEffect hook that allows us to stop side effects that no longer need to be executed before our component is unmounted. For example, Component A requests the API to get a list of products, but while making that asynchronous request, Component A is removed from the DOM (it’s unmounted). There is no need to complete that asynchronous request.

What is the solution??

Cleanup function:

Canceling a fetch request

There are different ways to cancel fetch request calls, we can use fetch AbortControlleror Axios AbortController.

This associates the controller and signal with the fetch request and lets us cancel it anytime using AbortController.abort():


---------------------------------------------------------
What are pure components.
Ans- PureComponent is similar to Component but it skips re-renders for same props and state
class Greeting extends PureComponent {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

Pure Components Key Points
Some key points to remember about Pure Components are:

Shallow Comparison:
Pure components perform a shallow comparison of the props and states. If the objects are passed as props or states have the same references, a re-render is prevented.
Performance Optimization:
Pure components can provide performance optimizations by preventing unnecessary re-renders when the data is the same and hasn’t been modified.
ShouldComponentUpdate:
Pure components automatically implement the shouldComponentUpdate() method with a shallow prop and state comparison. This method returns false if the props and state haven’t changed.
---------------------------------------------------------
If child re-renders will the parent also re-render and viceversa.
Component lifecycle.
Ans- Yes
---------------------------------------------------------
Does useRef hook cause re-render on change of something.
Ans- No it does not
---------------------------------------------------------
When to use useRef and useState hook.
Ans- .

Data or values stored in a reference or ref remains the same, even after component re-rendering, unlike states. So, References do not affect component rendering but states do.

useState returns 2 properties or an array. One is the value or state and the other is the function to update the state. In contrast, useRef returns only one value which is the actual data stored.

When the reference value is changed, it is updated without the need to refresh or re-render. However in useState, the component must render again to update the state or its value.
---------------------------------------------------------
Can you pass a function in the useState initial value.
Ans-
Function as initialState
Now that we know how the useState() hook works with primitive values, let’s explore how to use functions as the initial state. To use a function as the initial state, we simply pass the function to the useState() hook instead of a primitive value.

Here’s an example:

import React, { useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(() => {
    const initialData = fetchSomeDataFromServer();
    return initialData;
  });

  // other component code here
}
In the code above, we’re using the useState() hook to create a state variable called data. Instead of passing in a primitive value as the initial state, we’re passing in a function that fetches some data from a server and returns it.

The function :

should be a pure function
should not receive any arguments
should be called or executed once, when the component is first rendered
---------------------------------------------------------
How will you handle images that takes time to load on the UI.
Ans- using lazy loading
const Imagecomponent = React.lazy(() => "./components/Images")
---------------------------------------------------------
How would you explain re-renders in React
Ans- “Rendering” is React calling your components
Any screen update in a React app happens in three steps:
  Trigger - Function call 
  Render  - rendering the component/preparing the component 
  Commit  - commmitting to the DOM.


1 Re-render happens when React needs to update the app with some new data.
2 Usually, this happens as a result of a user interacting with the app or
  some external data coming through via an asynchronous request or some subscription model.
---------------------------------------------------------
What are synthetic events.
Ans-
- In React JS, there are events by which users interact the with an application UI. React listens to events at the document level, after receiving events from the browser, React wraps these events with a wrapper that has a similar interface as the local browser event, which helps us to use methods like preventDefault().

- Why use such a wrapper?
We use different browsers where the same event has different names. Here wrapper does is triggering all the different names for the same event effect.

-Benefits of using synthetic events:
Cross browsers applications are easy to implement.
Synthetic events are that React JS reuses these events objects, by pooling them, which increase the performance
---------------------------------------------------------
What are the optimization techniques to make react fast.
 link -https://www.freecodecamp.org/news/react-performance-optimization-techniques/

Ans- Lazy.loading,memoization,code splitting, 

     - 1.Virtualization (or Windowing) is a technique that helps us render large
         amounts of data by keeping track of the user's scrolling position and displaying 
         only the DOM contents that are visually relevant at that current scroll position
        - This can help keep list rendering fast on mid to low-end devices.
            You can fetch/display more items as  the user scrolls, unloading previous entries
            and replacing them with new ones
            blog link - [https://www.patterns.dev/vanilla/virtual-lists/#:~:text=How%20does%20list%20virtualization%20work%3F&text=%E2%80%9CVirtualizing%E2%80%9D%20a%20list%20of%20items,)%20with%20relative%20positioning%20(window)]
    
    - 2.The concept behind lazy loading is to initiate the load of a placeholder or a small 
        low-resolution version of the image, typically a small-sized thumbnail or a blurred
        placeholder. As the user scrolls or interacts with the page, the actual image is
        loaded dynamically, replacing the placeholder when the user enters the viewport
        or when it becomes visible.
    - 3 .Memoization
        Memoization in React is a technique used to optimize the performance of functional components 
        by caching the results of expensive computations or function calls.  

        - In React, there are three techniques for memoization: React.memo(), useMemo(), and useCallback().

          -1 React.memo() This higher-order component wraps purely functional components to
           prevent re-rendering if the received props remain unchanged.

          -2 The useMemo() hook optimizes performance by memoizing the result of a function call 
            or an  expensive computation. It caches the result and recalculates it only when the input values change.

          -3  useCallback() used to memoize a function instead of memoizing the function result.
              -useful when passing events as props to child components to prevent unnecessary re-renders.

        4- Throttling and Debouncing
           Throttling - It limit the number of time a function or event handler is invoked.
                      - You can control by using a minimum time interval between another function call
                      - If the function is called multiple time in that interval only the first call
                        is considered and remaining will be ignored.
---------------------------------------------------------
What is strict mode in react.
Ans- Strict mode is a set of development tools that help you catch problems in your code
     before they become actual bugs.
     -When you enable strict mode in react app, you are telling react to turn on bunch of extra check
      and warnings that are designed to help you write better code.These checks can catch things like:-
     -1 Components with side Effects.
     -2 Depracated or unsafe licycle methods
     -3 Unsafe use of certain built in functions
     -4 Duplicate key in lists
---------------------------------------------------------
What is react element.
Ans- - The React Element is a small piece of code representing a part of the UI in a React App.
     - Every React element is a JavaScript Object at the end.
     ex - const element = <h1>Hello, React!</h1>
     -It's important to note that React elements are immutable, which means they cannot be modified after they are created. If you want to change what's displayed on the screen, you create a new element and re-render the component using React's reconciliation process.
     Example-
     Here's a simple example of rendering a React element to the DOM:
        const element = <h1>Hello, React!</h1>;
        const container = document.getElementById('root');
        ReactDOM.render(element, container); 
blog link - https://www.linkedin.com/pulse/what-react-element-jay-tillu-mbkif/
---------------------------------------------------------
How will you explain components.
Ans- React Components are building blocks of React apps.
     - They are reusable pieces of code that encapsulates HTML,CSS,JS
     - Components can be nested in other components to create complex UIs,

---------------------------------------------------------
What are fragments in react.
Ans- Fragments let you group a list of children without adding extra nodes to the DOM.
 ex <></> / <React.Fragment></React.Fragment>
---------------------------------------------------------
    Difference between element and component in React.
Ans- 1. React element is a plain object that display a part of UI
     2. whereas React Component is a function or class that produces react element and manages their state and lifecycle.
---------------------------------------------------------
What are Error Boundaries.
Ans - Before Error Boundaries, the errors occurring inside components eventually propagated & broke the UI or  rendered the white screen.

This caused a really bad UX.

Error Boundary helps us to handle such errors & display a fallback UI instead of breaking the UI or white screen displayed.

What’s the problem with React’s Error Boundary?
It cannot catch errors occurring in,

- Event Handlers (these errors need to be handled with try-catch blocks)
- Asynchronous Code (APIs, setTimeout, requestAnimationFrame etc.)
- Server-side rendering
- The error that occurs in Error Boundary itself
- It does not work with Functional Components. Although we can make it work with a few code changes.
- Hooks cannot be used inside it.
blog link - https://medium.com/@vnkelkar11/using-error-boundary-in-react-a29ded725eee
---------------------------------------------------------
What are render props pattern.
-The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.