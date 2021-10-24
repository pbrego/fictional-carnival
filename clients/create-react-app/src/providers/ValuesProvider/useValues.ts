/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from "react";
import { ValuesContext } from "./ValuesProvider";

export const useValues = () => {
    const context = useContext(ValuesContext);

    if (context === undefined) {
        throw new Error("useValues must be used inside ValuesProvider");
    }

    const values = context.form.values;
    const setValues = context.form.setValues;
    const updateValues = (val: any) => {
        setValues({ ...values, ...val });
    };

    return { values, updateValues };
};
