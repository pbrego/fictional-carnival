/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useValues } from "providers";
import { CONSTANTS } from "../";

export const InputLastNamePage = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { values, updateValues } = useValues();
    const history = useHistory();
    const onSubmit = (data: any) => {
        updateValues(data);
    };

    useEffect(() => {
        values.firstName === "" && history.push(CONSTANTS.SWITCH_BASE_URL);
    }, [values, history]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="lastName">Last name</label>
                <div>
                    <input
                        aria-required
                        aria-invalid={errors.lastName ? true : undefined}
                        autoComplete="family-name"
                        id="lastName"
                        {...register("lastName", { required: true, maxLength: 30 })}
                        defaultValue={values.lastName}
                    />
                </div>
                {errors.lastName && (
                    <span aria-errormessage="lastName">
                        {errors.lastName.type === "required" && "This is required"}
                        {errors.lastName.type === "maxLength" && "This is too large"}
                    </span>
                )}
            </div>
            <button>Send</button>
        </form>
    );
};
