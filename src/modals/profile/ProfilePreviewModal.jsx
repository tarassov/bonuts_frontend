import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import ReduxFormGenerator from "../../components/base/forms/reduxFormGenerator";
import LayoutModal from "../LayoutModal";
import GridContainer from "../../components/base/grid/GridContainer";
import GridItem from "../../components/base/grid/GridItem";
import userStyle from "../../assets/jss/layouts/userStyle";

const mapDispatchToProps = (dispatch, props) => {
	return {
		onLoad: () => {},

		onSubmit: (item) => {
			props.onCloseModal();
		},
	};
};

const mapStateToProps = (state) => {
	return {
		profile: state.profile,
		departments: state.departments,
	};
};

export class ProfilePreviewModal extends Component {
	constructor(props) {
		super(props);

		const formGenerator = new ReduxFormGenerator({
			reduxForm: {
				form: "profile_preview",
				enableReinitialize: true,
				keepDirtyOnReinitialize: true,
			},
			mapStateToProps: (state) => ({
				hasInitial: true,
				initialValues: state.modal.body,
				formId: "profile_edit",
				fields: [
					{
						name: "user_name",
						label: "Name",
						md: 12,
						size: "lg",
						disabled: true,
					},
					{
						name: "position",
						label: "Position",
						md: 12,
						size: "lg",
						disabled: true,
					},
				],
				submitCaption: "OK",
				cancelable: false,
			}),
			mapDispatchToProps,
			title: "Profile",
		});

		this.generatedForm = formGenerator.getForm();
	}

	render() {
		const GeneratedForm = this.generatedForm;
		const { classes, modal } = this.props;
		const modalProps = { ...this.props, classes: {} };
		return (
			<LayoutModal title="Profile">
				<GridContainer>
					<GridItem xs={12} sm={6}>
						{modal.body.avatar !== undefined && (
							<img
								className={classes.modalImage}
								src={modal.body.avatar.url}
								alt="not found"
							/>
						)}
					</GridItem>
					<GridItem xs={12} sm={6}>
						<GeneratedForm {...modalProps} />
					</GridItem>
				</GridContainer>
			</LayoutModal>
		);
	}
}

export default withStyles(userStyle)(
	connect(mapStateToProps, mapDispatchToProps)(ProfilePreviewModal)
);
