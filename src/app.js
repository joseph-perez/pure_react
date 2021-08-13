// React createElement takes in three arguments. Type, props, and children.
// The type argument can be either a tag name string like an h1, div, span, etc.
// A React component or a React fragment.
// A React fragment lets you return multiple elements in a render method without creating an additional DOM element.


const App = () => React.createElement('h1', {}, 'This is a pure react app! :)');

ReactDOM.render(React.createElement(App), document.getElementById('root'));