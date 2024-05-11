// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "infrastucture/api/httpRequest";
import ENDPOINT from "infrastucture/api/endPoint";

// -- organisms
import ProfitInvestment from "presentation/component/organisms/ProfitInvestment";

const ProfitInvestmentWidget = () => {
	// state
	const [data, setData] = useState([]);

	// call API
	const { data: getData } = httpRequest({
		url: ENDPOINT.PROFIT,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data) {
			setData(getData?.data);
		}
	}, [getData]);

	return <ProfitInvestment data={data} />;
};

export default ProfitInvestmentWidget;
