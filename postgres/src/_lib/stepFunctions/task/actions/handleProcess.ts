import { Incoming, ROUTE_TASK } from "../config";
import event from "@src/_lib/eventEmitter";
import * as companyActions from "@src/services/company/actions";

export const handleProcess = async (incoming: Incoming) => {
  const extracted: any = incoming[0];

  for (const company of extracted) {
    const addrLength = company.addresses && company.addresses.length;

    if (addrLength > 1) {
      const addressId = company.addresses[0].id;
      await companyActions.deleteOneCompanyAddress(company.id, addressId);
    }
  }

  // send immutable
  event.emit(ROUTE_TASK.COMPLETED, "Company addresses cleaned");
};
