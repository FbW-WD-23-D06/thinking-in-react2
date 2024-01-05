# React Fundamentals / Thinking in React

## Anmerkungen

Dieses Projekt benutzt create-react-app und nicht vite. Ihr startet den Server also mit `npm start` (statt `npm run dev`), und es ist egal, ob die Dateien mit `.js` oder `.jsx` enden. Die Ordnerstruktur ist auch etwas anders als von uns gewohnt. App ist im components-Ordner drin, und es gibt noch einen Unterordner Navigations. Lasst es euch nicht irritieren, in der Praxis wird man viele unterschiedliche Ordnerstrukturen sehen.

## Prerequisites

You need to be comfortable writing JavaScript and HTML to do this exercise. The exercise uses the following ES6 & ES5 features:

- Module system ([import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)/ [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

You need to have `node` and `npm` installed on your computer.

## 🥑 Before we start the exercise

Before you start, we are going to use the [useState hook](https://reactjs.org/docs/hooks-state.html) in this exercise. 

```javascript
import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

The goal of this exercise is to understand what's state and how to reason about it. The goal of this exercise is not to learn how the useState hook works. How we store the state is an implementation detail.

## 🤸‍♀️ Exercise

- [ ] 1. Refactor the “about” and “footer” sections by creating a function component for each.
      Make sure everything works. Hint, you can look at the `src/components/Header.js` as an example.

- [ ] 2. Refactor the navbar by creating a Function Component.
      Pass the dependencies (`toggleMenu` in this case) via props.
      Make sure everything works by clicking on the "Training" button at the top right of the screen. Hint, you can look at the `src/components/Header.js` as an example (heads up, use curly brackets to pass a prop as a function)

- [ ] 3. Refactor the books section in App.js by creating a new function component called Books. The `<Books>` component will have the JSX related to books. This task is a stepping stone, keep all the state in `<App>` and pass any needed state from `<App>` to `<Books>` via props. You'll refactor and improve this code again in the next task. Make sure everything works.

- [ ] 4. Is there any state in App.js that should be in the `<Books>` component?
      Refactor `<Books>` if appropriate. 

- [ ] 5. Break `<Books>` down into two smaller components: `<BookList>` and `<BookFilter>`. `<BookList>` will be responsible for displaying the books. `<BookFilter>` will be responsible for filtering the books. Is there any state in `<Books>`  that should be moved into `<BookList>` or `<BookFilter>`?

## 🏋️‍♀️ Bonus exercise

- Can we move the `isMenuOpen` state inside the menu? Does it conflict with the idea of "lifting state up".
- If you look at the [React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html) when you open and close the menu, is the whole app being rendered? If so, how can we avoid that and still lift the state up?

## Articles and links

- [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)

## Output:
![reference image](./reference.gif)
