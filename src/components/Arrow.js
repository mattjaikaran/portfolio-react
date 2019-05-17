import React from 'react'
import { Link } from 'react-router-dom'

const Arrow = () => {
  return (
    <div className="">
      <Link className="btn p-0" to="/">
        <img src={require('../misc/arrow-left.png')} className="arrow" alt=".." />
        {'  '}
        Back
      </Link>
    </div>
  )
}

export default Arrow
