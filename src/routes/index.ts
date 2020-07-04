import Login from '../pages/login'
import Room from '../pages/room'


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
]

export default routes;