import api from "./api";
import { Room } from "./../types/room";

const SUB_URL = "rooms/";

export const createRoom = async (name: string) => {
  const { data } = await api.post(SUB_URL, { name: name });
  console.log('data' , data)
  saveToken(data);
};

export const joinRoom = async (name: string, code: string) => {
  const { data } = await api.patch(`${SUB_URL}/${code}`, { name: name });
  saveToken(data);
};

export const getRoom = async () => {
  const { data } = await api.get(SUB_URL);
  return data as Room;
};

const saveToken = (token: any) => {
  localStorage.setItem("token", token);
};
