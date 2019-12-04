import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PortfolioOther extends Component {
  renderItems() {
    const items = [
      {
        itemNumber: 1,
        title: 'VidJot',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/vidjot.png?alt=media&token=9a722f57-9595-4e59-a7a6-8969a5fb58d0',
        link: '/vidjot'
      },
      {
        itemNumber: 2,
        title: 'So Avant Garde',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/soavantgarde-port-front.png?alt=media&token=048c9188-45e6-4481-bff8-fbc33d6921e0',
        link: '/so-avant-garde'
      },
      {
        itemNumber: 3,
        title: 'Vespera',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/vespera-port.png?alt=media&token=b3c31cdc-5c01-4a0b-afd5-8d3a46aea4d9',
        link: '/vespera'
      },
      {
        itemNumber: 4,
        title: 'Piece and Gathering',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/pg-port-profile.png?alt=media&token=0f828f41-97fe-4733-ba20-5344af93d4bb',
        link: '/piece-and-gathering'
      },
    ]
    return items.map((item, index) => {
      return (
        <div key={index} className="portfolioItem col-md-4 col-sm-6 mb-3">
          <Link to={item.link}>
            <img src={item.imgSrc} className="d-block w-100" alt="..." />
            {/* <div className="my-2">{item.title}</div> */}
          </Link>
        </div>
      )
    })
  }
  render() {
    return (
      // <div className="mt-5 row text-center">
      <React.Fragment>
        {this.renderItems()}
      </React.Fragment>
      // </div>
    )
  }
}

export default PortfolioOther
