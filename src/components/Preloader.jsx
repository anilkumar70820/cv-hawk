import React from 'react'
import resume_trailor from '../assets/images/webp/resume_trailer.webp'
const Preloader = () => {
  return (
    <div className='d-flex justify-content-center align-items-center position-fixed top-0 start-0 bg-white min-vh-100 w-100 z-5'>
      <div className='d-flex flex-column justify-content-center align-items-center'><h1 className='fs_xl text_000000 ff_rubik preloading_animation mb-4 text-center'>Your Resume Trailor</h1><img className='preloading_animation width_sm_100' src={resume_trailor} alt="resume_treailor" /></div>
    </div>
  )
}

export default Preloader