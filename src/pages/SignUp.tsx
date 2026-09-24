import { Alert, Button, Input, Select, SelectItem } from "@heroui/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getInputProps } from "../utils/helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../schemas/signUpSchema";
import { useState } from "react";
import { authServices } from "../services/authService";
import type { RegisterData } from "../types/registerData";

export default function SignUp() {
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Mohamed",
      email: "mohamed@gmail.com",
      password: "Mohamed@123",
      rePassword: "Mohamed@123",
      dateOfBirth: "2008-09-20",
      gender: "male",
    },
    resolver: zodResolver(signUpSchema),
  });

  async function signUp(values: RegisterData) {
    setErrMsg("");
    setSuccessMsg("");
    setIsLoading(true);

    try {
      const data = await authServices.signUp(values);

      setSuccessMsg(data.message);
      setIsLoading(false);
      navigate("/signin");
    } catch (error: any) {
      setErrMsg(error.response.data.message);
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(signUp)}>
      <div className="grid gap-4">
        <div className="grid gap-3 text-center">
          <h1>Welcome Back</h1>
          <p>Sign in to continue your journey</p>
        </div>

        <Input
          {...register("name")}
          {...getInputProps("text", "Full Name")}
          isInvalid={!!errors.name?.message}
          errorMessage={errors.name?.message as string}
        />

        <Input
          {...register("email")}
          {...getInputProps("email", "Email")}
          isInvalid={!!errors.email?.message}
          errorMessage={errors.email?.message as string}
        />

        <Input
          {...register("password")}
          {...getInputProps("password", "Password")}
          isInvalid={!!errors.password?.message}
          errorMessage={errors.password?.message as string}
        />

        <Input
          {...register("rePassword")}
          {...getInputProps("password", "Confirm Password")}
          isInvalid={!!errors.rePassword?.message}
          errorMessage={errors.rePassword?.message as string}
        />

        <Input
          {...register("dateOfBirth")}
          {...getInputProps("date", "Birth Date")}
          isInvalid={!!errors.dateOfBirth?.message}
          errorMessage={errors.dateOfBirth?.message as string}
        />

        <Select
          {...register("gender")}
          {...getInputProps(undefined, "Gender")}
          isInvalid={!!errors.gender?.message}
          errorMessage={errors.gender?.message as string}
        >
          <SelectItem key="male">Male</SelectItem>
          <SelectItem key="female">Female</SelectItem>
        </Select>

        <Button
          isLoading={isLoading}
          color="primary"
          variant="solid"
          type="submit"
        >
          Sign Up
        </Button>
        <p>
          Already have an account? <Link to={"/signin"}>Login now</Link>
        </p>
        {errMsg && (
          <Alert
            hideIcon
            color="danger"
            title={errMsg}
            variant="faded"
            classNames={{ base: "py-0 capitalize text-center" }}
          />
        )}
        {successMsg && (
          <Alert
            hideIcon
            color="success"
            title={successMsg}
            variant="faded"
            classNames={{ base: "py-0 capitalize text-center" }}
          />
        )}
      </div>
    </form>
  );
}
