import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/PlaylistAdd";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import { useTranslation, Trans } from "react-i18next";
import StoreTableHead from "components/StoreTableHead";
import StoreToolbar from "components/StoreToolbar";

function desc(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function stableSort(array, cmp) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = cmp(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

function getSorting(order, orderBy) {
	return order === "desc"
		? (a, b) => desc(a, b, orderBy)
		: (a, b) => -desc(a, b, orderBy);
}

const styles = (theme) => ({
	root: {
		width: "100%",
		marginTop: theme.spacing(3),
	},
	table: {
		minWidth: 100,
	},
	tableWrapper: {
		overflowX: "auto",
	},
});

class Store extends React.Component {
	state = {
		order: "asc",
		orderBy: "price",
		selected: [],
		page: 0,
		rowsPerPage: 5,
	};

	componentDidMount = () => {
		this.props.loadStore();
	};

	handleRequestSort = (event, property) => {
		const orderBy = property;
		let order = "desc";

		if (this.state.orderBy === property && this.state.order === "desc") {
			order = "asc";
		}

		this.setState({ order, orderBy });
	};

	handleSelectAllClick = (event) => {
		if (event.target.checked) {
			this.setState((state) => ({
				selected: this.props.store.items.map((n) => n.id),
			}));
			return;
		}
		this.setState({ selected: [] });
	};

	handleClick = (event, id) => {
		const { selected } = this.state;
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}

		this.setState({ selected: newSelected });
	};

	handleChangePage = (event, page) => {
		this.setState({ page });
	};

	handleChangeRowsPerPage = (event) => {
		this.setState({ rowsPerPage: event.target.value });
	};

	handleEdit = () => {
		if (this.state.selected.length > 0) {
			this.props.onEditItem(this.state.selected[0]);
		}
	};

	handleBuyItem = () => {
		if (this.state.selected.length > 0) {
			this.props.onBuyItem(this.state.selected[0]);
		}
	};

	handleDelete = () => {
		this.props.onDeleteItem(this.state.selected);
		this.setState({ selected: [] });
	};

	isSelected = (id) => this.state.selected.indexOf(id) !== -1;

	render() {
		const { classes } = this.props;
		const { order, orderBy, selected, rowsPerPage, page } = this.state;
		const data = this.props.store.items;
		const emptyRows =
			rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

		return (
			<div>
				<StoreToolbar
					numSelected={selected.length}
					onAddItem={this.props.onAddItem}
					onEditItem={this.handleEdit}
					onDeleteItem={this.handleDelete}
					onBuyItem={this.handleBuyItem}
				/>
				<div className={classes.tableWrapper}>
					<Table className={classes.table} aria-labelledby="tableTitle">
						<StoreTableHead
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={this.handleSelectAllClick}
							onRequestSort={this.handleRequestSort}
							rowCount={data.length}
						/>
						<TableBody>
							{stableSort(data, getSorting(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((n) => {
									const isSelected = this.isSelected(n.id);
									return (
										<TableRow
											hover
											onClick={(event) => this.handleClick(event, n.id)}
											role="checkbox"
											aria-checked={isSelected}
											tabIndex={-1}
											key={n.id}
											selected={isSelected}
										>
											<TableCell padding="checkbox">
												<Checkbox checked={isSelected} />
											</TableCell>
											<TableCell component="th" scope="row" padding="none">
												{n.name}
											</TableCell>
											<TableCell align="right">{n.price}</TableCell>
											<TableCell align="left">{n.expiration_date}</TableCell>
										</TableRow>
									);
								})}
							{emptyRows > 0 && (
								<TableRow style={{ height: 49 * emptyRows }}>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={data.length}
					rowsPerPage={rowsPerPage}
					page={page}
					backIconButtonProps={{
						"aria-label": "Previous Page",
					}}
					nextIconButtonProps={{
						"aria-label": "Next Page",
					}}
					onChangePage={this.handleChangePage}
					onChangeRowsPerPage={this.handleChangeRowsPerPage}
				/>
			</div>
		);
	}
}

Store.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Store);
