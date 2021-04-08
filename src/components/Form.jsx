import React from "react";
import { useForm } from "react-hook-form";

function Form({ onSubmit }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", width: "400px" }}>
            <input {...register("title", { required: true })} type="text" placeholder="Titre" />
            {errors.title && <span>This field is required</span>}

            <input {...register("body", { required: true })} type="text" placeholder="Corps" />
            {errors.body && <span>This field is required</span>}

            <input {...register("userId", { required: true })} type="number" />
            {errors.userId && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
}

export default Form;