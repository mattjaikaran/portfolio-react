import React from 'react'
import Arrow from '../Arrow'

function Ecommerce() {
  return (
    <div className="mt-5">
      <div className="text-center">
        <h3>Ecommerce</h3>
      </div>
      <Arrow />
      <div className="row mt-5 mb-5">
        <div className="col-md-7 text-center mb-3">
          <div id="gallery" className="carousel slide" data-interval="false" data-ride="carousel"> <ol className="carousel-indicators">
              <li data-target="#gallery" data-slide-to="0" className="active"></li>
              {/* <li data-target="#gallery" data-slide-to="1"></li>
              <li data-target="#gallery" data-slide-to="2"></li>
              <li data-target="#gallery" data-slide-to="3"></li>
              <li data-target="#gallery" data-slide-to="4"></li>
              <li data-target="#gallery" data-slide-to="5"></li>  */}
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/ecommerce.png?alt=media&token=7edfd610-bfb0-4347-8fd9-bc23cc336803" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/ecommerce-details.png?alt=media&token=d8fce2bc-6b91-47d1-95f9-a7798e891bd3" className="d-block w-100" alt="..." />
              </div>
              {/* <div className="carousel-item">
                <img src="https://dummyimage.com/600x400/f7f7f7/000" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
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
            SPA React ecommerce web application.
          </p>
          <p>Technologies -</p>
          <ul className="pl-4">
            <li>React</li>
            <li>Context API</li>
            <li>PayPal API</li>
            <li>Styled Components</li>
          </ul>
          <p className="mt-3">
            <a href="https://ecommerce-react-234.netlify.com/" target="_blank" rel="noopener noreferrer">Go to application</a>
            <br />
            <a href="https://github.com/mattjaikaran/ecommerce-react" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce
