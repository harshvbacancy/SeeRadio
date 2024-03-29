import React from "react";
import { useForm } from "react-hook-form";

export default function Example() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <input name="example" defaultValue="test" ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input name="exampleRequired" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}