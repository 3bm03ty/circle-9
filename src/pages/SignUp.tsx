import { Alert, Button, Input, Select, SelectItem } from "@heroui/react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <form>
      <div className="grid gap-4">
        <div className="grid gap-3 text-center">
          <h1>Welcome Back</h1>
          <p>Sign in to continue your journey</p>
        </div>

        <Input variant="bordered" type="text" label="Full Name" />

        <Input variant="bordered" type="email" label="Email" />

        <Input variant="bordered" type="password" label="Password" />

        <Input variant="bordered" type="password" label="Confirm Password" />

        <Input variant="bordered" type="date" label="Birth Date" />

        <Select variant="bordered" label="Gender">
          <SelectItem key="male">Male</SelectItem>
          <SelectItem key="female">Female</SelectItem>
        </Select>

        <Button isLoading={false} color="primary" variant="solid" type="submit">
          Sign Up
        </Button>
        <p>
          Already have an account? <Link to={"/signin"}>Login now</Link>
        </p>
        <Alert
          hideIcon
          color="danger"
          title={"errMsg"}
          variant="faded"
          classNames={{ base: "py-0 capitalize text-center" }}
        />
      </div>
    </form>
  );
}
