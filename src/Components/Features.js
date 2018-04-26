import React, {Component} from 'react'
import {Container} from 'mdbreact'
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact'

class Features extends Component {
    render() {
        return (
            <Container>
            <div id="best-features" className="text-center">
                <h2 style={{ marginTop: '20px' }}>Recent Posts</h2>
                <div className="row d-flex justify-content-center mb-4">
                <div className="col-md-8">
                    <p className="grey-text">Current travels</p>
                </div>
            </div>

            <div className="row">
            <div className="col-md-4 mb-8">
            <Card>
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                
                <CardBody>
                <CardTitle>Italy</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button className="btn btn-primary btn-sm" href="#">Button</Button>
                </CardBody>
            </Card>
            </div>

            <div className="col-md-4 mb-5">
            <Card>
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />

                <CardBody>
                <CardTitle>Pennsylvania</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button className="btn btn-primary btn-sm" href="#">Button</Button>
                </CardBody>
            </Card>
            </div>

            <div className="col-md-4 mb-5">
            <Card>
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />

                <CardBody>
                <CardTitle>Italy</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button className="btn btn-primary btn-sm" href="#">Button</Button>
                </CardBody>
            </Card>
            </div>
            </div>
            </div>
            </Container>
        )
    }
}
export default Features
