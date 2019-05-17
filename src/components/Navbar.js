import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div className="mt-1 pb-3">
        <Link className="" to="/">
          <h2 className="my-0">matt jaikaran.</h2>
          <p>javascript developer</p>
        </Link>
      </div>
    )
  }
}

export default Navbar
