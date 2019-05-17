import React from 'react'
import Arrow from '../Arrow'

function CityCasting() {
  return (
    <div className="mt-5">
      <div className="text-center">
        <h3>City Casting</h3>
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
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/citycastinghome.png?alt=media&token=60a68231-cd15-4a2b-a9a9-9cec38a9970c" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/city-casting.png?alt=media&token=51ad1377-48ce-4753-a121-c22455cf6e50" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/addnewinvoice.png?alt=media&token=dd8330c6-11c0-44d9-98d0-3f597580776c" className="d-block w-100" alt="..." />
              </div>
              {/* <div className="carousel-item">
                <img src="https://dummyimage.com/600x400/ccc/000" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://dummyimage.com/600x400/f7f7f7/000" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://dummyimage.com/600x400/000/fff" className="d-block w-100" alt="..." />
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
            Invoicing application for a casting company.
          </p>
          <p>Technologies -</p>
          <ul className="pl-4">
            <li>NodeJS with Express</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>PassportJS JWT Authentication</li>
            <li>Axios</li>
            <li>Deployed to Heroku</li>
          </ul>
          <p className="mt-3">
            <a href="https://citycasting.herokuapp.com/" target="_blank" rel="noopener noreferrer">Go to invoicing application (In Progress)</a>
            <br />
            <a href="https://citycastingnyc.com/" target="_blank" rel="noopener noreferrer">Go to website</a>
            <br />
            <a href="https://github.com/mattjaikaran/cc-client" target="_blank" rel="noopener noreferrer">GitHub (Client)</a>
            <br />
            <a href="https://github.com/mattjaikaran/cc-api" target="_blank" rel="noopener noreferrer">GitHub (Server)</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CityCasting
