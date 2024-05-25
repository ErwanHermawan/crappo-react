// --core
import { useState } from "react";

// -- templates
import Default from "presentation/component/templates/Default";

// -- states
import useStateHeader from "core/states/header";

// -- widgets
import HeroBannerWidget from "infrastucture/widgets/HeroBannerWidget";

const Products = (props) => {
	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("products");
	}, []);

	return (
		<>
			<Default>
				<HeroBannerWidget />
			</Default>
		</>
	);
};

export default Products;
