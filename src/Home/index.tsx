import Navbar from "../Navbar";
import './index.css';

export default function Home (){
    return(
        <>
        <div className="container">
            <nav className="sidebar">
                <Navbar />
            </nav>
            <div className="main">
                <span>Hiii</span>
            </div>
        </div>
        </>
    )
}