import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const UserForm2 = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your full name is required!"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(5).max(12).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don't match")
      .required(), //Syntax for confirmation.
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmition = (data) => {
    console.log(data);
  };

  return (
    <div className="newUserForm">
      <form onSubmit={handleSubmit(onSubmition)}>
        <label htmlFor="fullName">Full Name:</label> <br />
        <input
          type="text"
          placeholder="Full Name"
          {...register("fullName")}
        />{" "}
        <p>{errors.fullName?.message} </p>
        <label htmlFor="email">email:</label> <br />
        <input type="text" placeholder="Email" {...register("email")} />
        <p>{errors.email?.message} </p>
        <label htmlFor="age">Age:</label>
        <br />
        <input type="number" placeholder="Age" {...register("age")} />
        <p>{errors.age?.message} </p>
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />{" "}
        <p>{errors.password?.message} </p>
        <label htmlFor="confirmPassword">Confirm Passworrd:</label>
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />{" "}
        <p>{errors.confirmPassword?.message} </p>
        <input type="submit" id="subBtn" />
      </form>
    </div>
  );
};

export default UserForm2;
