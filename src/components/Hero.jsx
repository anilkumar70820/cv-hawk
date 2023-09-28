import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/webp/Frame 209 (1) 1.webp'
import card_1 from '../assets/images/webp/hero_cards_1.webp'
import card_2 from '../assets/images/webp/hero_cards_2.webp'
import card_3 from '../assets/images/webp/hero_cards_3.webp'
import card_4 from '../assets/images/webp/hero_cards_4.webp'
import dot from '../assets/images/svg/hero_dot.svg'
import double_circle from '../assets/images/svg/double_circle.svg'
import half_circle from '../assets/images/svg/half_circle.svg'
import box from '../assets/images/svg/box.svg'
import resume_clean from '../assets/images/webp/Elegant - Clean.webp'
import Slider from 'react-slick'

const Hero = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    if (showNavbar) {
        document.body.classList.remove('overflow-hidden');
    } else {
        document.body.classList.add('overflow-hidden')
    }
    var elegant = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        // cssEase: "linear",
        pauseOnHover: false,
        // speed: 2500,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    }
    return (
        <section className='d-flex flex-column min-vh-100'>
            <header className='w-100'>
                <div className='my_container'>
                    <nav className='d-flex justify-content-between align-items-center'>
                        <img src={logo} alt="logo" />
                        <ul className={`${showNavbar ? 'd-flex align-items-center gap-4 mb-0 nav_sm p-0' : 'd-flex align-items-center gap-4 mb-0 nav_sm nav_show p-0'} `}>
                            <li className='d-sm-none d-block'><img src={logo} alt="logo" /></li>
                            <li><Link onClick={() => setShowNavbar(true)} className='nav_links me-lg-3 link1'>Home</Link></li>
                            <li><Link onClick={() => setShowNavbar(true)} className='nav_links me-lg-3 link1'>About</Link></li>
                            <li><Link onClick={() => setShowNavbar(true)} className='nav_links me-lg-3 link1'>We’ll help you</Link></li>
                            <li><Link onClick={() => setShowNavbar(true)} className='nav_links link1'>Testimonials</Link></li>
                            <li className='d-sm-none d-block'><button className='buttons text_ffffff bg_btn'>Get in Touch</button></li>
                            <span title="close" className="ms-4 close_nav text-black fw-bold fs-1 d-lg-none" onClick={() => setShowNavbar(true)}>&times;</span>
                        </ul>
                        <div className='d-flex'>
                            <button className='buttons text_ffffff d-none d-sm-block me-4 me-lg-0 bg_btn'>Get in Touch</button>
                            <span title="open"
                                className="d-inline d-lg-none fw-bold fs-1 text-black"
                                onClick={() => setShowNavbar(false)}>
                                &#9776; </span>
                        </div>
                    </nav>
                </div>
            </header>
            <div className='d-flex flex-grow-1 align-items-center position-relative'>
                <div className='bg_ellipse'></div>
                <img className='box_abs' src={box} alt="vectors" />
                <img className='half_circle_abs' src={half_circle} alt="vectors" />
                <img className='double_circle_abs d-none d-md-block' src={double_circle} alt="vectors" />
                <img className='dot_abs' src={dot} alt="vectors" />
                <div className='my_container position-relative'>
                    <img className='card_abs_1 d-md-block d-none' src={card_1} alt="cards" />
                    <img className='card_abs_2 d-md-block d-none' src={card_2} alt="cards" />
                    <img className='card_abs_3 d-md-block d-none' src={card_3} alt="cards" />
                    <img className='card_abs_4 d-md-block d-none' src={card_4} alt="cards" />
                    <h1 className='mb-3 ff_rubik fs_xl fw-semibold text_000000 text-center mt-5 mt-sm-0'>Unlock Your Potential with a <span className='d-md-block'> Professional <span className='h1_img'>CV Builder</span> </span></h1>
                    <p className='pb-3 mb-4 paragraphs text-center'>Our user-friendly platform guides you through the process, allowing you to <span className='d-md-block'>customize every section to align with your unique career goals.</span></p>
                    <div className='d-flex justify-content-center gap-3'>
                        <button className='buttons bg_btn text_ffffff'>Get Started</button>
                        <button className='buttons bg-transparent text_F36A3E btn_border'>Watch Demo</button>
                    </div>
                </div>
            </div>
                    <Slider {...elegant} className='d-sm-none d-block mt-5'>
                        <div className='d-flex justify-content-center'><img className='w-100' src={resume_clean} alt="elegent" /></div>
                        <div className='d-flex justify-content-center'><img className='w-100' src={resume_clean} alt="elegent" /></div>
                        <div className='d-flex justify-content-center'><img className='w-100' src={resume_clean} alt="elegent" /></div>
                        <div className='d-flex justify-content-center'><img className='w-100' src={resume_clean} alt="elegent" /></div>
                    </Slider>
        </section>
    )
}

export default Hero