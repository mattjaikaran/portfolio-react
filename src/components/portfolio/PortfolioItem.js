import React, { Fragment } from 'react'
import Arrow from '../Arrow'

const info = {
  title: 'Avon',
  description: '',
  technologies: [
    'HTML/CSS/JavaScript',
    'Bootstrap',
    'Rebuilt HTML pages/UI components with dynamic ES6 JavaScript',
    'React',
  ],
  carouselImg: [
    'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/rewards-recognition-desktop-1.png?alt=media&token=881e8554-a839-466c-b6e6-62fb9f851530',
    'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/campaign-insider-desktop-2.png?alt=media&token=323742f1-20d9-4916-a757-442bda83709c',
    'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/user-registration.png?alt=media&token=c6e104d7-7b2f-408c-a4d0-5ace22b5302d',
    'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/earnings-desktop.png?alt=media&token=c0d1d33f-3062-4a82-97df-86c64d932598',
  ],
  links: [
    {
      item: 1,
      itemLink: 'https://avon-react.netlify.com',
      linkTitle: 'User Registration React application (In Progress)'
    },
    {
      item: 2,
      itemLink: 'https://youravon.com/home/testing/dynamic-campaign-insider-original',
      linkTitle: 'Campaign Insider'
    },
    {
      item: 3,
      itemLink: 'https://youravon.com/home/testing/dynamic-product-carousel-original',
      linkTitle: 'Carousel'
    },
    {
      item: 4,
      itemLink: 'https://youravon.com/home/testing/dynamic-incentives',
      linkTitle: 'Incentives'
    },
    {
      item: 5,
      itemLink: 'https://youravon.com/home/testing/dynamic-a-spot-original',
      linkTitle: 'Slider Component'
    },
    {
      item: 5,
      itemLink: 'https://github.com/mattjaikaran/avon-react',
      linkTitle: 'GitHub'
    },
  ]
}

const PortfolioItem = () => {
  return (
    const { title } = info
    <div className="mt-5">
      <div className="text-center">
        <h3>{title}</h3>
      </div>
      <Arrow />
      <div className="row mt-5 mb-5">
        <div className="col-md-7 text-center mb-3">
          <div id="gallery" className="carousel slide" data-interval="false" data-ride="carousel">
            <ol className="carousel-indicators">
              {info.carouselImg.map((img, index) => (
                <li key={index}
                  data-target="#gallery"
                  data-slide-to={index}
                  className={index === 0 ? 'active' : null}
                  />
              ))}
              // <li data-target="#gallery" data-slide-to="0" className="active"></li>
              // <li data-target="#gallery" data-slide-to="1"></li>
              // <li data-target="#gallery" data-slide-to="2"></li>
              // <li data-target="#gallery" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/rewards-recognition-desktop-1.png?alt=media&token=881e8554-a839-466c-b6e6-62fb9f851530" className="img-fluid carouselImg" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/campaign-insider-desktop-2.png?alt=media&token=323742f1-20d9-4916-a757-442bda83709c" className="img-fluid carouselImg" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/user-registration.png?alt=media&token=c6e104d7-7b2f-408c-a4d0-5ace22b5302d" className="img-fluid carouselImg" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/earnings-desktop.png?alt=media&token=c0d1d33f-3062-4a82-97df-86c64d932598" className="img-fluid carouselImg" alt="..." />
              </div>
            </div>
            <a className="carousel-control-prev" href="#gallery" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#gallery" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <p>
            {info.description}
          </p>
          <p>Technologies -</p>
          <ul className="pl-4">
            {info.technologies.map((item, i) => {
              return <li key={i}>{item}</li>
            })}
          </ul>
          <p className="mt-3">
            {info.links.map((link) => {
              return (
                <Fragment>
                  <a className="portfolioLink" href={`${link.linkTitle}`} target="_blank" rel="noopener noreferrer">
                    {link.linkTitle}
                  </a>
                  <br />
                </Fragment>
              )
            })}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
