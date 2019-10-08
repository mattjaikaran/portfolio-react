import React from 'react'
import Arrow from '../Arrow'

function VidJot() {
  return (
    <div className="mt-5">
      <div className="text-center">
        <h3>VidJot</h3>
      </div>
      <Arrow />
      <div className="row mt-5 mb-5">
        <div className="col-md-7 text-center mb-3">
          <div id="gallery" className="carousel slide" data-interval="false" data-ride="carousel"> <ol className="carousel-indicators">
              <li data-target="#gallery" data-slide-to="0" className="active"></li>
              <li data-target="#gallery" data-slide-to="1"></li>
              {/* <li data-target="#gallery" data-slide-to="2"></li>
              <li data-target="#gallery" data-slide-to="3"></li>
              <li data-target="#gallery" data-slide-to="4"></li>
              <li data-target="#gallery" data-slide-to="5"></li>  */}
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/vidjot.png?alt=media&token=9a722f57-9595-4e59-a7a6-8969a5fb58d0" className="d-block w-100" alt="..." />
              </div>

              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/vidjot2.png?alt=media&token=e88f6695-3d8c-4154-b820-cf268aad339d" className="d-block w-100" alt="..." />
              </div>
              {/* <div className="carousel-item">
                <img src="https://dummyimage.com/600x400/000/fff" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://dummyimage.com/600x400/ccc/000" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://dummyimage.com/600x400/f7f7f7/000" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://dummyimage.com/600x400/000/fff" className="d-block w-100" alt="..." />
              </div> */}
            </div>
            <a className="carousel-control-prev" href="#gallery" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#gallery" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <p>
            NodeJS application video idea application
          </p>
          <p>Technologies -</p>
          <ul className="pl-4">
            <li>NodeJS with Express</li>
            <li>PassportJS Google OAuth</li>
          </ul>
          <p className="mt-3">
            <a href="https://protected-garden-20878.herokuapp.com/" target="_blank" rel="noopener noreferrer">Go to application</a>
            <br />
            <a className="portfolioLink" href="https://github.com/mattjaikaran/vidjot" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default VidJot
