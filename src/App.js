import React from "react";
import { useForm } from "react-hook-form";
import restCaller from './services/restCaller';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const res = await restCaller.axios.post('/posts', data);
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column", width: "400px"}}>
      
      <input {...register("title", { required: true })}  type="text" placeholder="Titre"/>
      {errors.title && <span>This field is required</span>}

      <input {...register("body", { required: true })}  type="text" placeholder="Corps"/>
      {errors.body && <span>This field is required</span>}

      <input {...register("userId", { required: true })}  type="number" />
      {errors.userId && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}