import React, {Component} from 'react'
import {View, Mask} from 'mdbreact'
import './../App.css'

class Intro extends Component {
    render() {
        return (
            <View>
                {/* Background image (intro) container for featured camera */}
                <div className="intro z-depth-1 animated fadeIn">
                {/* Featured camera container */}
                <div className="featured-camera">
                    {/* Price container */}
                    <div className="featured-camera-price rounded z-depth-1">
                        {/* Price text */}
                        <p>$499</p>   
                    {/* Close price container */}
                    </div>
                    {/* Camera img */}
                    <img
                    src={require('./../Images/sony-camera.jpg')}
                    alt="Featured Camera"
                    className="camera rounded z-depth-1" />
                    {/* Mask overlay for entire intro */}
                    <Mask overlay="cyan-slight" className="flex-center" />
                    {/* Featured camera description container */}
                    <div className="featured-camera-text z-depth-2 rounded">
                    {/* Header */}
                    <h5>Sony a6000</h5>
                    {/* Description / Call To Action */}
                    <p>The best camera on the market.</p>
                    {/* Close featured camera description container */}
                    </div>
                {/* Close featured camera container */}
                </div>
                {/* Close main intro container */}
               </div> 
            </View>
        );
    }
}

export default Intro
