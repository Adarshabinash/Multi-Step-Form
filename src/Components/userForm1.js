import { useForm } from "react-hook-form";

const UserForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <div className="userforms">
      <h1>
        <b>Registration Form</b>
      </h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          type="text"
          {...register("firstName", {
            required: "This is required dude !",
            minLength: 5,
          })}
          placeholder="First Name"
        />{" "}
        <br />
        <p>{errors.firstName?.message}</p>
        <input
          type="text"
          {...register("lastName", {
            required: "Can't leave it blank",
            minLength: 5
          })}
          placeholder="Last Name"
        />{" "}
        <br />
        <p>{errors.lastName?.message} </p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForms;
