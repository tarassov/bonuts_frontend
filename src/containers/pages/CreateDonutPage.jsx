import { connect } from "react-redux";
import { push } from "redux-first-history";

import CreateDonutWizard from "../../components/forms/CreateDonutWizard";
import { addItem } from "../../actions/storeActions";
const mapDispatchToProps = (dispatch) => {
	return {
		submitItem: (item) => {
			let formPayLoad = new FormData();
			formPayLoad.append("logo", item.logo);
			formPayLoad.append("name", item.name);
			formPayLoad.append("price", item.price);
			dispatch(addItem(formPayLoad));
			dispatch(push("store"));
		},
	};
};

const mapStateToProps = (state, props) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDonutWizard);
