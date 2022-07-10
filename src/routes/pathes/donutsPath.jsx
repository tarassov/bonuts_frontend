import React from "react";
import Store from "@material-ui/icons/Store";

import AppPath from "../appPath";
import DonutsLayout from "../../layouts/donuts/DonutsLayout";

export const donutsPath = new AppPath({
	path: "/donuts",
	anonymous: false,
	authenticated: true,
	sidebarName: "Donuts",
	navbarName: "Donuts",
	icon: Store,
	active: true,
	component: <DonutsLayout />,
});
