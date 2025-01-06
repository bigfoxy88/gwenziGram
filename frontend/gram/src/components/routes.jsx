import App from '../App'
import Register from './Register'
import Setup from './Setup'


const routes=[
    {
        path:'/',
        element:<App/>

    },{
        path:'/register',
        element:<Register/>
    },{
        path:'/setup',
        element:<Setup/>
    }
]

export default routes