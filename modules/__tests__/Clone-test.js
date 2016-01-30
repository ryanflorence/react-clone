import expect from 'expect'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Clone from '../Clone'

describe('Clone', () => {
  it('clones and passes new props', () => {
    const el = <div/>
    const string = renderToString(
      <Clone
        element={el}
        className="extraProp"
      />
    )
    expect(string).toContain('extraProp')
  })
})
