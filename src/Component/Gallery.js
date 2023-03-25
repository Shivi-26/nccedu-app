import React from 'react';
import Header from '../Header'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'
import img10 from '../images/img10.jpg'
import img11 from '../images/img11.jpg'
import img12 from '../images/img12.jpg'
import img13 from '../images/img13.jpg'
import Footer from '../Footer'

export default function Gallery() {
    return (
        <div>
            <Header />
            <section className="gallery min-vh-90">
                <h1 className='mb-5 text-center text-danger'>Memories📸 of training at the OTA.</h1>
                <div className='container-lg'>
                    <div className='row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3'>
                        <div className='col'>
                            <img src={img10} class="gallery-item" alt="gallery" />
                        </div>
                        <div className='col'>
                            <img src={img11} class="gallery-item" alt="gallery" />
                        </div>
                        <div className='col'>
                            <img src={img12} class="gallery-item" alt="gallery" />
                        </div>
                        <div className='col'>
                            <img src={img13} class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <img
                                src={img1}
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="gallery"
                            />
                            <img
                                src={img2}
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="gallery"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src={img3}
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="gallery"
                            />

                            <img
                                src={img4}
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="gallery"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src={img5}
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="gallery"
                            />

                            <img
                                src={img6}
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="gallery"
                            />
                        </div>
                        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <img
                                src={img7}
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="gallery"
                            />
                        </div>
                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src={img8}
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="gallery"
                            />

                            <img
                                src={img9}
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="gallery"
                            />
                        </div>

                    </div>
                </div>
            </section>
            <div class=''>
                <Footer />
            </div>
        </div>
    )
} 