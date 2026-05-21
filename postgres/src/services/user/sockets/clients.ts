import socketIo from "@libs/socketio";

export const reloadUser = (userId: number, params: {}) => {
  const io = socketIo.getInstance();
  return io.emit(`user:${userId}`, params);
};
