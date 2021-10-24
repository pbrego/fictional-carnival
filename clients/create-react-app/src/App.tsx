import { BrowserRouter, Switch } from "react-router-dom";
import { OuterRoute } from "components";

import { UserRegistrationSwitch } from "features";

import "./styles.css";

export const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <OuterRoute exact path="/">
                    <h1>Algo</h1>
                </OuterRoute>

                <UserRegistrationSwitch />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
