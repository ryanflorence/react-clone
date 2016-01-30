React Clone
===========

Declarative element cloning for React.

### Installation

Using [npm](https://www.npmjs.com/):

    $ npm install react-clone

Then with a module bundler like [webpack](https://webpack.github.io/) that supports either CommonJS or ES2015 modules, use as you would anything else:

```js
// using an ES6 transpiler, like babel
import Clone from 'react-clone'

// not using an ES6 transpiler
var Clone = require('react-clone').default
```

The UMD build is also available on [npmcdn](https://npmcdn.com). You can find the library on `window.ReactClone`.

```html
<script src="https://npmcdn.com/react-clone/umd/ReactClone.min.js"></script>
```


### Usage

```js
const button = <button/>

// instead of this:
<div>
  {React.cloneElement(button, { onClick: handleClick })}
</div>

// you can keep it declarative like this:
<div>
  <Clone element={button} onClick={handleClick}/>
</div>

// it's mostly useful for passing extra props to children
// like animating the children of a React Router
// route component's children (gotta add that key)
<Clone
  element={this.props.children}
  key={location.pathname}
/>

// or iterating over children
React.Children.map(this.props.children, (child, index) => {
  return <Clone element={child} index={index}/>
})
```

