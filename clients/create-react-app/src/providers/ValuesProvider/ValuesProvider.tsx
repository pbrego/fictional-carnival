/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, createContext } from "react";

export const ValuesContext = createContext<any>(undefined);

export const ValuesProvider: FC<{ form: any }> = ({ children, form }) => {
    const [values, setValues] = useState(form.values);

    const value = {
        form: { values: values || {}, setValues },
    };

    return <ValuesContext.Provider value={value}>{children}</ValuesContext.Provider>;
};
