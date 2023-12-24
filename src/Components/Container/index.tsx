import React, { ReactNode } from "react";
import Navbar from "../../Navbar";
import './index.css';

interface ComponentProps {
    children: ReactNode;
}

const Container: React.FC<ComponentProps> = ({ children }: ComponentProps) => {
    return (
        <div className="container">
            <nav className="sidebar">
                <Navbar />
            </nav>
            <div className="main">
                {children}
            </div>
        </div>
    );
};

export default Container;
