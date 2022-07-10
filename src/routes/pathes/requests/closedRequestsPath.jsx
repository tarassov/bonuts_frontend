import React from "react";
import { DoneTwoTone } from "@material-ui/icons";

import AppPath from "../../appPath";
import { requestsPath } from "./requestsPath";
import ClosedRequestsLayout from "../../../layouts/requests/ClosedRequestLayout";

export const closedRequestsPath = new AppPath({
	path: "/closed_requests",
	anonymous: false,
	authenticated: true,
	sidebarName: "Closed requests",
	navbarName: "Closed requests",
	hideInMenu: true,
	icon: DoneTwoTone,
	active: true,
	store_admin: true,
	admin: true,
	parent: requestsPath,
	component: <ClosedRequestsLayout />,
});
