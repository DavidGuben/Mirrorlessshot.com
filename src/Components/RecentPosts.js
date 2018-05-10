import React, {Component} from 'react'
import {Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, Card, CardBody, CardImage, CardTitle, CardText, View} from 'mdbreact'
import PostCard from './PostCard'


class RecentPosts extends Component {
    render() {
        return (
            <Container className="wow fadeIn">
            <div id="best-features" className="text-center">
                <h2 style={{ marginTop: '20px' }}>Recent Posts</h2>
                <div className="row d-flex justify-content-center mb-4">
                <div className="col-md-8">
                    <p className="grey-text">Current travels</p>
                </div>
                </div>

                <div className="row">
                {/*First Post*/}
                <div className="col-md-4 mb-5">
                    <PostCard
                    image={require('./../Images/italy-arena.jpg')}
                    heading="Italy"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    buttonText="Read More" 
                    modalHeader="First Post"
                    modalContent="First Post Content."
                    primaryButton="Share"
                    secondaryButton="Close"
                    />
                </div>

                {/*Second Post*/}
                <div className="col-md-4 mb-5">
                    <PostCard
                    image={require('./../Images/italy-arena.jpg')}
                    heading="Penn"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    buttonText="Read More"
                    modalHeader="Second Post"
                    modalContent="Second Post Content."
                    primaryButton="Share"
                    secondaryButton="Close"
                    />
                </div>

                {/*Third Post*/}
                <div className="col-md-4 mb-5">
                    <PostCard
                    image={require('./../Images/italy-boat.jpg')}
                    heading="Italy"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    buttonText="Read More"
                    modalHeader="Third Post"
                    modalContent="Third Post Content."
                    primaryButton="Share"
                    secondaryButton="Close"
                    />
                </div>

                </div>
            </div>
            </Container>
        )
    }
}

export default RecentPosts
