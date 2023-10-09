import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const RegistrationForm = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Must have a name !"),
    email: yup.string().email().required("Need a valid email to proceed"),
    phoneNumber: yup.number().required(),
    password: yup.string().min(8).max(10).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password don't match !")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitting = (data) => {
    console.log(data);
  };

  return (
    <div className="registration">
      <h1>Registration Form</h1>
      <hr />
      <form onSubmit={handleSubmit(submitting)}>
        <label htmlFor="fullName">Name</label>
        <input type="text" placeholder="Name" {...register("fullName")} />{" "}
        <p>{errors.fullName?.message} </p>
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Email" {...register("email")} /> <br />
        <p>{errors.email?.message} </p>
        <label htmlFor="phoneNumber">Phone</label>
        <input
          type="number"
          placeholder="PhoneNUmber"
          {...register("phoneNumber")}
        />{" "}
        <p>{errors.phoneNumber?.message} </p>
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />{" "}
        <p>{errors.password?.message} </p>
        <br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />{" "}
        <p>{errors.confirmPassword?.message} </p>
        <br />
        <input type="submit" placeholder="Submit" {...register("submitt")} />
      </form>
    </div>
  );
};

export default RegistrationForm;
