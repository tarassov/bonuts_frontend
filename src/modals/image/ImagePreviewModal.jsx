import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";

import RegularButton from "../../components/base/customButtons/RegularButton";

const styles = (theme) => ({
	imageWrapper: {
		maxWidth: "100%",
		maxHeight: "100%",
		textAlign: "center",
		verticalAlign: "middle",
	},
	imagePreview: {
		maxWidth: "500px",
		display: "block",
		maxHeight: "100%",
		margin: "auto",
		verticalAlign: "middle",
		[theme.breakpoints.down("xs")]: {
			maxWidth: "100%",
		},
	},
});

const useStyles = makeStyles(styles);

export default function ImagePreviewModal({ body, onCloseModal }) {
	const { t } = useTranslation();

	const [image, setImage] = useState();

	useEffect(() => {
		if (body.image === undefined || body.image === "" || body.image === null) {
			setImage(body.default);
		} else {
			setImage(body.image);
		}
	}, [body]);

	const classes = useStyles();

	return (
		<div className={classes.imageWrapper}>
			<img src={image} className={classes.imagePreview} alt="..." />
			<RegularButton color="primary" simple onClick={onCloseModal}>
				{t("Close")}
			</RegularButton>
		</div>
	);
}

ImagePreviewModal.propTypes = {
	body: PropTypes.object,
	onCloseModal: PropTypes.func,
};
