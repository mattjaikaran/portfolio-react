import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PortfolioOther from './PortfolioOther'

class PortfolioAll extends Component {
  state = { otherProjects: false }
  renderItems() {
    const items = [
      {
        itemNumber: 1,
        title: 'Emaily',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/emaily.png?alt=media&token=cbdf9785-80a1-43ad-a957-1b65884730a8',
        link: '/emaily',
        style: 'img-fluid pb-2'
      },
      {
        itemNumber: 2,
        title: 'DevConnector',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/dev-connector.png?alt=media&token=63ec3672-7c27-4ab6-85f8-f5a33b7f8562',
        link: '/dev-connector',
        style: 'img-fluid pb-2'
      },
      {
        itemNumber: 3,
        title: 'City Casting',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/city-casting.png?alt=media&token=51ad1377-48ce-4753-a121-c22455cf6e50',
        link: 'city-casting',
        style: 'img-fluid pb-2'
      },
      {
        itemNumber: 4,
        title: 'SmartBrain',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/smart-brain.png?alt=media&token=8e835e6c-ef88-4968-be80-ee7ef731bb55',
        link: 'smart-brain',
        style: 'img-fluid pb-2'
      },
      {
        itemNumber: 5,
        title: 'Avon',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/avon-now-logo.svg?alt=media&token=9fc576e1-a7a4-4e25-a7fe-a80dc3781c0f',
        link: '/avon',
        style: 'img-fluid py-5'
      },
    ]
    return items.map(item => {
      const { itemNumber, link, imgSrc, style } = item
      return (
        <div key={itemNumber} className="portfolioItem col-md-4 col-sm-6 mb-3">
          <Link to={link}>
            <img src={imgSrc} className={style} alt="..." />
            {/* <div className="mt-2">{title}</div> */}
          </Link>
        </div>
      )
    })
  }
  renderOther = (e) => {
    e.preventDefault()
    this.setState({ otherProjects: !this.state.otherProjects })
  }
  render() {
    return (
      <div className="pb-5">
        <div className="portfolioContent row text-center">
          {this.renderItems()}
          { this.state.otherProjects ? <PortfolioOther /> : null }
        </div>
        <div className="row mt-3 text-center">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            {!this.state.otherProjects ? (
              <button className="btn btn-dark" onClick={this.renderOther}>
                See More
              </button>
            ) : null }
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}


export default PortfolioAll
