import React from 'react'
import Arrow from '../Arrow'

function Emaily() {
  return (
    <div className="mt-5">
      <div className="text-center">
        <h3>Emaily</h3>
      </div>
      <Arrow />
      <div className="row mt-5 mb-5">
        <div className="col-md-7 text-center mb-3">
          <div id="carouselExampleIndicators" className="carousel slide" data-interval="false" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/emaily1.png?alt=media&token=d97a515a-7c5e-4586-93ef-ee922cfd2661" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/emaily-cc.png?alt=media&token=71f7518f-f05f-4263-83a3-8f83f2ca704c" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/emaily-add-campaign.png?alt=media&token=cdbb9737-d87d-4dd5-99b4-22715cd88fc0" className="d-block w-100" alt="..." />
              </div>
              {/* <div className="carousel-item">
                <img src="https://dummyimage.com/600x400/ccc/000" className="d-block w-100" alt="..." />
              </div> */}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <p>
            A feedback collection app, create surveys and analyze the feedback you receive.
          </p>
          <p>Technologies -</p>
          <ul className="pl-4">
            <li>NodeJS with Express</li>
            <li>React/Redux</li>
            <li>MongoDB Database</li>
            <li>Redux Form</li>
            <li>Stripe API Integration</li>
            <li>SendGrid Mailer</li>
            <li>PassportJS JWT Authentication</li>
            <li>LocalTunnel</li>
            <li>Heroku Deployment</li>
          </ul>
          <p className="mt-3">
            <a className="portfolioLink" href="https://stark-wildwood-20054.herokuapp.com/" target="_blank" rel="noopener noreferrer">Go to application</a>
            <br />
            <a className="portfolioLink" href="https://github.com/mattjaikaran/emaily" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Emaily
