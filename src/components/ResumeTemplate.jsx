import React from 'react'
import { Col, Row } from 'react-bootstrap'
import themes from '../assets/images/svg/themes.svg'
import customize from '../assets/images/svg/customize.svg'
import copy from '../assets/images/svg/copy.svg'
import template from '../assets/images/svg/template.svg'
import history from '../assets/images/svg/history.svg'
import Slider from 'react-slick'

const ResumeTemplate = () => {
    var settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        slidesToShow: 3.2,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    }
    return (
        <section className='py-5 overflow-hidden position-relative z-1' id='resume_templates'>
            <div className="ellipse resume_template_abs1 z-n1 d-md-block d-none"></div>
            <div className="ellipse resume_template_abs2 z-n1 d-lg-block d-none"></div>
            <div className="my_container py-md-5 my-md-5">
                <Row className='py-md-3'>
                    <Col lg={6} className='mt-lg-4 mb-lg-0 mb-5' data-aos="zoom-in" data-aos-duration="1500">
                        <img className='w-100 rounded-4 template_shadow' src="https://cv-hawk-340.netlify.app/assets/themesectionimg-bf4779b9.gif" alt="resume_template" />
                    </Col>
                    <Col lg={6}>
                        <Slider {...settings} className='mb-5 pb-3 resume_template z-1'>
                            <div data-aos="fade-down" data-aos-duration="1500">
                                <div className='settings_card my-4 d-flex justify-content-center align-items-center flex-column '>
                                    <div className='d-flex justify-content-center mb-3 pb-1'><img src={themes} alt="theme_icon" /></div>
                                    <h4 className='ff_rubik fs_xmd fw-medium text_000000 text-center'>Themes</h4>
                                </div>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400">
                                <div className='settings_card my-4 d-flex justify-content-center align-items-center flex-column'>
                                    <div className='d-flex justify-content-center mb-3 pb-1'><img src={customize} alt="customize_icon" /></div>
                                    <h4 className='ff_rubik fs_xmd fw-medium text_000000 text-center'>Customize</h4>
                                </div>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="1500" data-aos-delay="600">
                                <div className='settings_card my-4 d-flex justify-content-center align-items-center flex-column'>
                                    <div className='d-flex justify-content-center mb-3 pb-1'><img src={copy} alt="copy_icon" /></div>
                                    <h4 className='ff_rubik fs_xmd fw-medium text_000000 text-center'>Make copies</h4>
                                </div>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="1500" data-aos-delay="800">
                                <div className='settings_card my-4 d-flex justify-content-center align-items-center flex-column'>
                                    <div className='d-flex justify-content-center mb-3 pb-1'><img src={template} alt="Templates_icon" /></div>
                                    <h4 className='ff_rubik fs_xmd fw-medium text_000000 text-center'>Templates</h4>
                                </div>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1000">
                                <div className='settings_card my-4 d-flex justify-content-center align-items-center flex-column'>
                                    <div className='d-flex justify-content-center mb-3 pb-1'><img src={history} alt="history_icon" /></div>
                                    <h4 className='ff_rubik fs_xmd fw-medium text_000000 text-center'>Version history</h4>
                                </div>
                            </div>
                        </Slider>
                        <p data-aos="zoom-in" data-aos-duration="1500" className="paragraphs">Theme's robust features allow you to showcase your skills, accomplishments, and experiences in a captivating way. From customizing the layout to selecting the perfect color scheme, every detail can be tailored to match your style and industry. </p>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default ResumeTemplate