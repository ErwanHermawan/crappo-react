// //- core
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// -- components
import HeaderWidget from "infrastucture/widgets/HeaderWidget";
import Footer from "presentation/component/organisms/Footer";

const Default = (props) => {
	const { children, activeMenu } = props;
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<HeaderWidget activeMenu={activeMenu} />
			<main className="main">{children}</main>
			<Footer />
		</>
	);
};

export default Default;
