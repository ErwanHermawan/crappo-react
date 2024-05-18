import httpRequest from "infrastucture/api/httpRequest";
import ENDPOINT from "infrastucture/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest({
		method: "get",
		url: ENDPOINT.STATISTICS,
	});

	return {
		ready,
		data,
		error,
	};
};

const statisticModel = {
	list: handleList,
};

export default statisticModel;
