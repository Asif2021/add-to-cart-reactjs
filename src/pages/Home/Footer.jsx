import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid footer bg-dark d-block w-100 vh-50">
                <footer
                    className="text-center text-lg-start text-white" >
                    <div className="container-fluid p-5 pb-0">
                        <section className="">
                            <p className="d-flex justify-content-center align-items-center">
                                <span className="me-3"> Get Your Products here </span>
                                <Link to={"/products"} type="button" className="btn btn-outline-light btn-rounded">
                                    Buy Now
                                </Link>
                            </p>
                        </section>
                        <hr className="m-4" />
                        <section className="mb-4 text-center">
                            <a
                                className="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><i className="fa fa-facebook-f"></i
                            ></a>
                            <a className="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><i className="fa fa-twitter"></i></a>

                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                    <i className="fa fa-google">
                            </i></a>

                            <a
                                className="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><i className="fa fa-instagram"></i
                            ></a>

                            <a
                                className="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><i className="fa fa-github"></i
                            ></a>
                        </section>

                    </div>


                    <div className="text-center p-3">
                        © 2023 Copyright:
                        <a className="text-white ms-2">Meteorite</a>
                    </div>

                </footer>

            </div>
        </div>
    )
}

export default Footer