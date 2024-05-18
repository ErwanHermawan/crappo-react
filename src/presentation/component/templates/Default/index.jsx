// //- core
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// -- components
import HeaderWidget from "infrastucture/widgets/HeaderWidget";
import Footer from "presentation/component/organisms/Footer";

const Default = (props) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<HeaderWidget activeMenu={props.activeMenu} />
			<main className="main">{props.children}</main>
			<Footer />
		</>
	);
};

export default Default;
