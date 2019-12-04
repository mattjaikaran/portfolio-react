import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="mt-1 pb-2">
      <Link className="" to="/">
        <h2 className="my-0">matt jaikaran.</h2>
        <p>javascript developer</p>
      </Link>
    </div>
  )
}

export default Navbar
