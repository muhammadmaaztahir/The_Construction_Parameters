'use client'
import Link from "next/link"


export default function Services() {
    return (
        <>

            {/*Services Three Start */}
            <section className="services-three">
                <div className="container">
                    <div className="row">
                        {/*Services Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="services-three__single">
                                <div className="services-three__icon">
                                    <span className="icon-architect"></span>
                                </div>
                                <h3 className="services-three__title">Expert Craftsmanship</h3>
                                <p className="services-three__text">With years of experience, we deliver precision and excellence in every project, ensuring durable and high-quality results.</p>
                                <div className="services-three__btn-box">

                                </div>
                            </div>
                        </div>
                        {/*Services Three Single End*/}
                        {/*Services Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms">
                            <div className="services-three__single">
                                <div className="services-three__icon">
                                    <span className="icon-buildings"></span>
                                </div>
                                <h3 className="services-three__title">Innovative Solutions
                                </h3>
                                <p className="services-three__text">We embrace modern techniques and technologies to provide creative, cost-effective, and efficient construction solutions.</p>
                                <div className="services-three__btn-box">

                                </div>
                            </div>
                        </div>
                        {/*Services Three Single End*/}
                        {/*Services Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="600ms">
                            <div className="services-three__single">
                                <div className="services-three__icon">
                                    <img style={{
                                        height: '60px',
                                        
                                    }} src="assets/images/icon/customer-review.png" alt="" />
                                </div>
                                <h3 className="services-three__title">Client-Centric Approach</h3>
                                <p className="services-three__text">Our commitment to your satisfaction drives us to communicate openly, meet deadlines, and exceed expectations every time.</p>
                                <div className="services-three__btn-box">

                                </div>
                            </div>
                        </div>
                        {/*Services Three Single End*/}
                    </div>
                </div>
            </section>
            {/*Services Three Start */}

        </>
    )
}
