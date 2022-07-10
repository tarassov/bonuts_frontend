import AppPath from "../appPath";

export const rootPath = new AppPath({
	path: "/*",
	authenticated: false,
	anonymous: true,
	hideInMenu: true,
	active: true,
});
