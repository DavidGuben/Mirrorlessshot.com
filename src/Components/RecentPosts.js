import React, {Component} from 'react'
import {Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, Card, CardBody, CardImage, CardTitle, CardText, View} from 'mdbreact'
import PostCard from './PostCard'


class RecentPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        }
    
        toggle() {
            this.setState({
            modal: !this.state.modal
            });
        }
        toggle1() {
            this.setState({
            modal1: !this.state.modal1
          });
        }
        toggle2() {
            this.setState({
            modal2: !this.state.modal2
            });
        }  
          

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
                
                <div className="col-md-4 mb-5">
                {/*First Post*/}
                <PostCard
                image={require('./../Images/italy-arena.jpg')}
                heading="Italy"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
                buttonText="Read More" />

                {/*First Post Modal*/}
                <Container>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className="animated slideInDown">
                        <ModalHeader toggle={this.toggle}>Post title</ModalHeader>
                        <ModalBody>
                            Post Content
                        </ModalBody>
                        <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                        <Button color="primary">Save changes</Button>
                        </ModalFooter>
                    </Modal>
                </Container>

                </div>
                
                <div className="col-md-4 mb-5">
                {/*Second Post*/}
                <PostCard
                image={require('./../Images/italy-arena.jpg')}
                heading="Penn"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
                buttonText="Read More" />

                {/*Second Post Modal*/}
                <Container>
                    <Modal isOpen={this.state.modal1} toggle={this.toggle1} className="animated slideInDown">
                        <ModalHeader toggle={this.toggle1}>Second Post title</ModalHeader>
                        <ModalBody>
                            Post Content
                        </ModalBody>
                        <ModalFooter>
                        <Button color="secondary" onClick={this.toggle1}>Close</Button>{' '}
                        <Button color="primary">Save changes</Button>
                        </ModalFooter>
                    </Modal>
                </Container>

                </div>

                <div className="col-md-4 mb-5">
                {/*Third Post*/}
                <PostCard
                image={require('./../Images/italy-boat.jpg')}
                heading="Italy"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
                buttonText="Read More" />

                {/*Third Post Modal*/}
                <Container>
                    <Modal isOpen={this.state.modal2} toggle={this.toggle2} className="animated slideInDown">
                        <ModalHeader toggle={this.toggle2}>Third Post title</ModalHeader>
                        <ModalBody>
                            Post Content
                        </ModalBody>
                        <ModalFooter>
                        <Button color="secondary" onClick={this.toggle2}>Close</Button>{' '}
                        <Button color="primary">Save changes</Button>
                        </ModalFooter>
                    </Modal>
                </Container>
                </div>

                </div>
            </div>
            </Container>
        )
    }
}

export default RecentPosts
