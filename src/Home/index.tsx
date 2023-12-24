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
                <h1>React Assessment 2</h1>
            </div>
        </div>
        </>
    )
}