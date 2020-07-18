import Login from '../pages/login'
import Room from '../pages/room'
import Game from '../pages/game'

const routes = [
    
    {
        exact: false,
        path: "/room",
        component: Room,
    }
    ,
    {
        exact: false,
        path: "/game",
        component: Game,
    },
    {
        exact: false,
        path: "/",
        component: Login, //TODO
    }
]

export default routes;