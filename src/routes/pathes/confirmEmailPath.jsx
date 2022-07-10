import React from "react";
import AppPath from "../appPath";
import ConfirmEmailLayout from "../../layouts/ConfirmEmailLayout";

export const confirmEmailPath = new AppPath({
	path: "/confirm_email/:token",
	anonymous: true,
	authenticated: false,
	active: true,
	hideInMenu: true,
	sidebarName: "ConfirmEmail",
	navbarName: "ConfirmEmail",
	component: <ConfirmEmailLayout />,
});
