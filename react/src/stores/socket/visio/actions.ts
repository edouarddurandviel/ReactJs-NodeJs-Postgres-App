import * as companyType from "../../company/types";

export const subscribeVisioCompany = (data: {
  companyId: string;
  iceCandidate: unknown;
  iceUserName: string;
  didIOffer: boolean;
}) => {
  return {
    socket: true,
    emit: true,
    message: "sendIceCandidateToSignalingServer",
    data: data,
    type: "CREATE_PEER_CONNEXION",
  };
};
export const unsubscribeOneCompany = (companyId: string) => {
  return {
    socket: true,
    message: `company:${companyId}`,
    type: companyType.GET_ONE_COMPANY_REQUEST,
    leave: true,
  };
};

export const subscribeAnswerCompany = (offerObj: unknown) => {
  return {
    socket: true,
    emit: true,
    message: "newAnswer",
    data: offerObj,
    type: "PEER_CONNEXION_ANSWER",
  };
};
