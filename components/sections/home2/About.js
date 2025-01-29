'use client'

export default function About() {
    return (
        <>

            {/*About Two Start */}
            <section className="about-two" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two__left">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">ABOUT US</span>
                                    </div>
                                    <h2 className="section-title__title">Building Dreams One Brick at a Time</h2>
                                </div>
                                <p className="about-two__text">
                                    With 15+ years of expertise in the UAE, we specialize in delivering top-notch construction and maintenance services. Our focus is on creating enduring spaces that exceed expectations. From concept to completion, we prioritize precision, innovation, and customer satisfaction to bring your vision to life.
                                </p>

                                <h3 style={{ textTransform: 'uppercase', marginBottom: '20px', fontWeight: 'bold' }}>Our Core Values</h3>
                                <ul className="list-unstyled about-two__points">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <div className="text">
                                            <p>Commitment to Building Your Dreams</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <div className="text">
                                            <p>Constructive with Precision</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <div className="text">
                                            <p>Creative Innovations</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <div className="text">
                                            <p>Customer-Centric Construction</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-two__right">
                                <div className="about-two__img wow slideInRight" data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <img src="assets/images/resources/about-two-img-2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*About Two End */}
        </>
    )
}
