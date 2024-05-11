// -- templates
import Default from "presentation/component/templates/Default";

// -- widgets
import HeroBannerWidget from "infrastucture/widgets/HeroBannerWidget";

// -- components
import Numbers from "presentation/component/organisms/Numbers";
import WhyCrappo from "presentation/component/organisms/WhyCrappo";
import Calculate from "presentation/component/organisms/Calculate";
import Cryptocurrencies from "presentation/component/organisms/Cryptocurrencies";
import Market from "presentation/component/organisms/Market";
import StartMining from "presentation/component/organisms/StartMining";

// -- datas
import numbersData from "./numbersData";
import whyCrappoData from "../whyCrappoData";
import calculateData from "./calculateData";
import cryptoData from "./cryptoData";
import marketData from "./marketData";
import startMiningData from "./startMiningData";

const Home = (props) => {
	return (
		<>
			<Default activeMenu="home">
				<HeroBannerWidget />
				<Numbers {...numbersData} />
				<WhyCrappo {...whyCrappoData} />
				<Calculate {...calculateData} />
				<Cryptocurrencies {...cryptoData} />
				<Market {...marketData} />
				<StartMining {...startMiningData} />
			</Default>
		</>
	);
};

export default Home;
