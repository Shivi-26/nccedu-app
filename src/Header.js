import React from 'react';
import img1 from './images/ncc.jfif'
export default function Header() {
    return (
        <nav className='d-flex'>
            <img src={img1} height='100' width='65' class="ms-4 mt-2" alt="" />
            <div class='mt-3 ms-4'>
                <h5>National Cadet Corps</h5>
                <h6>राष्ट्रीय कैडेट कोर</h6>
            </div>
            <div class="img-container">
                <img src="https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2020/01/2020010935.png" height='100' width='65' class="mt-2" alt="" />
            </div>
        </nav>
    )
}