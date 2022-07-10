import departmentApi from "./listApi/departmentsApi";
import storeApi from "./listApi/storeApi";

import profilesApi from "./listApi/profilesApi";
import AccountOperationsApi from "./listApi/accountOperationsApi";
import schedulersApi from "./listApi/schedulersApi";
import RequestsApi from "./listApi/requestsApi";
import PluginsApi from "./listApi/pluginsApi";
import TenantPluginsApi from "./listApi/tenantPluginsApi";
import TenantsApi from "./listApi/tenantsApi";
import InvitationsApi from "./listApi/invitationsApi";

const apis = {
	departments: departmentApi,
	donuts: storeApi,
	profiles: profilesApi,
	account_operations: AccountOperationsApi,
	schedulers: schedulersApi,
	requests: RequestsApi,
	plugins: PluginsApi,
	tenant_plugins: TenantPluginsApi,
	tenants: TenantsApi,
	invitations: InvitationsApi,
};
export default apis;
