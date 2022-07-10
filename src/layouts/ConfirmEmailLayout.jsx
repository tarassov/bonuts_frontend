import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { push } from "redux-first-history";
import { useParams } from "react-router";

import { loadByToken, confirmEmail } from "../actions/userActions";
import HeaderContainer from "../containers/HeaderContainer";
import RegularButton from "../components/base/customButtons/RegularButton";
import confrimEmailStyle from "../assets/jss/components/confrimEmailStyle";

const useStyles = makeStyles(confrimEmailStyle);

export default function ConfirmEmailLayout(props) {
	const { t } = useTranslation();
	const classes = useStyles();
	const params = useParams();

	const dispatch = useDispatch();
	const profile = useSelector((state) => state.profile);
	const authenticate = useSelector((state) => state.authenticate);

	useEffect(() => {
		dispatch(loadByToken(params.token));
	}, [params.token]);

	useEffect(() => {
		if (profile.user_not_found || profile.confirmed) {
			dispatch(push("/dashboard"));
		}
	}, [profile]);

	const click = () => {
		dispatch(confirmEmail(params.token));
	};

	return (
		<div className={classes.root}>
			<HeaderContainer
				profile={profile}
				authenticate={authenticate}
				routes={[]}
			></HeaderContainer>
			<div className={classes.vertical_center}>
				<RegularButton
					round
					size="lg"
					onClick={click}
					className={classes.button}
					color="primary"
				>
					{t("Confirm")}
				</RegularButton>
			</div>
		</div>
	);
}
