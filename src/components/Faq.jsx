import React from 'react'
import { Accordion } from 'react-bootstrap'

const Faq = () => {
    return (
        <section className='py-5 position-relative'>
            <div className='my_container faq_mb'>
                <h2 className='headings text-center mb-5' data-aos="fade-right" data-aos-duration="1500">Frequently Asked Questions</h2>
                <div className='d-flex justify-content-center' data-aos="zoom-in" data-aos-duration="1500">
                    <Accordion defaultActiveKey="0" className='width-856'>
                        <Accordion.Item eventKey="1" className='w-100 bg-transparent'>
                            <Accordion.Header>Q1. How does the CVhawk work??</Accordion.Header>
                            <Accordion.Body className='fs_sm fw-normal ff_rubik'>
                                Absolutely! We understand that your CV is a dynamic document that may require updates and <span className='d-md-block'> modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make</span> changes whenever needed.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='w-100 bg-transparent'>
                            <Accordion.Header>Q2. Is the CVhawk completely free to use?</Accordion.Header>
                            <Accordion.Body className='fs_sm fw-normal ff_rubik'>
                                Absolutely! We understand that your CV is a dynamic document that may require updates and <span className='d-md-block'> modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make</span> changes whenever needed.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='w-100 bg-transparent'>
                            <Accordion.Header>Q3. Can I edit my CV after I've saved it?</Accordion.Header>
                            <Accordion.Body className='fs_sm fw-normal ff_rubik'>
                                Absolutely! We understand that your CV is a dynamic document that may require updates and <span className='d-md-block'> modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make</span> changes whenever needed.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='w-100 bg-transparent'>
                            <Accordion.Header>Q4. Can I import my existing CV into the builder?</Accordion.Header>
                            <Accordion.Body className='fs_sm fw-normal ff_rubik'>
                                Absolutely! We understand that your CV is a dynamic document that may require updates and <span className='d-md-block'> modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make</span> changes whenever needed.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className='w-100 bg-transparent'>
                            <Accordion.Header>Q5. Is my personal information safe and secure?</Accordion.Header>
                            <Accordion.Body className='fs_sm fw-normal ff_rubik'>
                                Absolutely! We understand that your CV is a dynamic document that may require updates and <span className='d-md-block'> modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make</span> changes whenever needed.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6" className='w-100 bg-transparent border-0'>
                            <Accordion.Header>Q6. What kind of templates are available in the CV builder?</Accordion.Header>
                            <Accordion.Body className='fs_sm fw-normal ff_rubik'>
                                Absolutely! We understand that your CV is a dynamic document that may require updates and <span className='d-md-block'> modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make</span> changes whenever needed.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className='px-4 get_start_abs w-100'>
                <div className="my_container bg_btn py-5 rounded-4" data-aos="fade-down" data-aos-duration="2000">
                    <h2 className='headings text-center text_ffffff my-3'>Your Path to Success Starts Here:<span className='d-md-block'> Build Your CV Today</span></h2>
                    <p className='text-center ff_rubik fs_sm fw-normal text_ffffff mb-4 pb-3'> Our CV builder not only provides a user-friendly interface but also offers valuable <span className='d-md-block'>guidance along the way.</span></p>
                    <div className='d-flex justify-content-center mb-3'><button className='bg-white buttons'>Get Started</button></div>
                </div>
            </div>
        </section>
    )
}

export default Faq