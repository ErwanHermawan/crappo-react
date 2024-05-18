import httpRequest from "infrastucture/api/httpRequest";
import ENDPOINT from "infrastucture/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest({
		method: "get",
		url: ENDPOINT.PROFIT,
	});

	return {
		ready,
		data,
		error,
	};
};

const profitInvestmentModel = {
	list: handleList,
};

export default profitInvestmentModel;
