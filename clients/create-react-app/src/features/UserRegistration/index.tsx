import { ReactNode } from "react";
import { Switch, Redirect } from "react-router-dom";
import { ValuesProvider } from "providers";
import { OuterRoute } from "components/OuterRoute";
import { InnerRoute } from "./components/Route";
import { InputFirstNamePage, InputLastNamePage } from "./pages";

export const CONSTANTS = {
    SWITCH_BASE_URL: "/form",
};

export const UserRegistrationProvider = ({ children }: { children: ReactNode }): JSX.Element => {
    const InitialValues = {
        firstName: "",
        lastName: "",
    };

    return (
        <OuterRoute path={CONSTANTS.SWITCH_BASE_URL}>
            <ValuesProvider form={{ values: InitialValues }}>
                <Switch>
                    {children}
                    <Redirect to={CONSTANTS.SWITCH_BASE_URL} />
                </Switch>
            </ValuesProvider>
        </OuterRoute>
    );
};

export const UserRegistrationSwitch = (): JSX.Element => (
    <UserRegistrationProvider>
        <InnerRoute exact path={CONSTANTS.SWITCH_BASE_URL}>
            <InputFirstNamePage />
        </InnerRoute>
        <InnerRoute path={`${CONSTANTS.SWITCH_BASE_URL}/lastName`}>
            <InputLastNamePage />
        </InnerRoute>
    </UserRegistrationProvider>
);

UserRegistrationSwitch.Provider = UserRegistrationProvider;
