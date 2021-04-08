import React from "react";
import restCaller from './services/restCaller';
import Form from './components/Form';

export default function App() {

  const onSubmit = async (data) => {
    const res = await restCaller.axios.post('/posts', data);
    console.log(res);
  };

  return (
    <Form
      onSubmit={onSubmit}
    />
  );
}