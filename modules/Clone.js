import React from 'react'

const Clone = React.createClass({
  propTypes: {
    element: React.PropTypes.node.isRequired
  },

  render() {
    const { element, ...props } = this.props
    return React.cloneElement(element, props)
  }
})

export default Clone

