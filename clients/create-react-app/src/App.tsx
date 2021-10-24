import { BrowserRouter, Switch } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { OuterRoute } from "components";
import { ReactQueryProvider } from "providers";
import "utils/helpers/i18n";

import { UserRegistrationSwitch } from "features";

import "./styles.css";

export const App = (): JSX.Element => {
    return (
        <ReactQueryProvider>
            <BrowserRouter>
                <Switch>
                    <OuterRoute exact path="/">
                        <h1>Algo</h1>
                    </OuterRoute>

                    <UserRegistrationSwitch />
                </Switch>
            </BrowserRouter>
            <ReactQueryDevtools />
        </ReactQueryProvider>
    );
};

export default App;
