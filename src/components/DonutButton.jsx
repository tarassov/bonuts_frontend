import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import UserAvatar from "./UserAvatar";
import profileButtonStyle from "../assets/jss/components/profileButtonStyle";

function DonutButton(props) {
	const { classes, donut, onClick } = props;
	let thumb_url;
	if (donut.logo !== undefined && donut.logo !== null) {
		thumb_url = donut.logo.thumb.url;
	}

	return (
		<React.Fragment>
			<Button className={classes.accountButton} onClick={onClick}>
				<UserAvatar
					className={classes.smallAvatar}
					avatar_url={thumb_url}
					user_name={donut.name}
				/>
			</Button>
		</React.Fragment>
	);
}

export default withStyles(profileButtonStyle)(DonutButton);
