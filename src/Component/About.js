import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
export default function About() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div class="mt-3 ms-4 me-1 d-flex">
                <div class="">
                    <div class="">
                        <h1 class="card-text text-primary ms-2">AIM OF NCC</h1>
                        <h4 class="fs-5">The Aim of the NCC laid out in 1988 have stood the test of time and continue to meet the
                            requirements expected of it in the current socio–economic scenario of the country. The NCC aims at developing character, comeadeship, discipline, a secular outlook, the spirit.</h4>
                        <h1 class="ms-2 mt-2 text-primary">PLEDGE</h1>
                        <h4 class="fs-5 ms-2">We the cadets of the National Cadet Corps,
                            do solemnly pledge that we shall always uphold the unity of India.
                            We resolve to be disciplined and responsible citizens of our nation.
                            We shall undertake positive community service in the spirit of selflessness
                            and concern for our fellow beings.</h4>
                    </div>
                </div>
            </div>
            <div className='justify-content-center mt-4 d-flex'>
                <div className='card ms-2'>
                    <div className=''>
                        <img src="https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2020/01/2020011435.png" height="210" width="360" alt="" />
                        <p>Then Colonel (later Chief of Army Staff) GG Bewoor.First Director (now called Director General) of NCC</p>
                    </div>
                </div>
                <div className='ms-4'>
                    <h1 className=' text-primary'>Birth of the National Cadet Corps</h1>
                    <h7 className='mt-4'>The Kashmir War of 1948 taught a very important lesson to India, that freedom needs to be protected by strong Armed Forces. <br />Its immediate manifestation was that the recommendations of Kunzuru committee were placed before the Constituent Assembly (Legislature) on 13 Mar 1948. A draft Bill was sent to the Constituent Assembly (Legislative) on 19 Mar 1948, which evoked great interest and enthusiasm amongst all members. After due deliberations and amendments, the Bill was passed by the Assembly on 08 Apr 1948. The Central Govt accepted the opinion of the Provincial Govts and the Standing Committee’s recommendations for the formation of a Cadet Corps which was to be named as “National Cadet Corps”, as recommended by the Kunzuru Committee.
                        The Bill received the assent of the Governor General on 16 Apr 1948, and the National Cadet Corps came into being by an Act of the Parliament Act No. XXXI of 1948 designated ‘The National Cadet Corps Act 1948’. <br /> 
                        <br/>This Act with 13 clauses, prescribed the formation of the National Cadet Corps in India.
                        The first step in the process of raising of the NCC was setting up of the NCC Secretariat now called Headquarters Directorate General NCC. In fact, even before the NCC Bill was passed by the Constituent Assembly (Legislative), the Ministry of Defence had set up the nucleus of the NCC Secretariat, with Col (later retired as Chief of Army Staff) Gopal Gurunath Bewoor as first Director of the NCC. He took over as Director of NCC on 31 Mar 1948.</h7>
                </div>
            </div>
            <h1 className='ms-5 mt-5 text-primary'>Inauguration of NCC</h1>
            <p className='ms-5'>The schools and colleges opened after summer vacation and the NCC of Independent India was inaugurated on 15 Jul 1948. The journey of this Indian youth organisation, which has now become the largest uniformed youth organisation in the world had begun.

                In the year 1948 a total of 96 units of Senior Division were raised, comprising variety of units to include one Armoured Corps, three Artillery, five Engineers, two Signals and two Medical – and 83 companies of Infantry. As there was some delay in the establishment of NCC in UP, Madras and Bihar, whose Govts wanted every student joining NCC to be verified by police prior to enrolment, only 20,000 cadets had joined the NCC in the year 1948. The raising of the Junior Division units did not progress well owing to shortage of trained school teachers. The main difficulty was that adequate number of teachers of the desired quality did not come forward to work as NCC officers. There were various administrative reasons attributed to this. Sometimes, colleges and schools were not in a position to spare the teaching staff except during the summer vacation.
                Thus the NCC which has now13 lakh cadets on its rolls, had started with 20,000 cadets in 1948.</p>
            <div className='d-flex justify-content-center mb-5'>
                <div className='card h-100 w-20 ms-3'>
                    <div className='card-body'>
                        <img src="https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2020/01/2020011416.png" height="200" width="200" alt="" />
                        <p>First Prime Minister of India Jawaharlal<br />Nehru reviewing Guard of Honour</p>
                    </div>
                </div>
                <div className='card h-100 ms-5'>
                    <div className='card-body'>
                        <img src="https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2020/01/2020011467.png" height="200" width="200" alt="" />
                        <p>Pandit Jawaharlal Nehru<br />presenting Republic Day banner</p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}