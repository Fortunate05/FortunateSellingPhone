import './App.css';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";

export default function Basic() {
  return (
  
<nav className="navbar navbar-expand-lg navbar-light bg-light">
 <div className="container-fluid">
  
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
      </ul>
      
    </div>
   

   
    <div className="d-flex align-items-center">
      
      <a className="text-reset me-3" href="#">
        <i className="fas fa-shopping-cart"></i>
      </a>

      
      <div className="dropdown">
        <a
          className="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-bell"></i>
          <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a className="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
    
      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
   
  </div>
  




    <section classNameName="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer classNameName="py-5 h-100">
        <MDBRow classNameName="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody classNameName="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a href="#!" classNameName="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </a>
                    </MDBTypography>

                    <hr />

                    <div classNameName="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p classNameName="mb-1">Shopping cart</p>
                        <p classNameName="mb-0">You have 4 items in your cart</p>
                      </div>
                      <div>
                        <p>
                          <span classNameName="text-muted">Sort by:</span>
                          <a href="#!" classNameName="text-body">
                            price
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>

                    <MDBCard classNameName="mb-3">
                      <MDBCardBody>
                        <div classNameName="d-flex justify-content-between">
                          <div classNameName="d-flex flex-row align-items-center">
                            <div>
                              <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                fluid classNameName="rounded-3" style={{ width: "65px" }}
                                alt="Shopping item" />
                            </div>
                            <div classNameName="ms-3">
                              <MDBTypography tag="h5">
                                Iphone 11 pro
                              </MDBTypography>
                              <p classNameName="small mb-0">256GB, Navy Blue</p>
                            </div>
                          </div>
                          <div classNameName="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <MDBTypography tag="h5" classNameName="fw-normal mb-0">
                                2
                              </MDBTypography>
                            </div>
                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" classNameName="mb-0">
                                R19 000
                              </MDBTypography>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <MDBIcon fas icon="trash-alt" />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>

                    <MDBCard classNameName="mb-3">
                      <MDBCardBody>
                        <div classNameName="d-flex justify-content-between">
                          <div classNameName="d-flex flex-row align-items-center">
                            <div>
                              <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                                fluid classNameName="rounded-3" style={{ width: "65px" }}
                                alt="Shopping item" />
                            </div>
                            <div classNameName="ms-3">
                              <MDBTypography tag="h5">
                                Samsung galaxy Note 10
                              </MDBTypography>
                              <p classNameName="small mb-0">256GB, Navy Blue</p>
                            </div>
                          </div>
                          <div classNameName="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <MDBTypography tag="h5" classNameName="fw-normal mb-0">
                                2
                              </MDBTypography>
                            </div>
                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" classNameName="mb-0">
                                R14 500
                              </MDBTypography>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <MDBIcon fas icon="trash-alt" />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>

                    <MDBCard classNameName="mb-3">
                      <MDBCardBody>
                        <div classNameName="d-flex justify-content-between">
                          <div classNameName="d-flex flex-row align-items-center">
                            <div>
                              <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                                fluid classNameName="rounded-3" style={{ width: "65px" }}
                                alt="Shopping item" />
                            </div>
                            <div classNameName="ms-3">
                              <MDBTypography tag="h5">
                                Canon EOS M50
                              </MDBTypography>
                              <p classNameName="small mb-0">Onyx Black</p>
                            </div>
                          </div>
                          <div classNameName="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <MDBTypography tag="h5" classNameName="fw-normal mb-0">
                                1
                              </MDBTypography>
                            </div>
                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" classNameName="mb-0">
                                R11 199
                              </MDBTypography>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <MDBIcon fas icon="trash-alt" />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>

                    <MDBCard classNameName="mb-3">
                      <MDBCardBody>
                        <div classNameName="d-flex justify-content-between">
                          <div classNameName="d-flex flex-row align-items-center">
                            <div>
                              <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                                fluid classNameName="rounded-3" style={{ width: "65px" }}
                                alt="Shopping item" />
                            </div>
                            <div classNameName="ms-3">
                              <MDBTypography tag="h5">
                                MacBook Pro
                              </MDBTypography>
                              <p classNameName="small mb-0">1TB, Graphite</p>
                            </div>
                          </div>
                          <div classNameName="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <MDBTypography tag="h5" classNameName="fw-normal mb-0">
                                1
                              </MDBTypography>
                            </div>
                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" classNameName="mb-0">
                                R 31 799
                              </MDBTypography>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <MDBIcon fas icon="trash-alt" />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol lg="5">
                    <MDBCard classNameName="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div classNameName="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" classNameName="mb-0">
                            Card details
                          </MDBTypography>
                          <MDBCardImage src="https://media.istockphoto.com/id/1403709099/photo/african-teenage.webp?b=1&s=170667a&w=0&k=20&c=b4ux5ZbPJFsSjo0b2-4PSXCuV5SdwuA6AQtI-mCUKoo="
                            fluid classNameName="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                        </div>

                        <p classNameName="small">Card type</p>
                        <a href="#!" type="submit" classNameName="text-white">
                          <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" classNameName="text-white">
                          <MDBIcon fab icon="cc-visa fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" classNameName="text-white">
                          <MDBIcon fab icon="cc-amex fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" classNameName="text-white">
                          <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                        </a>

                        <form classNameName="mt-4">
                          <MDBInput classNameName="mb-4" label="Cardholder's Name" type="text" size="lg"
                            placeholder="Cardholder's Name" contrast />

                          <MDBInput classNameName="mb-4" label="Card Number" type="text" size="lg"
                            minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                          <MDBRow classNameName="mb-4">
                            <MDBCol md="6">
                              <MDBInput classNameName="mb-4" label="Expiration" type="text" size="lg"
                                minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBInput classNameName="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                            </MDBCol>
                          </MDBRow>
                        </form>

                        <hr />

                        <div classNameName="d-flex justify-content-between">
                          <p classNameName="mb-2">Subtotal</p>
                          <p classNameName="mb-2">R 76 498.00</p>
                        </div>

                        <div classNameName="d-flex justify-content-between">
                          <p classNameName="mb-2">Shipping</p>
                          <p classNameName="mb-2">R120.00</p>
                        </div>

                        <div classNameName="d-flex justify-content-between">
                          <p classNameName="mb-2">Total(Incl. taxes)</p>
                          <p classNameName="mb-2">R 76 618.00</p>
                        </div>

                        <MDBBtn color="info" block size="lg">
                          <div classNameName="d-flex justify-content-between">
                            <span>R 76 618.00</span>
                            <span>
                              Checkout{" "}
                              <i classNameName="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </nav>
  );
}

