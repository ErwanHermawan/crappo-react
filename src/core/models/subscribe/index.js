import httpRequest from "infrastucture/api/httpRequest";
import ENDPOINT from "infrastucture/api/endPoint";

const handleList = (email) => {
	const { ready, data, error } = httpRequest({
		method: "post",
		url: ENDPOINT.SUBSCRIBE,
		data: {
			email,
		},
	});

	return {
		ready,
		data,
		error,
	};
};

const subscribeModel = {
	list: handleList,
};

export default subscribeModel;
