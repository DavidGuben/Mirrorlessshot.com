import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer unique-color-dark pt-0"> 
            <div className="primary-color">
              <div className="container wow fadeIn">     
                <div className="row py-4 d-flex align-items-center">
                  <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                    <h6 className="mb-0 white-text">Get connected with us on social media</h6>
                  </div>

                  <div className="col-md-6 col-lg-7 text-center text-md-right">
                    <a className="fb-ic ml-0" href="https://www.facebook.com/MirrorlessShot/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-facebook white-text mr-4"> </i> 
                    </a>
                    <a className="tw-ic" href="/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-twitter white-text mr-4"> </i>
                    </a>
                    <a className="gplus-ic" href="/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-google-plus white-text mr-4"> </i>
                    </a>
                    <a className="li-ic" href="/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin white-text mr-4"> </i>
                    </a>
                    <a className="ins-ic" href="/" target="_blank" rel="noopener noreferrer">
                       <i className="fa fa-instagram white-text mr-lg-4"> </i>
                    </a>
                   </div>

                 </div>
               </div>
             </div>

             <div className="container mt-5 mb-4 text-center text-md-left wow fadeIn">
              <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Mirrorless Shot</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="!#">Home</a>
                  </p>
                  <p>
                    <a href="!#">Gallery</a>
                  </p>
                  <p>
                    <a href="!#">Cameras</a>
                  </p>
                  <p>
                    <a href="!#">News</a>
                  </p>
                  <p>
                    <a href="!#">Destinations</a>
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Destinations</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="!#">Italy</a>
                  </p>
                  <p>
                    <a href="!#">Pennsylvania</a>
                  </p>
                  <p>
                    <a href="!#">New York</a>
                  </p>
                  <p>
                    <a href="!#">New Jersey</a>
                  </p>
                </div>
        
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Social Media</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="!#">Facebook</a>
                  </p>
                  <p>
                    <a href="!#">Twitter</a>
                  </p>
                  <p>
                    <a href="!#">Instagram</a>
                  </p>
                  <p>
                    <a href="!#">LinkedIn</a>
                  </p>
                </div>
        
                <div className="col-md-4 col-lg-3 col-xl-3">
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Contact Details</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <i className="fa fa-home mr-3"></i> New York, NY 10012 US
                  </p>
                  <p>
                    <i className="fa fa-envelope mr-3"></i>
                    <a href="!#">davidjg6@gmail.com</a>
                  </p>
                </div>

              </div>
            </div>
            <div className="footer-copyright py-3 text-center">
              2018 Copyright: <a href="https://davidguben.com">David G.</a>
            </div>
            
            </footer>
        )
    }
}

export default Footer