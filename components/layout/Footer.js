import Link from "next/link"

const Footer = () => {
    const handleScroll = (e, targetId) => {
      e.preventDefault(); // Prevent default anchor behavior
  
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth", // Smooth scrolling
          block: "start", // Align with the start of the section
        });
      }
    };


    return (   
        <>
            {/*Site Footer Two Start*/}
            <footer className="site-footer-two">
                <div className="site-footer-two__shape-1 img-bounce"
                    style={{ backgroundImage: 'url(assets/images/shapes/site-footer-two-shape-1.png' }} ></div>
                <div className="site-footer-two__top">
                    <div className="container">
                        <div className="site-footer-two__top-inner">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="footer-widget-two__column footer-widget-two__about">
                                        <div className="footer-widget-two__logo">
                                        <Link href="#banner" onClick={(e) => handleScroll(e, "banner")}>
                                        <img src="assets/images/logo-2.png"
                                                alt="" />
                                                </Link>

                                           
                                        </div>
                                        <p className="footer-widget-two__about-text">Reach out to us for your construction and maintenance needs. Let us help you build spaces that matter.</p>
                                        <div className="site-footer-two__social">
                                            <Link href="#"><i className="icon-facebook"></i></Link>
                                            <Link href="#"><i className="icon-twitter"></i></Link>
                                            <Link href="#"><i className="icon-link-in"></i></Link>
                                            <Link href="#"><i className="icon-pinterest"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="footer-widget-two__column footer-widget-two__service">
                                        <div className="footer-widget-two__title-box">
                                            <h3 className="footer-widget-two__title">Our Main Services</h3>
                                        </div>
                                        <ul className="footer-widget-two__service-list list-unstyled">
                                            <li>
                                                <p style={{ color: 'white' }}> <span style={{ color: '#FF5E14', fontSize: '12px', marginRight: '10px' }} className="icon-angle-left"></span>
                                                    Construction Work</p>
                                            </li>
                                            <li>
                                                <p style={{ color: 'white' }}> <span style={{ color: '#FF5E14', fontSize: '12px', marginRight: '10px' }} className="icon-angle-left"></span>
                                                    Rennovation Work</p>
                                            </li>
                                            <li>
                                                <p style={{ color: 'white' }}> <span style={{ color: '#FF5E14', fontSize: '12px', marginRight: '10px' }} className="icon-angle-left"></span>
                                                    False Ceiling</p>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="footer-widget-two__column footer-widget-two__links">
                                        <div className="footer-widget-two__title-box">
                                            <h3 className="footer-widget-two__title">Useful Links</h3>
                                        </div>
                                        <ul className="footer-widget-two__service-list list-unstyled">
                                            <li>
                                                <Link href="#about" onClick={(e) => handleScroll(e, "about")}>
                                                    <span className="icon-angle-left"></span> About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#services" onClick={(e) => handleScroll(e, "services")}>
                                                    <span className="icon-angle-left"></span> Services
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#projects" onClick={(e) => handleScroll(e, "projects")}>
                                                    <span className="icon-angle-left"></span> Projects
                                                </Link>
                                            </li>
                                            
                                           
                                            <li>
                                                <Link href="#testimonials" onClick={(e) => handleScroll(e, "testimonials")}>
                                                    <span className="icon-angle-left"></span> Testimonials
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                    <div className="footer-widget-two__column footer-widget-two__contact">
                                        <div className="footer-widget-two__title-box">
                                            <h3 className="footer-widget-two__title">Contact Us</h3>
                                        </div>
                                        <ul className="footer-widget-two__contact-list list-unstyled">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-arrow-up-2"></span>
                                                </div>
                                                <div className="content">
                                                    <p><Link href="mailto:thesmartsolutions72@gmail.com">thesmartsolutions72@gmail.com</Link></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-arrow-up-2"></span>
                                                </div>
                                                <div className="content">
                                                    <p><Link href="tel:+923365491349">(+92) 336 5491 349</Link></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-arrow-up-2"></span>
                                                </div>
                                                <div className="content">
                                                    <p>Plot No. FL-3, Gulshan e Iqbal Block 5, Karachi</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer-two__bottom">
                    <div className="container">
                        <div className="site-footer-two__bottom-inner">
                            <p className="site-footer-two__bottom-text">© The Construction Parameters 2025 | All Rights Reserved</p>
                            <ul className="list-unstyled site-footer-two__bottom-menu">
                                <li><Link href="/termandcondition">Terms & Condition</Link></li>
                                <li><Link href="/privacypolicy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/*Site Footer End*/}

        </>
    )
}

export default Footer;
