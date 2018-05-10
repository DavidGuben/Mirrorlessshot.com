import React, {Component} from 'react'
import {Card,View,CardBody,CardText,CardTitle,CardImage,Button,Container,Modal,ModalHeader,ModalBody,ModalFooter} from 'mdbreact'

class PostCard extends Component {
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
            <div>
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

            <Container>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="animated slideInDown">
                <ModalHeader toggle={this.toggle}>
                    {this.props.modalHeader}
                </ModalHeader>
                <ModalBody>
                    {this.props.modalContent}
                </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>
                    {this.props.secondaryButton}
                </Button>
                {' '}
                <Button color="primary">
                    {this.props.primaryButton}
                </Button>
                </ModalFooter>
            </Modal>
            </Container>
            </div>        
        )
    }
}
export default PostCard