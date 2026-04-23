import { Outlet } from "react-router-dom";
import nubg from "../assets/img/nu-building.png";

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div
          className="flex items-center justify-center border-b-2 border-accent bg-zinc-200 bg-cover bg-center p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-zinc-300 lg:p-16"
          style={{ backgroundImage: `url(${nubg})` }}
        ></div>

        <main className="flex items-center bg-accent-soft px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;