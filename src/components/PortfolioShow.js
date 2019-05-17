import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DevConnector from './DevConnector'

class PortfolioShow extends Component {
  renderItems() {
    const items = [
      {
        itemNumber: 1,
        title: 'Title 1',
        imgSrc: '',
        link: '/dev-connector'
      },
      {
        itemNumber: 2,
        title: 'Title 2',
        imgSrc: '',
        link: '/project2'
      },
      {
        itemNumber: 3,
        title: 'Title 3',
        imgSrc: '',
        link: '/project3'
      },
    ]
    return items.map(item => {
      return (
        <div className="col-md-4 col-sm-6">
          <Link to={item.link}>
            <img src="https://dummyimage.com/600x400/ccc/000" className="d-block w-100" alt="..." />
            <div className="mt-2">{item.title}</div>
          </Link>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="mt-5 row text-center">
        {this.renderItems()}
      </div>
    )
  }
}

export default PortfolioShow
