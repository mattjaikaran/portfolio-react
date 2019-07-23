import React from 'react'
import Arrow from '../Arrow'

function Avon() {
  return (
    <div className="mt-5">
      <div className="text-center">
        <h3>Avon</h3>
      </div>
      <Arrow />
      <div className="row mt-5 mb-5">
        <div className="col-md-7 text-center mb-3">
          <div id="gallery" className="carousel slide" data-interval="false" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#gallery" data-slide-to="0" className="active"></li>
              <li data-target="#gallery" data-slide-to="1"></li>
              <li data-target="#gallery" data-slide-to="2"></li>
              <li data-target="#gallery" data-slide-to="3"></li>
              {/* <li data-target="#gallery" data-slide-to="4"></li>
              <li data-target="#gallery" data-slide-to="5"></li> */}
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
              {/* <div className="carousel-item">
                <img src="https://dummyimage.com/600x400/f7f7f7/000" className="img-fluid carouselImg" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://dummyimage.com/600x400/000/fff" className="img-fluid carouselImg" alt="..." />
              </div> */}
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
            Front end web development for Avon based on wireframes.
          </p>
          <p>Technologies -</p>
          <ul className="pl-4">
            <li>HTML/CSS/JavaScript</li>
            <li>Bootstrap</li>
            <li>Rebuilt HTML pages/UI components with dynamic JavaScript</li>
            <li>React</li>
          </ul>
          <p className="mt-3">
            <a href="https://avon-react.netlify.com" target="_blank" rel="noopener noreferrer">User Registration React application (In Progress)</a>
            <br />
            <a href="https://youravon.com/home/dynamic-campaign-insider-original" target="_blank" rel="noopener noreferrer">Campaign Insider</a>
            <br />
            <a href="https://youravon.com/home/dynamic-product-carousel-original" target="_blank" rel="noopener noreferrer">Carousel</a>
            <br />
            <a href="https://youravon.com/home/dynamic-incentives" target="_blank" rel="noopener noreferrer">Incentives</a>
            <br />
            <a href="https://github.com/mattjaikaran/avon-react" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Avon
