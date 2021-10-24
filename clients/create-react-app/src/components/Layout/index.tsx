import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Layout: FC = ({ children }) => {
    const { t } = useTranslation();
    return (
        <div>
            <header>
                <h2>{t("applicationName")}</h2>
                <nav>
                    <Link to="/">Home</Link> - <Link to="/form">Form</Link>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
};
