import { ROUTE_TASK } from "../config";
import event from "@src/_lib/eventEmitter";
import * as companyActions from "@src/services/company/actions";

export const handleGet = async (incoming: any[]) => {
  const extracted = incoming[0];
  console.log("task received:" + extracted);

  const companies = await companyActions.getAllCompanies();
  if (companies) {
    event.emit(ROUTE_TASK.PROCESS, companies);
  }
};
