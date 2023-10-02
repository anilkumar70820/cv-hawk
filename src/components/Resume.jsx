import React from 'react'
import { Col, Row } from 'react-bootstrap'
import check_icon from '../assets/images/svg/Group 237716.svg'
import resume_cards from '../assets/images/webp/resume_cards.webp'
import resume_trailer from '../assets/images/webp/resume_trailer.webp'

const Resume = () => {
    return (
        <section className='position-relative overflow-hidden'>
            <div className='ellipse resume_ellipse_abs_2 d-lg-block d-none'></div>
            <div className='help_center_bg py-5'>
                <div className="my_container my-md-5 py-md-1">
                    <Row>
                        <Col md={7} className='mb-4 mb-md-0'>
                            <h2 data-aos="fade-right" data-aos-duration="1500" className='headings mb-3'>20+ <span className='text_F36A3E'> Professionally designed </span>resume sections</h2>
                            <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200" className='paragraphs mb-4 opacity_08'>Express your professional history without limitations or worry about how your resume looks</p>
                            <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400" className='d-flex align-items-center mb-3'>
                                <span className='me-2 pe-1'><img src={check_icon} alt="check_icon" /></span>
                                <p className='paragraphs mb-0 opacity_09'> Professional sections like <strong className='fw-semibold'>Experience, Skills, Summary </strong> and <strong className='fw-semibold'>Education</strong></p>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600" className='d-flex align-items-center mb-3'>
                                <span className='me-2 pe-1'><img src={check_icon} alt="check_icon" /></span>
                                <p className='paragraphs mb-0 opacity_09'> Professional sections like <strong className='fw-semibold'>Strengths, Quotes, Books, Interests</strong> and <strong className='fw-semibold'>My Time.</strong></p>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800" className='d-flex mb-3 pb-4'>
                                <span className='me-2 pe-1'><img src={check_icon} alt="check_icon" /></span>
                                <p className='paragraphs mb-0 opacity_09'> Other sections like <strong className='fw-semibold'>Certifications, Awards, Achievements, Language</strong> and <strong className='fw-semibold'>Reference</strong></p>
                            </div>
                            <div className='d-md-block d-none' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000"><button className='buttons bg_btn text_ffffff'>Get Started</button></div>
                        </Col>
                        <Col md={5} className='position-relative z-1' data-aos="zoom-in" data-aos-duration="1500">
                            <img className='w-100' src={resume_cards} alt="resume_cards" />
                            <div className='ellipse resume_ellipse_abs z-n1'></div>
                            <div className='d-md-none d-block mt-4' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000"><button className='buttons bg_btn text_ffffff'>Get Started</button></div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="my_container py-5 my-md-5 position-relative">
                <div className='ellipse resume_ellipse_abs_3 d-lg-block d-none'></div>
                <Row className='align-items-center py-md-5 my-md-3'>
                    <Col md={6} className='mb-4 mb-md-0' data-aos="zoom-in" data-aos-duration="1500">
                        <img className='w-100' src={resume_trailer} alt="resume_trailer" />
                    </Col>
                    <Col md={6}>
                        <h2 data-aos="fade-left" data-aos-duration="1500" className='headings mb-3'>Resume trailoring based on the <span className='text_F36A3E h2_img'>job you’re applying</span> for</h2>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200" className='paragraphs mb-3 opacity_08'>Quickly ensure that your resume covers key skills and experience by pasting the job ad you’re applying for</p>
                        <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400" className='d-flex align-items-center mb-3'>
                            <span className='me-2 pe-1'><img src={check_icon} alt="check_icon" /></span>
                            <p className='paragraphs mb-0 opacity_09'>Skills and experience analysis</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600" className='d-flex align-items-center mb-3'>
                            <span className='me-2 pe-1'><img src={check_icon} alt="check_icon" /></span>
                            <p className='paragraphs mb-0 opacity_09'>Actionable Checklist of what else to add to your resume</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="800" className='d-flex align-items-center'>
                            <span className='me-2 pe-1'><img src={check_icon} alt="check_icon" /></span>
                            <p className='paragraphs mb-0 opacity_09'>Instant comparison between your resume and the job posting</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Resume