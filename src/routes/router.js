import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/Root";
import Shop from "../components/Shop/Shop"
import Order from "../components/Order/Order"
import Inventory from "../components/Inventory/Inventory"
import About from "../components/About/About"
import { dataLoaders } from "../loaders/dataLoaders";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Shop />,
                loader: async() =>{
                    return await fetch('products.json')
                }
            },
            {
                path: 'shop',
                element: <Shop />,
                loader: async() =>{
                    return await fetch('products.json')
                }
            },
            {
                path: 'order',
                element: <Order />,
                loader: dataLoaders,
            },
            {
                path: 'inventory',
                element: <Inventory />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    },
])