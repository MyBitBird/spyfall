import api from './api'


const SUB_URL = "games/";

export const startGame = async () =>
{
    const {data} = await api.post(SUB_URL , {});
}

export const getGame = async (gameId : string) =>
{
    const {data} = await api.get(`${SUB_URL}/${gameId}`);
    return data;
}