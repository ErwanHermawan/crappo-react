// -- templates
import Default from "presentation/component/templates/Default";

// -- widgets
import HeroBannerWidget from "infrastucture/widgets/HeroBannerWidget";

const Products = (props) => {
	return (
		<>
			<Default activeMenu="products">
				<HeroBannerWidget />
			</Default>
		</>
	);
};

export default Products;
