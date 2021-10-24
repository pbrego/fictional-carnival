/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { Route as RouterRoute, useHistory, useLocation } from "react-router-dom";
import { useValues } from "providers";
import { CONSTANTS } from "../";

const InnerDefaultWrapper = ({ children }: { children: ReactNode }) => {
    const history = useHistory();
    const location = useLocation();
    const { values } = useValues();

    const isFirstPage = location.pathname === CONSTANTS.SWITCH_BASE_URL;

    return (
        <>
            <header>
                {!isFirstPage && <button onClick={history.goBack}>Go back</button>}

                <h1>Tell us your name {isFirstPage ? 1 : 2}/2</h1>
            </header>
            <section>{children}</section>
            <footer>
                <pre>{JSON.stringify(values, null, 2)}</pre>
            </footer>
        </>
    );
};

export const InnerRoute = ({ wrapper: Wrapper = InnerDefaultWrapper, children, ...props }: any): JSX.Element => {
    return (
        <RouterRoute {...props}>
            <Wrapper>{children}</Wrapper>
        </RouterRoute>
    );
};
