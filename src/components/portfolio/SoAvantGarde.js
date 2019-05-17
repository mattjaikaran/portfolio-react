import React from 'react'
import Arrow from '../Arrow'

function SoAvantGarde() {
  return (
    <div className="mt-5">
      <div className="text-center">
        <h3>So Avant Garde</h3>
      </div>
      <Arrow />
      <div className="row mt-5 mb-5">
        <div className="col-md-7 text-center mb-3">
          <div id="gallery" className="carousel slide" data-interval="false" data-ride="carousel"> <ol className="carousel-indicators">
              <li data-target="#gallery" data-slide-to="0" className="active"></li>
              {/* <li data-target="#gallery" data-slide-to="1"></li> */}
              {/* <li data-target="#gallery" data-slide-to="2"></li>
              <li data-target="#gallery" data-slide-to="3"></li>
              <li data-target="#gallery" data-slide-to="4"></li>
              <li data-target="#gallery" data-slide-to="5"></li>  */}
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/soavantgarde-port.png?alt=media&token=4c21366f-4a1d-4ff8-8a53-5a0231c4ff0b" className="d-block w-100" alt="..." />
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
            Shopify site designed for So Avant Garde fragrance company.
          </p>
          <p>Technologies -</p>
          <ul className="pl-4">
            <li>Shopify</li>
            <li>Bootstrap</li>
          </ul>
          <p className="mt-3">
            <a href="https://so-avant-garde.com/" target="_blank" rel="noopener noreferrer">Go to website</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SoAvantGarde
