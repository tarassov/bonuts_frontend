import React from "react";
import SwitchRoutes from "./SwitchRoutes";
import { getRoutes, anonymousRedirects } from "../appRoutes.jsx";

export default function AnonymousRoutes() {
	return (
		<SwitchRoutes
			routes={getRoutes({ anonymous: true })}
			redirects={anonymousRedirects}
		/>
	);
}
