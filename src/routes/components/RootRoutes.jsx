import React from "react";
import SwitchRoutes from "./SwitchRoutes";
import { getRoutes, rootRedirects } from "../appRoutes.jsx";

export default function RootRoutes(props) {
	return (
		<SwitchRoutes
			routes={getRoutes({ root: true })}
			redirects={rootRedirects}
		/>
	);
}
