import api from "./api";
import { Room } from './../types/room';

const SUB_URL = "rooms/";

export const createRoom = async (name: string) => {
  const result = await api.post(SUB_URL, { name: name });
  return result.data as Room;
};

export const joinRoom = async (name: string , code : string) =>
{
  const result = await api.patch(`${SUB_URL}/${code}`, { name: name});
  return result.data as Room;

}