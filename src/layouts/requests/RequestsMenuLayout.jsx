import React from "react";
import ChildPathMenu from "../../components/ChildPathMenu";
import { requestsPath } from "../../routes/pathes/requests/requestsPath";

export default function RequestsMenuLayout() {
	return <ChildPathMenu parent={requestsPath} />;
}
