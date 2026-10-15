import socketIo from "@src/_lib/socketio";

export const reloadUser = (userId: number, params: {}) => {
  const io = socketIo.instance();
  return io.emit(`user:${userId}`, params);
};

export const reloadUsers = () => {
  const io = socketIo.instance();
  return io.emit(`user`);
};
