'use client'
import Link from "next/link"


export default function Whychoose() {
    return (
        <>
    
            {/* Why Choose Two Start */}
        <section className="why-choose-two">
            <div className="why-choose-two__shape-1 float-bob-x">
                <img src="assets/images/shapes/why-choose-two-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="why-choose-two__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Why Choose Us</span>
                                </div>
                                <h2 className="section-title__title">Creating Spaces for a the Better Tomorrow
                                </h2>
                            </div>
                            <p className="why-choose-two__text">We believe in constructing spaces that stand the test of time, combining durability with aesthetics. Our approach revolves around sustainable practices, advanced techniques, and a commitment to excellence.</p>
                            <ul className="list-unstyled why-choose-two__points">
                                <li style={{display: 'flex'}}>
                                    <div  className="why-choose-two__points-icon">
                                        <span className="icon-engineer-2"></span>
                                    </div>
                                    <div style={{width: '80%'}} className="why-choose-two__points-content">
                                        <h5 className="why-choose-two__points-title"><p style={{color: 'white'}}>BuildWise</p></h5>
                                        <p className="why-choose-two__points-text">Tailored construction solutions to ensure superior outcomes.</p>
                                    </div>
                                </li>
                                <li style={{display: 'flex'}}>
                                    <div  className="why-choose-two__points-icon">
                                        <span className="icon-buildings"></span>
                                    </div>
                                    <div style={{width: '80%'}} className="why-choose-two__points-content">
                                        <h5 className="why-choose-two__points-title"><p style={{color: 'white'}} href="/">Buildings</p></h5>
                                        <p className="why-choose-two__points-text">Designing and constructing spaces that balance functionality with elegance.</p>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="why-choose-two__right">
                            <div className="why-choose-two__img wow slideInRight" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/why-choose-two-img-1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Why Choose Two End */}
        </>
    )
}
