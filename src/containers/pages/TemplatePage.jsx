import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import styles from "../../assets/jss/templateFileStyle";

const useStyles = makeStyles(styles);

export default function TemplatePage(props) {
	const classes = useStyles();
	const { t } = useTranslation();

	const dispatch = useDispatch();

	const click = useCallback((route) => {}, []);

	return <React.Fragment></React.Fragment>;
}
