import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Add from "@material-ui/icons/Add";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import withStyles from "@material-ui/core/styles/withStyles";

import CustomTable from "../table/CustomTable";
import GridItem from "../grid/GridItem.jsx";
import GridContainer from "../grid/GridContainer.jsx";
import Card from "../card/Card.jsx";
import CardHeader from "../card/CardHeader.jsx";
import CardBody from "../card/CardBody.jsx";
import CustomTableToolbar from "../table/CustomTableToolbar";

import listStyle from "../../../assets/jss/layouts/listStyle";

import { Trans } from "react-i18next";

function StandartList(props) {
	const {
		classes,
		list,
		name,
		editItem,
		loadItems,
		deleteItem,
		addItem,
		getValues,
	} = props;

	const { t, i18n } = useTranslation();
	useEffect(() => {
		if (loadItems !== undefined) loadItems();
	}, []);

	const onDelete = (item) => {
		if (typeof deleteItem == "function") deleteItem(item);
	};

	const onAdd = () => {
		if (typeof addItem == "function") addItem();
	};

	const onEdit = (item) => {
		if (typeof editItem == "function") editItem(item);
	};

	let items = [];
	if (list !== undefined && list.items !== undefined) {
		items = list.items.map((item) => {
			return {
				...item,
				values: getValues !== undefined ? getValues(item) : [item.name],
			};
		});
	}

	let header_actions = [
		{
			id: "add_new_item_" + name,
			label: "Add",
			icon: <Add className={classes.tableActionButtonIcon} />,
			onClick: onAdd,
			visible: addItem !== undefined,
		},
	];

	return (
		<GridContainer>
			<GridItem xs={12} sm={6} md={6}>
				<Card>
					<CardHeader color="secondary">
						<CustomTableToolbar actions={header_actions}>
							<h4 className={classes.cardTitleWhite}>
								<Trans>name</Trans>
							</h4>
						</CustomTableToolbar>
					</CardHeader>

					<CardBody>
						<CustomTable
							items={items}
							actions={[
								{
									icon: (
										<Delete
											className={
												classes.tableActionButtonIcon + " " + classes.delete
											}
										/>
									),
									id: "delete_item_action_" + name,
									label: "Delete",
									onClick: onDelete,
									visible: deleteItem !== undefined,
								},
								{
									icon: (
										<Edit
											className={
												classes.tableActionButtonIcon + " " + classes.edit
											}
										/>
									),
									id: "edit_item_action_" + name,
									label: "Edit",
									onClick: onEdit,
									visible: editItem !== undefined,
								},
							]}
							checkable={false}
						/>
					</CardBody>
				</Card>
			</GridItem>
		</GridContainer>
	);
}

export default withStyles(listStyle)(StandartList);
