import React from 'react'
import darrell from '../assets/images/svg/darrell_steward.svg'
import savannah_nguyen from '../assets/images/svg/savannah_nguyen.svg'
import esther_howard from '../assets/images/svg/esther_howard.svg'
import jenny_wilson from '../assets/images/svg/jenny_wilson.svg'
import wade_warren from '../assets/images/svg/wade_warren.svg'
import stars from '../assets/images/svg/stars.svg'
import down_arrow from '../assets/images/svg/down_arrow.svg'
import quotes from '../assets/images/svg/quotes-left.svg'
import Slider from 'react-slick'
import { LeftArrow, RightArrow } from './Icons'

const OurClients = () => {
    const slider = React.useRef(null);
    const slider2 = React.useRef(null);
    var clients = {
        dots: false,
        arrows: false,
        // autoplay: true,
        infinite: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    }
    return (
        <section className='help_center_bg py-5'>
            <div className="my_container py-md-4 my-md-2 pb-4 pb-md-0 position-relative">
                <div onClick={() => slider?.current?.slickPrev()} className='cursor_pointer slider_arrow d-inline-block left_arrow_abs next_btn z-1 d-sm-block d-none'>
                    <LeftArrow />
                </div>
                <div onClick={() => slider?.current?.slickNext()} className='cursor_pointer slider_arrow d-inline-block right_arrow_abs prev_btn z-1 d-sm-block d-none'>
                    <RightArrow />
                </div>
                <div onClick={() => slider2?.current?.slickPrev()} className='cursor_pointer slider_arrow d-inline-block left_arrow_abs next_btn z-1 d-sm-none d-block'>
                    <LeftArrow />
                </div>
                <div onClick={() => slider2?.current?.slickNext()} className='cursor_pointer slider_arrow d-inline-block right_arrow_abs prev_btn z-1 d-sm-none d-block'>
                    <RightArrow />
                </div>
                <h2 className='headings text-center mb-5 pb-3'data-aos="fade-right" data-aos-duration="1500"><span className='position-relative'>What <span className='what_bg d-lg-block d-none'><img src={quotes} alt="quetos" /></span></span> our Clients Say</h2>
                <Slider {...clients} ref={slider} className='clients d-sm-block d-none'>
                    <div className='px-4'>
                        <div className='d-flex justify-content-lg-between mb-4 pb-2'>
                            <div className='mt-lg-4 pt-lg-1 mt-0 pt-0' data-aos="fade-right" data-aos-duration="1500">
                                <div className='comment_box mb-4 position-relative'>
                                    <p className='paragraphs opacity_08 mb-0'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                    <img className='arrow_abs' src={down_arrow} alt="arrow" />
                                </div>
                                <div className='d-flex align-items-center pt-2 ms-4'>
                                    <img className='me-2' src={darrell} alt="darrell" />
                                    <div>
                                        <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Darrell Steward</h3>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className='ms-lg-0 ms-5 mt-lg-0 mt-4' data-aos="fade-down" data-aos-duration="1500">
                                <div className='comment_box mb-4 position-relative'>
                                    <p className='paragraphs opacity_08 mb-0'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                    <img className='arrow_abs' src={down_arrow} alt="arrow" />
                                </div>
                                <div className='d-flex align-items-center pt-2 ms-4'>
                                    <img className='me-2' src={savannah_nguyen} alt="savannah_nguyen" />
                                    <div>
                                        <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Savannah Nguyen</h3>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5 d-lg-block d-none' data-aos="fade-left" data-aos-duration="1500">
                                <div className='comment_box mb-4 position-relative'>
                                    <p className='paragraphs opacity_08 mb-0'>Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                    <img className='arrow_abs' src={down_arrow} alt="arrow" />
                                </div>
                                <div className='d-flex align-items-center pt-2 ms-4'>
                                    <img className='me-2' src={esther_howard} alt="esther_howard" />
                                    <div>
                                        <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Esther Howard</h3>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between justify-content-lg-center'>
                            <div className='me-5 pe-3' data-aos="fade-right" data-aos-duration="1500">
                                <div className='comment_box mb-4 position-relative'>
                                    <p className='paragraphs opacity_08 mb-0'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent eu.</p>
                                    <img className='arrow_abs' src={down_arrow} alt="arrow" />
                                </div>
                                <div className='d-flex align-items-center pt-2 ms-4'>
                                    <img className='me-2' src={jenny_wilson} alt="jenny_wilson" />
                                    <div>
                                        <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Jenny Wilson</h3>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3' data-aos="fade-left" data-aos-duration="1500">
                                <div className='comment_box mb-4 position-relative'>
                                    <p className='paragraphs opacity_08 mb-0'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                    <img className='arrow_abs' src={down_arrow} alt="arrow" />
                                </div>
                                <div className='d-flex align-items-center pt-2 ms-4'>
                                    <img className='me-2' src={wade_warren} alt="wade_warren" />
                                    <div>
                                        <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Wade Warren</h3>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-4'>
                        <div className='d-flex justify-content-lg-between mb-4 pb-2'>
                            <div className='mt-lg-4 mt-0 pt-lg-1 pt-0' data-aos="fade-right" data-aos-duration="1500">
                                <div className='comment_box mb-4 position-relative'>
                                    <p className='paragraphs opacity_08 mb-0'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                    <img className='arrow_abs' src={down_arrow} alt="arrow" />
                                </div>
                                <div className='d-flex align-items-center pt-2 ms-4'>
                                    <img className='me-2' src={darrell} alt="darrell" />
                                    <div>
                                        <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Darrell Steward</h3>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className='ms-lg-0 ms-5 mt-lg-0 mt-4' data-aos="fade-down" data-aos-duration="1500">
                                <div className='comment_box mb-4 position-relative'>
                                    <p className='paragraphs opacity_08 mb-0'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                    <img className='arrow_abs' src={down_arrow} alt="arrow" />
                                </div>
                                <div className='d-flex align-items-center pt-2 ms-4'>
                                    <img className='me-2' src={savannah_nguyen} alt="savannah_nguyen" />
                                    <div>
                                        <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Savannah Nguyen</h3>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5 d-lg-block d-none' data-aos="fade-left" data-aos-duration="1500">
                                <div className='comment_box mb-4 position-relative'>
                                    <p className='paragraphs opacity_08 mb-0'>Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                    <img className='arrow_abs' src={down_arrow} alt="arrow" />
                                </div>
                                <div className='d-flex align-items-center pt-2 ms-4'>
                                    <img className='me-2' src={esther_howard} alt="esther_howard" />
                                    <div>
                                        <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Esther Howard</h3>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between justify-content-lg-center'>
                            <div className='me-5 pe-3' data-aos="fade-right" data-aos-duration="1500">
                                <div className='comment_box mb-4 position-relative'>
                                    <p className='paragraphs opacity_08 mb-0'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent eu.</p>
                                    <img className='arrow_abs' src={down_arrow} alt="arrow" />
                                </div>
                                <div className='d-flex align-items-center pt-2 ms-4'>
                                    <img className='me-2' src={jenny_wilson} alt="jenny_wilson" />
                                    <div>
                                        <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Jenny Wilson</h3>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3' data-aos="fade-left" data-aos-duration="1500">
                                <div className='comment_box mb-4 position-relative'>
                                    <p className='paragraphs opacity_08 mb-0'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                    <img className='arrow_abs' src={down_arrow} alt="arrow" />
                                </div>
                                <div className='d-flex align-items-center pt-2 ms-4'>
                                    <img className='me-2' src={wade_warren} alt="wade_warren" />
                                    <div>
                                        <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Wade Warren</h3>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                <Slider {...clients}  ref={slider2} className='clients d-sm-none d-block'>
                    <div className='d-flex justify-content-center' data-aos="zoom-in" data-aos-duration="1500">
                        <div>
                            <div className='comment_box mb-4 position-relative'>
                                <p className='paragraphs opacity_08 mb-0'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                <img className='arrow_abs' src={down_arrow} alt="arrow" />
                            </div>
                            <div className='d-flex align-items-center pt-2 ms-4'>
                                <img className='me-2' src={darrell} alt="darrell" />
                                <div>
                                    <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Darrell Steward</h3>
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' data-aos="zoom-in" data-aos-duration="1500">
                        <div>
                            <div className='comment_box mb-4 position-relative'>
                                <p className='paragraphs opacity_08 mb-0'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                <img className='arrow_abs' src={down_arrow} alt="arrow" />
                            </div>
                            <div className='d-flex align-items-center pt-2 ms-4'>
                                <img className='me-2' src={savannah_nguyen} alt="savannah_nguyen" />
                                <div>
                                    <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Savannah Nguyen</h3>
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' data-aos="zoom-in" data-aos-duration="1500">
                        <div>
                            <div className='comment_box mb-4 position-relative'>
                                <p className='paragraphs opacity_08 mb-0'>Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                <img className='arrow_abs' src={down_arrow} alt="arrow" />
                            </div>
                            <div className='d-flex align-items-center pt-2 ms-4'>
                                <img className='me-2' src={esther_howard} alt="esther_howard" />
                                <div>
                                    <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Esther Howard</h3>
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' data-aos="zoom-in" data-aos-duration="1500">
                        <div>
                            <div className='comment_box mb-4 position-relative'>
                                <p className='paragraphs opacity_08 mb-0'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent eu.</p>
                                <img className='arrow_abs' src={down_arrow} alt="arrow" />
                            </div>
                            <div className='d-flex align-items-center pt-2 ms-4'>
                                <img className='me-2' src={jenny_wilson} alt="jenny_wilson" />
                                <div>
                                    <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Jenny Wilson</h3>
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' data-aos="zoom-in" data-aos-duration="1500">
                        <div>
                            <div className='comment_box mb-4 position-relative'>
                                <p className='paragraphs opacity_08 mb-0'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                <img className='arrow_abs' src={down_arrow} alt="arrow" />
                            </div>
                            <div className='d-flex align-items-center pt-2 ms-4'>
                                <img className='me-2' src={wade_warren} alt="wade_warren" />
                                <div>
                                    <h3 className='ff_rubik fw-normal fs_2xmd text_000000 mb-1'>Wade Warren</h3>
                                    <img src={stars} alt="stars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default OurClients