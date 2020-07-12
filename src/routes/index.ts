import Login from '../pages/login'
import Room from '../pages/room'
import Game from '../pages/game'

const routes = [
    {
        exact: true,
        path: "/",
        component: Login, //TODO
    },
    {
        exact: true,
        path: "/room",
        component: Room,
    }
    ,
    {
        exact: true,
        path: "/game",
        component: Game,
    }
]

export default routes;