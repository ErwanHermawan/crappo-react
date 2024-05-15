import httpRequest from "infrastucture/api/httpRequest";
import ENDPOINT from "infrastucture/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest({
		method: "get",
		url: ENDPOINT.HEADER,
	});

	return {
		ready,
		data,
		error,
	};
};

const headerModel = {
	list: handleList,
};

export default headerModel;
