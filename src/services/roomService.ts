import api from "./api";
import { Room } from "./../types/room";

const SUB_URL = "rooms";

export const createRoom = async (name: string) => {
  const { data } = await api.post(SUB_URL, { name: name });
  return data;
};

export const joinRoom = async (name: string, code: string) => {
  const { data } = await api.put(`${SUB_URL}/${code}`, { name: name });
  return data;
};

export const getRoom = async () => {
  try {
    const { data } = await api.get(SUB_URL);
    return data as Room;
  } catch {
    return null;
  }
};

export const leaveRoom = async (index: number | null) => {
  await api.patch(`${SUB_URL}/leave/${index !== null ? index : ""}`);
};
