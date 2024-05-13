// -- react
import { useState, useEffect } from "react";
import Slider from "react-slick";

// -- style carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// -- style
import style from "./style.module.scss";

// -- molecule
import HeroBannerItem from "presentation/component/molecules/HeroBannerItem";

const HeroBanner = (props) => {
	const [showSingle, setShowSingle] = useState(false);

	useEffect(() => {
		let timer = setTimeout(() => setShowSingle(true), 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	const settings = {
		dots: true,
		arrows: false,
		fade: true,
		infinite: false,
		autoplay: true,
		pauseOnHover: true,
		speed: 1000,
		autoplaySpeed: 8000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	let classNameSingle = style.banner;

	// data is loading
	if (!props.ready) {
		return (
			<div className={style.placeholder}>
				<div className="container">
					<div className={style.inner}>
						<div className={style.text}>
							<div className={style.label}></div>
							<div className={style.title}>
								<div className={style.titleBar}></div>
								<div className={style.titleBar}></div>
								<div className={style.titleBar}></div>
							</div>
							<div className={style.desc}></div>
							<div className={style.button}></div>
						</div>
						<div className={style.img}></div>
					</div>
				</div>
			</div>
		);
	}

	// data is error
	if (props.error) {
		return (
			<div className={style.error}>
				<div className="container">
					<h4 className={style.code}>{props.error.status}</h4>
					<h4 className={style.message}>{props.error.message}</h4>
				</div>
			</div>
		);
	}

	if (props.ready && props.error !== null) {
		if (props.data.length === 1) {
			if (showSingle) {
				classNameSingle += " banner-single";
			}
		}
	}

	return (
		<div className={classNameSingle}>
			{props.data.length === 1 ? (
				props.data.map((val, idx) => {
					return (
						<div className={style.item} key={`hb-${idx}`}>
							<div className={style.middleAlign}>
								<div className="container">
									<HeroBannerItem {...val} />
								</div>
							</div>
						</div>
					);
				})
			) : (
				<Slider {...settings}>
					{showSingle &&
						props.data.map((val, idx) => {
							return (
								<div className={style.item} key={`hb-${idx}`}>
									<div className={style.middleAlign}>
										<div className="container">
											<HeroBannerItem {...val} />
										</div>
									</div>
								</div>
							);
						})}
				</Slider>
			)}
		</div>
	);
};

export default HeroBanner;
