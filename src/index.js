// --- core
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// - style
import "core/styles/app.scss";

// -- APP
import App from "presentation/container/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
