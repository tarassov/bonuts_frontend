import React from "react";
import App from "../containers/AppContainer";
import NewPasswordPage from "../layouts/NewPasswordLayout";

const indexRoutes = [
	{ path: "/recover_password/:token", component: <NewPasswordPage /> },
	{ path: "/*", component: <App /> },
];

export default indexRoutes;
