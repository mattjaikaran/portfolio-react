import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Grid from './components/Grid'
import About from './components/About'
import New from './components/New'
import PortfolioAll from './components/PortfolioAll'
import PortfolioOther from './components/PortfolioOther'

import DevConnector from './components/portfolio/DevConnector'
import Ecommerce from './components/portfolio/Ecommerce'
import Emaily from './components/portfolio/Emaily'
import CityCasting from './components/portfolio/CityCasting'
import SmartBrain from './components/portfolio/SmartBrain'
import Avon from './components/portfolio/Avon'
import Vidjot from './components/portfolio/Vidjot'
import SoAvantGarde from './components/portfolio/SoAvantGarde'
import Vespera from './components/portfolio/Vespera'
import PieceAndGathering from './components/portfolio/PieceAndGathering'

const App = () => (
  <Router>
    <div className="container mb-5">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/grid' component={Grid} />
        <Route path='/about' component={About} />
        <Route path='/new' component={New} />
        <Route path='/all' component={PortfolioAll} />
        <Route path='/other' component={PortfolioOther} />
        <Route path='/ecommerce' component={Ecommerce} />
        <Route path='/dev-connector' component={DevConnector} />
        <Route path='/emaily' component={Emaily} />
        <Route path='/city-casting' component={CityCasting} />
        <Route path='/smart-brain' component={SmartBrain} />
        <Route path='/avon' component={Avon} />
        <Route path='/vidjot' component={Vidjot} />
        <Route path='/so-avant-garde' component={SoAvantGarde} />
        <Route path='/vespera' component={Vespera} />
        <Route path='/piece-and-gathering' component={PieceAndGathering} />
      </Switch>
    </div>
    <Footer />
  </Router>
)

export default App
