import { cardTitle } from "../baseStyles.jsx";
import hoverCardStyle from "./base/hoverCardStyle";

const tenantCardStyle = {
	...hoverCardStyle,
	cardTitle,
	cardTitleWhite: {
		...cardTitle,
		color: "#FFFFFF",
		marginTop: "0",
	},

	marginTop10: {
		marginTop: "10px",
	},

	img: {
		width: "56px",
		height: "56px",
		verticalAlign: "middle",
		margin: "auto",
		border: "0",
	},
};
export default tenantCardStyle;
