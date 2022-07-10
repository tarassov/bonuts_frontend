import React from "react";
import SettingsInputComponent from "@material-ui/icons/SettingsInputComponent";

import AppPath from "../appPath";
import PluginsLayout from "../../layouts/settings/PluginsLayout";
import { settingsPath } from "./settingsPath";

export const pluginsPath = new AppPath({
	path: "/plugins",
	anonymous: false,
	authenticated: true,
	sidebarName: "Plugins",
	navbarName: "Plugins",
	hideInMenu: true,
	admin: true,
	icon: SettingsInputComponent,
	active: true,
	component: <PluginsLayout />,
	settingsRoute: true,
	parent: settingsPath,
});
