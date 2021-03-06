import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import GridContainer from "../../components/base/grid/GridContainer";
import GridItem from "../../components/base/grid/GridItem";
import Button from "../../components/base/customButtons/RegularButton";

import Clearfix from "../../components/base/clearfix/Clearfix";
import Card from "../../components/base/card/Card";
import CardBody from "../../components/base/card/CardBody";

import styles from "../../assets/jss/layouts/donutEditPageStyle";
import Progress from "../../components/Progress";

import { useResource } from "../../hooks/useResource";
import ImagePreview from "../../components/base/image/ImagePreview";
import { useAddResource } from "../../hooks/useAddResource";
import apis from "../../api/apiRoot";
import CustomLink from "../../components/base/link/CustomLink";

const useStyles = makeStyles(styles);

export default function DonutPreviewLayout() {
	const { id } = useParams();

	const { t } = useTranslation();

	const [item, updateResource] = useResource(apis.donuts, id);
	const { addResource } = useAddResource(apis.requests);
	const [formData, setFormData] = React.useState({
		isLoading: true,
		logoChanged: false,
	});

	useEffect(() => {
		setFormData({ ...item });
	}, [item]);

	const classes = useStyles();

	if (formData.isLoading) {
		return <Progress />;
	}

	const buy = () => {
		addResource({ donut_id: item.id }, { successPath: "/donuts" });
	};

	return (
		<section>
			<div className={classes.backLink}>
				<CustomLink>
					{" "}
					{t("Store")}
					{" > "}
					{item.name}
				</CustomLink>
			</div>
			<Card>
				<CardBody>
					<GridContainer>
						<GridItem xs={12} sm={12} md={3}>
							<ImagePreview image={formData.logo.url} />
						</GridItem>
						<GridItem xs={12} sm={12} md={6}>
							<Typography variant="h3" display="block">
								{item.name}
							</Typography>
							<Typography className={classes.label}>
								{t("Description")}
							</Typography>
							<Typography paragraph>{item.description}</Typography>
						</GridItem>

						<GridItem xs={12} sm={12} md={3}>
							<Card raised className={classes.priceCard}>
								<Typography className={classes.price}>
									{item.price} {t("PTS")}{" "}
								</Typography>
								{item.on_stock > 0 && (
									<Typography className={classes.remains}>
										{t("on stock")}: {item.on_stock}
									</Typography>
								)}
								{item.on_stock == 0 && item.supply_days > 0 && (
									<Typography className={classes.remains}>
										{t("delivery days")}: {item.supply_days}{" "}
									</Typography>
								)}
								{item.has_remains && (
									<Button
										color="primary"
										onClick={buy}
										className={classes.actionButton}
									>
										{t("Buy")}
									</Button>
								)}
							</Card>
						</GridItem>
					</GridContainer>
					<Clearfix />
				</CardBody>
			</Card>
		</section>
	);
}

DonutPreviewLayout.propTypes = {};
