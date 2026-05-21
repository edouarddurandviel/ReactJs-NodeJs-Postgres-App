import socketIo from "@libs/socketio";

export const reloadCompany = (userId: number, params: {}) => {
  const io = socketIo.getInstance();
  return io.emit(`company:${userId}`, params);
};

export const reloadCompanies = () => {
  const io = socketIo.getInstance();
  return io.emit(`company`);
};
