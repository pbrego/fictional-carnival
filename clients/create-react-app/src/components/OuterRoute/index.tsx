/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route as RouterRoute } from "react-router-dom";
import { Layout } from "components";

export const OuterRoute = ({ wrapper: Wrapper = Layout, children, ...props }: any): JSX.Element => {
    return (
        <RouterRoute {...props}>
            <Wrapper>{children}</Wrapper>
        </RouterRoute>
    );
};
