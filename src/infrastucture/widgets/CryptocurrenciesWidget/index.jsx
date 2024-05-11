// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "infrastucture/api/httpRequest";
import ENDPOINT from "infrastucture/api/endPoint";

// -- organisms
import Cryptocurrencies from "presentation/component/organisms/Cryptocurrencies";

const CryptocurrenciesWidget = () => {
	// state
	const [data, setData] = useState([]);

	// call API
	const { data: getData } = httpRequest({
		url: ENDPOINT.CRYPTOCURRENCIES,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data) {
			setData(getData?.data);
		}
	}, [getData]);

	return <Cryptocurrencies data={data} />;
};

export default CryptocurrenciesWidget;
