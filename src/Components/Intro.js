import React, {Component} from 'react'
import {View, Mask} from 'mdbreact'
import './../App.css'

class Intro extends Component {
    render() {
        return (
            <View>
                <div className="intro z-depth-1 animated fadeIn">
                <Mask overlay="" className="flex-center" />
                </div>
            </View>
        );
    }
}

export default Intro
