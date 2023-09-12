import Layout from "@/components/Layout";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

function Login() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandeler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.err) {
        console.log(result.err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Layout>
        <form
          onSubmit={handleSubmit(submitHandeler)}
          className="flex flex-col justify-center items-center m-24 md:m-32 pt-10"
        >
          <h1 className="text-4xl font-bold">Login</h1>
          <div className="flex flex-col gap-1 pt-4">
            <label htmlFor="" className="text-xl">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-2 border-gray-500 rounded-sm"
              {...register("email", { required: "Please enter email!" })}
            />
          </div>
          {errors.email && (
            <div className="text-red-500 mt-1">{errors.email.message}</div>
          )}
          <div className="flex flex-col gap-1 pt-3">
            <label htmlFor="" className="text-xl">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-2 border-gray-500 rounded-sm"
              {...register("password", {
                required: "Please enter password!",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters long!",
                },
              })}
            />
          </div>
          {errors.password && (
            <div className="text-red-500 mt-1">{errors.password.message}</div>
          )}
          <button
            type="submit"
            className="mt-4 px-3 py-[3px] rounded-md bg-green-500"
          >
            SignIn
          </button>
          <div className="pt-3 flex-col md:flex-row gap-3">
            <h1 className="pb-2">Don't have an account??</h1>
            <Link className="bg-green-500 p-1 rounded-md" href="/register">
              Register
            </Link>
          </div>
        </form>
      </Layout>
    </>
  );
}

export default Login;
