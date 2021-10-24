/* eslint-disable @typescript-eslint/no-explicit-any */
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useValues } from "providers";
import { CONSTANTS } from "../";

export const InputFirstNamePage = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { values, updateValues } = useValues();
    const history = useHistory();
    const onSubmit = (data: any) => {
        updateValues(data);
        history.push(`${CONSTANTS.SWITCH_BASE_URL}/lastName`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="firstName">First name</label>
                <div>
                    <input
                        aria-describedby={errors.firstName && "firstNameErrorFeedback"}
                        autoComplete="given-name"
                        {...register("firstName", { required: true, maxLength: 30 })}
                        defaultValue={values.firstName}
                    />
                </div>
                {errors.firstName && errors.firstName.type === "required" && (
                    <span id="firstNameErrorFeedback">This is required</span>
                )}
            </div>
            <button>Next</button>
        </form>
    );
};
