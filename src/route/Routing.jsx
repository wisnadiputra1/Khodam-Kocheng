import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../page/Home'
import Syarat from '../page/Syarat'
import Cek from '../page/Cek'

const NotFound = () => {
    return (
        <div>404 Not Found</div>
    )
}


const router = createBrowserRouter([
    {
    path: "/",
    children: [
        {index: true, element: <Home />},
        {path: "/syarat", element: <Syarat />},
        {path: "/cek", element: <Cek />},
    ],
    errorElement: <NotFound />
    }
])

export default function Routing() {
    return(
    <RouterProvider router={router} />
    )
}