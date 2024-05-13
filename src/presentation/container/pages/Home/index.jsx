// -- templates
import Default from "presentation/component/templates/Default";

// -- widgets
import HeroBannerWidget from "infrastucture/widgets/HeroBannerWidget";
import NumbersWidget from "infrastucture/widgets/NumbersWidget";
import WhyCrappoWidget from "infrastucture/widgets/WhyCrappoWidget";
import CryptocurrenciesWidget from "infrastucture/widgets/CryptocurrenciesWidget";
import InvestSmartWidget from "infrastucture/widgets/InvestSmartWidget";
import StatisticsWidget from "infrastucture/widgets/StatisticsWidget";
import ProfitInvestmentWidget from "infrastucture/widgets/ProfitInvestmentWidget";

// -- components
import Calculate from "presentation/component/organisms/Calculate";
import StartMining from "presentation/component/organisms/StartMining";
// -- datas

import calculateData from "./calculateData";
import startMiningData from "./startMiningData";

const Home = (props) => {
	return (
		<>
			<Default activeMenu="home">
				<HeroBannerWidget />
				<NumbersWidget />
				<WhyCrappoWidget />
				<Calculate {...calculateData} />
				<CryptocurrenciesWidget />
				<InvestSmartWidget />
				<StatisticsWidget />
				<ProfitInvestmentWidget />
				<StartMining {...startMiningData} />
			</Default>
		</>
	);
};

export default Home;
