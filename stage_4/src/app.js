// React createElement takes in three arguments. Type, props, and children.
// The type argument can be either a tag name string like an h1, div, span, etc.
// A React component or a React fragment. A React fragment lets you return multiple
// elements in a render method without creating an additional DOM element.

// Instead of just creating a h1 tag we can create a React component to be reused.
// We can break the h1 tag into it's own component like so and name it whatever we want.
// We'll name the component Title.
const Title = () =>
  React.createElement('h1', {}, 'This is a pure react app! :)');

// You can also pass an array of elements to be injected into the element like so.
// When rendering a list of elements you need to provide a key. If a key is not provided
// you'll see a warning in the console.
// Keys help React identify which items have changed, are added, or are removed.
// The best way to pick a key is to use a string that uniquely identifies a list
// item among its siblings. Most often you would use IDs from your data as keys
// When you don’t have stable IDs for rendered items, you may use the item index
// as a key as a last resort:
const Titles = () =>
  React.createElement('div', {}, [
    React.createElement(Title, { key: 'title1' }),
    React.createElement(Title, { key: 'title2' }),
    React.createElement(Title, { key: 'title3' }),
  ]);

// we can also pass props to a component so that a component can have configuration
const TitleWithProps = (props) => React.createElement('h1', {}, props.title);

// Use the React component in place of the string "h1".
const App = () =>
  React.createElement('div', null, [
    React.createElement(Titles, { key: 'allTitles' }),
    React.createElement(TitleWithProps, {
      key: 'titleWithProps',
      title: 'This is a title using props',
    }),
  ]);

// render the React app to the DOM
ReactDOM.render(React.createElement(App), document.getElementById('root'));
