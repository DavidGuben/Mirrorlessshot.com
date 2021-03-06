import React, {Component} from 'react'
import Nav from './Components/Nav'
import './App.css'

import Intro from './Components/Intro'
import Router from './Components/Router'
import Gallery from './Components/Gallery'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Intro />
        <Router />
        <Gallery />
        <Footer />
       </div>
    )
  }
}

export default App
