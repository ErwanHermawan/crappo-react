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
import CalculateWidget from "infrastucture/widgets/CalculateWidget";

// -- components
import StartMining from "presentation/component/organisms/StartMining";

const Home = (props) => {
	return (
		<>
			<Default activeMenu="home">
				<HeroBannerWidget />
				<NumbersWidget />
				<WhyCrappoWidget />
				<CalculateWidget />
				<CryptocurrenciesWidget />
				<InvestSmartWidget />
				<StatisticsWidget />
				<ProfitInvestmentWidget />
				<StartMining />
			</Default>
		</>
	);
};

export default Home;
