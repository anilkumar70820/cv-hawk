import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import twitter from '../assets/images/svg/twitter.svg'
import facebook from '../assets/images/svg/facebook.svg'
import instagram from '../assets/images/svg/instagram.svg'
import phone from '../assets/images/svg/ic_round-phone.svg'
import mail from '../assets/images/svg/ic_baseline-mail.svg'
import logo from '../assets/images/webp/footer_logo.webp'

const Footer = () => {
    return (
        <footer className='bg-black pt-5 pb-3' id='testimonials'>
            <div className="my_container py-5 mt-5">
                <Row className='mb-4'>
                    <Col lg={6} md={4}>
                       <a href="#home"><img src={logo} alt="logo" /></a>
                        <p className='mb-4 pb-2 ff_rubik fs_sm fw-normal text_ffffff opacity-75'>Sit urna ornare sed quam molestie sit placerat <span className='d-lg-block'>convallis. Ac condimentum mollis malesuada</span> placerat in placerat id facilisis.</p>
                        <div className='d-md-block d-none'>
                            <a className='me-4 pe-2' href="https://www.twitter.com"><img className='icons' src={twitter} alt="twitter" /></a>
                            <a className='me-4 pe-2' href="https://www.facebook.com"> <img className='icons' src={facebook} alt="facebook" /></a>
                            <a href="https://www.instagram.com"> <img className='icons' src={instagram} alt="instagram" /></a>
                        </div>
                    </Col>
                    <Col lg={6} md={8} className='mt-md-5 pt-md-3'>
                        <Row>
                            <Col md={3} xs={6}>
                                <h3 className='ff_rubik fs_sm fw-medium text_ffffff mb-3 pb-1'>Quick Links</h3>
                                <ul className='p-0 mb-0'>
                                    <li className='mb-3 pb-1'><Link className='footer_links link'>Home</Link></li>
                                    <li className='mb-3 pb-1'><Link className='footer_links link'>About</Link></li>
                                    <li className='mb-3 pb-1'><Link className='footer_links link'>We’ll help you</Link></li>
                                    <li><Link className='footer_links link'>Testimonials</Link></li>
                                </ul>
                            </Col>
                            <Col md={5} xs={6}>
                                <h3 className='ff_rubik fs_sm fw-medium text_ffffff mb-3 pb-1'>Support</h3>
                                <ul className='p-0 mb-0'>
                                    <li className='mb-3 pb-1'><Link className='footer_links link'><span><img className='me-1' src={phone} alt="phone" /></span>+012 345 67890</Link></li>
                                    <li><Link className='footer_links link'><span><img className='me-1' src={mail} alt="mail" /></span>Cvhawk@gmail.com</Link></li>

                                </ul>
                            </Col>
                            <Col md={4} xs={6} className='mt-md-0 mt-4 pt-2 pt-md-0'>
                                <h3 className='ff_rubik fs_sm fw-medium text_ffffff mb-3 pb-1'>Legal</h3>
                                <ul className='p-0 mb-0'>
                                    <li className='mb-3 pb-1'><Link className='footer_links link'>Privacy Policy</Link></li>
                                    <li><Link className='footer_links link'>Terms & conditions</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className='d-md-none d-block mt-4 pt-3'>
                            <a className='me-4 pe-2' href="https://www.twitter.com"><img className='icons' src={twitter} alt="twitter" /></a>
                            <a className='me-4 pe-2' href="https://www.facebook.com"> <img className='icons' src={facebook} alt="facebook" /></a>
                            <a href="https://www.instagram.com"> <img className='icons' src={instagram} alt="instagram" /></a>
                        </div>
            </div>
            <div className="footer_line"></div>
            <p className='ff_rubik fs_sm fw-medium text_ffffff text-center mb-0 mt-3 py-1'>Copyright@CVhawk2023</p>
        </footer>
    )
}

export default Footer