import React, { Component } from 'react'
import Nav from './Components/Nav'
import './App.css'

import Intro from './Components/Intro'
import Features from './Components/Features'
import Examples from './Components/Examples'
import Gallery from './Components/Gallery'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Intro />
        <Features />
        <Examples />
        <Gallery />
        <Footer />
       </div>
    )
  }
}

export default App
