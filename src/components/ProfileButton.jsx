import React from "react";
import { Button, makeStyles } from "@material-ui/core";

import UserAvatar from "./UserAvatar";
import profileButtonStyle from "../assets/jss/components/profileButtonStyle";
import { useModal } from "../hooks/useModal";
import { PROFILE_PREVIEW } from "../modals/modalList";

const useStyles = makeStyles(profileButtonStyle);

function ProfileButton(props) {
	const { profile, edit, onClick } = props;
	const classes = useStyles();
	let thumb_url;
	if (profile.avatar !== undefined && profile.avatar !== null) {
		thumb_url = profile.avatar.thumb.url;
	}
	const { showModal: profileModal } = useModal(PROFILE_PREVIEW);

	const onShowProfile = () => {
		profileModal({ ...profile, disabled: edit });
	};

	return (
		<React.Fragment>
			<Button className={classes.accountButton} onClick={onShowProfile}>
				<UserAvatar
					className={classes.smallAvatar}
					avatar_url={thumb_url}
					user_name={profile.user_name}
				/>
			</Button>
		</React.Fragment>
	);
}

export default ProfileButton;
