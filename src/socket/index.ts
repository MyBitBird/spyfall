import socketClient from "socket.io-client";
import Config from "../config";

let socket: SocketIOClient.Socket | null = null;
let id: string = "";

export const connect = (joinId: string) => {
  try {
    id = joinId;
    socket = socketClient(Config.SOCKET_END_POINT, {
      query: "id=" + id,
    });
    return true;
  } catch {
    return false;
  }
};

export const addEvent = (event: string, callBack: (data: any) => void) => {
  socket?.on(event + id, callBack);
};

export const disconnect = () => socket?.disconnect();
