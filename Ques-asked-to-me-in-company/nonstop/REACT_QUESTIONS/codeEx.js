//without throttling it will called multiple times
function handleSize() {
  console.log("handle size");
}

window.addEventListener("click", handleSize);

//with throttling we can limit how often the handleResize function is called.
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    func(...args);
  };
}

const throttleHandleSize = throttle(handleSize, 200);

window.addEventListener("click", throttleHandleSize);



Debounce - code example - https://stackblitz.com/edit/react-mfvxcg?file=src%2FApp.js,src%2Fcomponents%2FSearchComponent.jsx