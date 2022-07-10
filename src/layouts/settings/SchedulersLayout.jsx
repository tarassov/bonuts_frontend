import React from "react";
import { useSelector } from "react-redux";

import StandartList from "../../components/base/list/StandartList";
import { useApi } from "../../hooks/useApi";
import ScheduilersApi from "../../api/listApi/schedulersApi";
import { useModal } from "../../hooks/useModal";
import { EDIT_SCHEDULER } from "../../modals/modalList";

export default function SchedulersLayout() {
	const { fetchNext } = useApi(ScheduilersApi, { page: 1, filter: {} });
	const schedulers = useSelector((state) => state.schedulers);
	const { showModal } = useModal(EDIT_SCHEDULER);

	const onSchedulerAdd = () => {
		showModal({});
	};

	const onSchedulerEdit = (item) => {
		showModal(item);
	};

	return (
		<StandartList
			list={schedulers}
			addItem={onSchedulerAdd}
			editItem={onSchedulerEdit}
			getValues={(item) => {
				return [item.comment];
			}}
		/>
	);
}
