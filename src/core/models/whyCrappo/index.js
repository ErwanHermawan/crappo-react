import httpRequest from "infrastucture/api/httpRequest";
import ENDPOINT from "infrastucture/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest({
		method: "get",
		url: ENDPOINT.WHY_CRAPPO,
	});

	return {
		ready,
		data,
		error,
	};
};

const whyCrappoModel = {
	list: handleList,
};

export default whyCrappoModel;
