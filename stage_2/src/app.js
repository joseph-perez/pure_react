// React createElement takes in three arguments. Type, props, and children.
// The type argument can be either a tag name string like an h1, div, span, etc.
// A React component or a React fragment. A React fragment lets you return multiple
// elements in a render method without creating an additional DOM element.


// Instead of just creating a h1 tag we can create a React component to be reused.
// We can break the h1 tag into it's own component like so and name it whatever we want.
// We'll name the component Title.
const Title = () => React.createElement('h1', {}, 'This is a pure react app! :)')

// Use the React component in place of the string "h1".
const App = () => React.createElement(Title, null, null);


// render the React app to the DOM
ReactDOM.render(React.createElement(App), document.getElementById('root'));