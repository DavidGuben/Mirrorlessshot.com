import React, {Component} from 'react'
import {View, Mask} from 'mdbreact'
import './../App.css'

class Intro extends Component {
    render() {
        return (
            <View>
                <div className="intro z-depth-1 animated fadeIn">
                <div className="featured-camera" style={{width: '1000px', height: '1000px', padding: '50px', float: 'right'}}>
                    <img 
                     src={require('./../Images/sony-camera.jpg')}
                     alt="featured camera"
                     className="col-md-6"
                    />
                </div>
                <Mask overlay="" className="flex-center" />
                </div>
            </View>
        );
    }
}

export default Intro
