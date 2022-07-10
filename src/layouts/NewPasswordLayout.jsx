import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import confrimEmailStyle from "../assets/jss/components/confrimEmailStyle";
import { makeStyles } from "@material-ui/core/styles";
import { loadByRecoverToken, updatePassword } from "../actions/userActions";
import { useParams } from "react-router-dom";
import NewPasswordForm from "../components/forms/NewPasswordForm";
import Notifier from "../components/Notifier";
import { push } from "redux-first-history";

import GridContainer from "../components/base/grid/GridContainer";
import GridItem from "../components/base/grid/GridItem";

const useStyles = makeStyles(confrimEmailStyle);

export default function NewPasswordLayout() {
	const classes = useStyles();

	const profile = useSelector((state) => state.profile);

	const dispatch = useDispatch();

	const params = useParams();

	useEffect(() => {
		dispatch(loadByRecoverToken(params.token));
	}, []);

	useEffect(() => {
		if (profile.failed) dispatch(push("/"));
	}, [profile.failed]);

	function click(values) {
		dispatch(updatePassword(params.token, values.new_password));
	}

	return (
		<React.Fragment>
			<Notifier />
			<GridContainer
				spacing={0}
				className={classes.vertical_center}
				direction="column"
				alignItems="center"
				justifyContent="center"
			>
				<GridItem xs={12} sm={12} lg={12}>
					<NewPasswordForm onSubmit={click} />
				</GridItem>
			</GridContainer>
		</React.Fragment>
	);
}
