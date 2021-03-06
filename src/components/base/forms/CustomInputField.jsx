import React from "react";
import PropTypes from "prop-types";
import CustomInput from "../customInput/CustomInput";

import { useTranslation } from "react-i18next";
import CustomCheckbox from "./render/CustomCheckbox";

export default function CustomInputField({ field }) {
	const { t } = useTranslation();

	if (field.checkbox === true) {
		return <CustomCheckbox field={field} />;
	}

	return (
		<CustomInput
			labelText={t(field.labelText)}
			id={field.name}
			formControlProps={{
				fullWidth: field.fullWidth,
			}}
			inputProps={{
				onChange: field.onChange,
				defaultValue: field.defaultValue,
				disabled: field.disabled,
				type: field.type,
				dateFormat: field.dateFormat,
				placeholder: field.placeholder,
				initialValue: field.initialValue,
				multiline: field.multiline,
				rows: field.rows,
			}}
		/>
	);
}

CustomInputField.propTypes = {
	field: PropTypes.obj,
};
