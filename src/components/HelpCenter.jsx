import React from 'react'
import { Col, Row } from 'react-bootstrap'
import girl_img from '../assets/images/webp/girl_img.webp'
import calender from '../assets/images/webp/calender.webp'
import dot from '../assets/images/svg/hero_dot.svg'
import half_circle from '../assets/images/svg/half_circle.svg'
import box from '../assets/images/svg/box.svg'
const HelpCenter = () => {
    return (
        <section className='position-relative'>
            <div className="ellipse help_center_abs1 d-lg-block d-none"></div>
            <div className='help_center_bg py-5'>
                <div className="my_container py-2 my-4 position-relative">
                    <img className='help_dot_abs d-md-block d-none' src={dot} alt="dot" />
                    <img className='help_box_abs d-md-block d-none' src={box} alt="box" />
                    <Row className='align-items-center'>
                        <Col md={6}>
                            <h2 data-aos="fade-right" data-aos-duration="1500" className='headings mb-4'>Powerful Tools to Create <span className='d-md-block h2_img text_F36A3E'> Your Standout CV</span></h2>
                            <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500" className='paragraphs'>Customize your CV to reflect your<span className='fw-semibold'> unique personality</span> and professional brand. Choose from a wide range of <span className='fw-semibold'> professionally designed</span> templates and layouts, allowing you to find the <span className='fw-semibold'> perfect style</span> that aligns with your industry and career goals.</p>
                        </Col>
                        <Col md={6} data-aos="zoom-in" data-aos-duration="1500">
                            <img className='w-100' src={girl_img} alt="girl" />
                            <img className='help_half_circle_abs d-md-block d-none' src={half_circle} alt="half_circle" />
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='my_container my-md-5 py-5 position-relative'>
                <div className="ellipse help_center_abs2 d-lg-block d-none"></div>
                <Row className='align-items-center my-md-5 py-md-3'>
                    <Col md={6} data-aos="zoom-in" data-aos-duration="1500">
                        <img className='w-100' src={calender} alt="calender" />
                    </Col>
                    <Col md={6}>
                        <h2 data-aos="fade-left" data-aos-duration="1500" className='headings mb-3'>We’ll help you</h2>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" className='paragraphs mb-4 pb-3'>Once you've booked a session, a confirmation email will be sent to the provided email address, containing all the necessary details, including the date, time, and instructions for the session.</p>
                        <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500"><button className='buttons bg_btn text_ffffff'>Book a Call</button></div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default HelpCenter