import React, {Component} from 'react'
import {Card,View,CardBody,CardText,CardTitle,CardImage,Button} from 'mdbreact'

class PostCard extends Component {
    render() {
        return (
            <Card>
            <View zoom>
                <CardImage className="img-fluid" 
                src={this.props.image} />
            </View>
            
            <CardBody>
                <CardTitle>{this.props.heading}</CardTitle>
                <CardText>{this.props.description}</CardText>
                <Button className="btn btn-primary btn-sm" onClick={this.toggle}>           {this.props.buttonText}
                </Button>
            </CardBody>
            </Card>
        )
    }
}
export default PostCard