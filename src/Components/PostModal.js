import React, {Component} from 'react'
import {Container,Modal,ModalBody,ModalFooter,ModalHeader,Button} from 'mdbreact'

class PostModal extends Component {
    render() {
        return (
            <Container>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="animated slideInDown">
                <ModalHeader toggle={this.toggle}>Test</ModalHeader>
                <ModalBody>
                    {this.props.postContent}
                </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>{this.props.secondaryButtonText}</Button>{' '}
                <Button color="primary">{this.props.primaryButtonText}</Button>
                </ModalFooter>
            </Modal>
            </Container>
        )
    }
}

export default PostModal
