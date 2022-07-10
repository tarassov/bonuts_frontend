import React from "react";

import ChildPathMenu from "../../components/ChildPathMenu";
import { settingsPath } from "../../routes/pathes/settingsPath";

export default function SettingsMenuLayout(props) {
	return <ChildPathMenu parent={settingsPath} />;
}
