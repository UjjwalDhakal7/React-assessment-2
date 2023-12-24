import { NavLink, Outlet } from "react-router-dom";
import './index.css';

export default function Navbar (){
    return (
        <>
            <header>
                <nav className="navbar">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/TaskOne" >Task One</NavLink>
                    <NavLink to="/TaskTwo" >Task Two</NavLink>
                    <NavLink to="/TaskThree" >Task Three</NavLink>
                    <NavLink to="/TaskFour" >Task Four</NavLink>
                    <NavLink to="/TaskFive" >Task Five</NavLink>
                    <NavLink to="/TaskSix" >Task Six</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}