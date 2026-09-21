import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-bl from-violet-500 to-fuchsia-500">
      <div className="border rounded-2xl p-6 min-w-xl bg-white/40">
        <Outlet />
      </div>
    </div>
  );
}
