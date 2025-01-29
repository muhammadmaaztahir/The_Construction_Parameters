
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}
export default function Banner() {
    return (
        <>

    
	{/*Main Slider Two Start*/}
	<section className="main-slider-two" id="banner">
		<Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
			<div className="swiper-wrapper">
				
				<SwiperSlide>
				<div className="swiper-slide">
					<div className="main-slider-two__shape-1"></div>
					<div className="main-slider-two__shape-2"></div>
					<div className="main-slider-two__shape-3"></div>
					<div className="main-slider-two__shape-4 float-bob-x">
						<img src="assets/images/shapes/main-slider-two-shape-4.png" alt=""/>
					</div>
					<div className="main-slider-two__shape-5 float-bob-y">
						<img src="assets/images/shapes/main-slider-two-shape-5.png" alt=""/>
					</div>
					<div className="main-slider-two__shape-6 img-bounce">
						<img src="assets/images/shapes/main-slider-two-shape-6.png" alt=""/>
					</div>
					<div className="main-slider-two__img">
						<img src="assets/images/gallery/banner1.png" alt=""/>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="main-slider-two__content widthHalf">
									<p className="main-slider-two__sub-title">welcome to The Construction Parameters</p>
									<h2 className="main-slider-two__title">Reliable Maintenance, Every Time</h2>
									<p className="main-slider-two__text">Ensuring your property stays at its best with expert maintenance services. Your satisfaction is our foundation.
									</p>
									<div className="main-slider-two__btn-and-call-box">
										<div className="main-slider-two__btn-box">
											<Link href="#services" className="main-slider-two__btn thm-btn">Our
												Services<span className="icon-dabble-arrow-right"></span></Link>
										</div>
										<div className="main-slider-two__call">
											<div className="main-slider-two__call-icon">
												<span className="icon-call"></span>
											</div>
											<div className="main-slider-two__call-number">
												<p>Need Help</p>
												<h5><Link href="tel:+923365491349">(+92) 336 5491 349</Link></h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</SwiperSlide>
				<SwiperSlide>
				<div className="swiper-slide">
					<div className="main-slider-two__shape-1"></div>
					<div className="main-slider-two__shape-2"></div>
					<div className="main-slider-two__shape-3"></div>
					<div className="main-slider-two__shape-4 float-bob-x">
						<img src="assets/images/shapes/main-slider-two-shape-4.png" alt=""/>
					</div>
					<div className="main-slider-two__shape-5 float-bob-y">
						<img src="assets/images/shapes/main-slider-two-shape-5.png" alt=""/>
					</div>
					<div className="main-slider-two__shape-6 img-bounce">
						<img src="assets/images/shapes/main-slider-two-shape-6.png" alt=""/>
					</div>
					<div className="main-slider-two__img">
						<img src="assets/images/gallery/banner2.png" alt=""/>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="main-slider-two__content widthHalf">
									<p className="main-slider-two__sub-title">welcome to The Construction Parameters</p>
									<h2 className="main-slider-two__title">Innovating for a Better Tomorrow</h2>
									<p className="main-slider-two__text">Combining modern solutions with trusted craftsmanship to shape sustainable and enduring structures.
									</p>
									<div className="main-slider-two__btn-and-call-box">
										<div className="main-slider-two__btn-box">
											<Link href="#services" className="main-slider-two__btn thm-btn">Our
												Services<span className="icon-dabble-arrow-right"></span></Link>
										</div>
										<div className="main-slider-two__call">
											<div className="main-slider-two__call-icon">
												<span className="icon-call"></span>
											</div>
											<div className="main-slider-two__call-number">
												<p>Need Help</p>
												<h5><Link href="tel:+923365491349">(+92) 336 5491 349</Link></h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</SwiperSlide>
				<SwiperSlide>
				<div className="swiper-slide">
					<div className="main-slider-two__shape-1"></div>
					<div className="main-slider-two__shape-2"></div>
					<div className="main-slider-two__shape-3"></div>
					<div className="main-slider-two__shape-4 float-bob-x">
						<img src="assets/images/shapes/main-slider-two-shape-4.png" alt=""/>
					</div>
					<div className="main-slider-two__shape-5 float-bob-y">
						<img src="assets/images/shapes/main-slider-two-shape-5.png" alt=""/>
					</div>
					<div className="main-slider-two__shape-6 img-bounce">
						<img src="assets/images/shapes/main-slider-two-shape-6.png" alt=""/>
					</div>
					<div className="main-slider-two__img">
						<img src="assets/images/gallery/banner3.png" alt=""/>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="main-slider-two__content widthHalf">
									<p className="main-slider-two__sub-title">welcome to The Construction Parameters</p>
									<h2 className="main-slider-two__title">Building Dreams Brick by Brick</h2>
									<p className="main-slider-two__text">Crafting spaces that inspire, with precision and care. From renovations to new constructions, we turn visions into reality.
									</p>
									<div className="main-slider-two__btn-and-call-box">
										<div className="main-slider-two__btn-box">
											<Link href="#services" className="main-slider-two__btn thm-btn">Our
												Services<span className="icon-dabble-arrow-right"></span></Link>
										</div>
										<div className="main-slider-two__call">
											<div className="main-slider-two__call-icon">
												<span className="icon-call"></span>
											</div>
											<div className="main-slider-two__call-number">
												<p>Need Help</p>
												<h5><Link href="tel:+923365491349">(+92) 336 5491 349</Link></h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</SwiperSlide>


			</div>

		</Swiper>
	</section>
	{/*Main Slider Two End*/}

        </>
    )
}
