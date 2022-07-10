import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/styles";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { AttachMoneyRounded, DonutSmallRounded } from "@material-ui/icons";

import CustomTable from "../../components/base/table/CustomTable";
import GridItem from "../../components/base/grid/GridItem.jsx";
import GridContainer from "../../components/base/grid/GridContainer.jsx";
import Card from "../../components/base/card/Card.jsx";
import CardHeader from "../../components/base/card/CardHeader.jsx";
import CardBody from "../../components/base/card/CardBody.jsx";
import CustomTableToolbar from "../../components/base/table/CustomTableToolbar";
import listStyle from "../../assets/jss/layouts/listStyle";
import { useApi } from "../../hooks/useApi";
import profilesApi from "../../api/listApi/profilesApi";
import ProfileField from "../../components/ProfileField";
import { adminDeposit } from "../../actions/profileActions";

const useStyles = makeStyles(listStyle);

export default function ShareAllLayout(props) {
	const classes = useStyles();

	const { t } = useTranslation();

	const { fetchNext } = useApi(profilesApi, { page: 1 });

	const dispatch = useDispatch();
	const requests = useSelector((state) => state.profiles);

	const sendDonuts = () => {
		let checked = items.filter((x) => x.checked);
		//console.log(checked)
		dispatch(adminDeposit(checked, "distrib"));
	};
	const sendPoint = () => {
		let checked = items.filter((x) => x.checked);
		// console.log(checked)
		dispatch(adminDeposit(checked, "self"));
	};

	let items = [];
	if (requests !== undefined && requests.items !== undefined) {
		items = requests.items.map((item) => {
			return {
				id: item.id,
				profile: { ...item },
				name: item.name,
				checked: false,
				values: [
					// item.created_at!==null ?item.created_at:"-",
				],
			};
		});
	}
	let actions = [
		{
			icon: <DonutSmallRounded />,
			id: "send_donuts",
			label: "Send donuts",
			onClick: sendDonuts,
		},

		{
			icon: <AttachMoneyRounded />,
			id: "send_point",
			label: "Send point",
			onClick: sendPoint,
		},
	];
	return (
		<React.Fragment>
			<GridContainer>
				<GridItem xs={12}>
					<Card>
						<CardHeader color="primary">
							<CustomTableToolbar actions={actions}>
								<h4 className={classes.cardTitleWhite}>{t("Profiles")}</h4>
							</CustomTableToolbar>
						</CardHeader>
						<CardBody>
							<CustomTable items={items} actions={[]} checkable={true}>
								<ProfileField />
							</CustomTable>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
			<DialogActions>
				{(requests.page + 1) * requests.per_page < requests.total && (
					<Button onClick={fetchNext} color="primary">
						{t("More")}
					</Button>
				)}
			</DialogActions>
		</React.Fragment>
	);
}
