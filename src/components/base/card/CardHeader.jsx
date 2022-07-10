import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

import cardHeaderStyle from "../../../assets/jss/components/base/cardHeaderStyle.jsx";

function CardHeader({ ...props }) {
	const { classes, className, children, color, plain, stats, icon, ...rest } =
		props;
	const cardHeaderClasses = classNames({
		[classes.cardHeader]: true,
		[classes.cardHeaderPlain]: plain,
		[classes.cardHeaderStats]: stats,
		[classes.cardHeaderIcon]: icon,
		[className]: className !== undefined,
		[classes[color + "CardHeader"]]: color,
	});
	return (
		<div className={cardHeaderClasses} {...rest}>
			{children}
		</div>
	);
}

CardHeader.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	color: PropTypes.oneOf([
		"warning",
		"success",
		"danger",
		"info",
		"primary",
		"secondary",
		"rose",
	]),
	plain: PropTypes.bool,
	stats: PropTypes.bool,
	icon: PropTypes.bool,
};

export default withStyles(cardHeaderStyle)(CardHeader);
