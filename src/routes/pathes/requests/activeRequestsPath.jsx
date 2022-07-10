import React from "react";
import { CompareArrowsRounded } from "@material-ui/icons";

import { requestsPath } from "./requestsPath";
import AppPath from "../../appPath";
import ActiveRequestsLayout from "../../../layouts/requests/ActiveRequestsLayout";

export const activeRequestsPath = new AppPath({
	path: "/active_requests",
	anonymous: false,
	authenticated: true,
	sidebarName: "Accepted requests",
	navbarName: "Accepted requests",
	hideInMenu: true,
	icon: CompareArrowsRounded,
	active: true,
	store_admin: true,
	admin: true,
	parent: requestsPath,
	component: <ActiveRequestsLayout />,
});
