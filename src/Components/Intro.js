import React, {Component} from 'react'
import {View, Mask} from 'mdbreact'
import './../App.css'

class Intro extends Component {
    render() {
        return (
            <View>
                <div className="intro z-depth-1 animated fadeIn">
                    <img 
                    src={require('./../Images/sony-camera.jpg')}
                    alt="Featured Camera"
                    className="featured-camera z-depth-2" />
                    <Mask overlay="cyan-slight" className="flex-center" />
                </div>
            </View>
        );
    }
}

export default Intro
