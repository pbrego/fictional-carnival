import { FC } from "react";
import { Link } from "react-router-dom";

export const Layout: FC = ({ children }) => (
    <div>
        <header>
            <h2>Alvian company</h2>
            <nav>
                <Link to="/">Home</Link> - <Link to="/form">Form</Link>
            </nav>
        </header>
        <main>{children}</main>
    </div>
);
