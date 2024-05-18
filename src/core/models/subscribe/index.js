import httpRequest from "infrastucture/api/httpRequest";
import ENDPOINT from "infrastucture/api/endPoint";

const handleSubmit = async (formData) => {
	const { data, error } = await httpRequest({
		method: "post",
		url: ENDPOINT.SUBSCRIBE,
		data: {
			email: formData.email,
		},
	});

	return {
		data,
		error,
	};
};

const subscribeModel = {
	submit: handleSubmit,
};

export default subscribeModel;
