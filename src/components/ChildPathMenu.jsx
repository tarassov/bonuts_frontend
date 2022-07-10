import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { push } from "redux-first-history";

import GridContainer from "./base/grid/GridContainer";
import GridItem from "./base/grid/GridItem";
import { getChildRoutes } from "../routes/appRoutes";
import MenuCard from "./MenuCard";

export default function ChildPathMenu(props) {
	const profile = useSelector((store) => store.profile);

	let routes = getChildRoutes({
		authenticated: true,
		currentTenant: true,
		parent: props.parent,
		profile: profile,
	});

	const dispatch = useDispatch();

	const onMenuClick = useCallback(
		(route) => {
			dispatch(push(route.path));
		},
		[routes]
	);

	return (
		<GridContainer>
			{routes.map((route, key) => {
				return (
					<GridItem xs={12} sm={6} md={4} lg={3} key={key}>
						<MenuCard menuItem={route} onClick={onMenuClick} />
					</GridItem>
				);
			})}
		</GridContainer>
	);
}

ChildPathMenu.propTypes = {
	parent: PropTypes.object.isRequired,
};
