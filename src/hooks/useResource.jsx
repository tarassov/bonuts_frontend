import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useUpdateResource } from "./useUpdateResource";
import * as actionTypes from "../actions/actionTypes";
import * as apiCaller from "../actions/apiCaller";

export function useResource(api, id) {
	const [resource, setResource] = useState({
		isLoading: true,
		loaded: false,
		updated: false,
		error: false,
	});

	const dispatch = useDispatch();

	const nameLower = api.itemName.toLowerCase();

	const actionObject = api.itemName.toUpperCase();

	const { updateResource } = useUpdateResource(api);

	function getResource() {
		return function (dispatch) {
			const options = {
				useToken: true,
				action: "get",
				name: api.itemName,
				apiFunction: api.getItem,
				args: [id],
			};

			return apiCaller
				.callApi(dispatch, options)
				.then((json) => {
					setResource({
						...json[nameLower],
						isLoading: false,
						loaded: true,
						updated: false,
						error: false,
					});
					apiCaller.apiResult(dispatch, actionTypes.getSuccess(actionObject), {
						item: json[nameLower],
					});
				})
				.catch(() => {
					setResource({
						...resource,
						isLoading: false,
						loaded: false,
						error: true,
					});
				});
		};
	}

	useEffect(() => {
		dispatch(getResource());
	}, []);

	return [resource, updateResource];
}
