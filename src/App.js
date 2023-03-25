import React, { useEffect, useState } from 'react';
import img1 from './images/ncclogo.png';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Footer';
export default function App() {      
    return (
        <div>
            <nav class="navbar navbar-expand-bg bg-light">
                <img src={img1} alt="Logo" width="90" class="d-inline-block align-middle ms-3" />
                <h1 class="text-dark fs-3 ms-4">nccedu.in</h1>
                <div className="d-flex ms-auto">
                    <li className="fs-5 me-5 list-inline"><Link to="/Register">Signin</Link></li>
                    <button className="btn btn-outline-primary btn-sm fs-5 me-5 list-inline"><Link to="/Signup">SignUp</Link></button>
                </div>
            </nav>
            <div>
                <nav class="navbar navbar-expand-sm bg-primary">
                    <Navbar />
                </nav>
            </div>
            <div class="bg-image">
            </div>
            <marquee className='text-white bg-danger'>We the cadets of the National Cadet Corps,
                            do solemnly pledge that we shall always uphold the unity of India.
</marquee>
            <h1 className='ms-5 mt-3 text-primary'>GENESIS</h1>
            <p className='ms-5 mr-1'>The Cadet Corps Committee which was formed on 29 Sep 1946 with Pt HN Kunzru as chairman held six meetings in South Block, New Delhi. At the same time, Pt HN Kunzru formed sub-committees which were sent on study tours in all the main provinces of pre-independent India including provinces which are now located in Bangladesh and Pakistan. One sub-committee was also sent on tour to Great Britain and France from 15 Feb 1947 to 31 Mar 1947 to study the Youth and Cadet organisations in those countries.
The Cadet Corps Committee carried out exhaustive study of the problem of youth in India. Its sub-committees after their tour at home and abroad submitted their report to the Govt of India in Mar 1947. Soon after the report was submitted, a far reaching political development began to impact the country, due to which the Cadet Corps Scheme had to be kept in abeyance. The religious strife which then was at its zenith, ultimately led to the partition of the country into India and Pakistan.
On the stroke of midnight of 14/15 Aug 1947, India achieved her independence. Immediately after independence, India was confronted with problems of formidable magnitude concerning not only repatriation of millions of displaced persons from Pakistan but also a full scale invasion of Kashmir by the Armed tribesmen supported by Pakistan. The armed forces had to rush to retrieve Kashmir at a time when they were already pre-occupied with the internal problem of maintaining law and order during the country’s initial stage of consolidation.
The war in Kashmir and the consequent loss of a portion of Indian territory; the open support of Western Powers to Pakistan in the Security Council of the United Nations, made it more than evident to the Indian leaders that they not only had to strengthen the Armed Forces but also create sufficient strength of reserves, who could take up arms, when required. The gravity of time and event found expression in the Indian Legislature through anxious and pressing demand for military training of young men and women throughout the country</p>
            <div className='d-flex justify-content-center  mt-5'>
            <div className='card ms-2 mb-5'>
                    <div className='card-body'>
                <img src="https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2020/01/2020011464.jpg" class="ms-2" height="200" width="230" alt=""/>
                <p>To Create a Human Resource of Organized,<br/>Trained and Motivated Youth, To Provide <br/>Leadership in all Walks of life and be Always <br/>Available for the Service of the Nation.</p>
            </div>
            </div>
            <div className='card ms-2 mb-5'>
                    <div className='card-body'>
                <img src="https://tse4.mm.bing.net/th?id=OIP.AFqkZ-mdblylC86h8txiXQHaE8&pid=Api&P=0" class="ms-2" height="200" width="230" alt=""/>
                <p>To Provide a Suitable Environment to <br/>Motivate the Youth to Take Up a Career<br/>in the Armed Forces.</p>
            </div>
            </div>
            <div className='card ms-2 mb-5'>
                    <div className='card-body'>
                <img src="https://tse1.mm.bing.net/th?id=OIP.5LLCCwnYd89gfdcg2By20AHaFj&pid=Api&P=0" class="ms-2" height="200" width="230" alt=""/>
                <p>To Develop Character, Comradeship,<br/>Discipline, Leadership, Secular Outlook,<br/>Spirit of Adventure, and Ideals of Selfless<br/>Service amongst the Youth of the Country.</p>
            </div>
            </div>
            </div>

            <Footer/>
        </div>

    )
}