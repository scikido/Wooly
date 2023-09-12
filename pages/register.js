import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandeler = async ({ name, email, password }) => {
    try {
      await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);
  return (
    <>
      <Layout>
        <form
          onSubmit={handleSubmit(submitHandeler)}
          className="flex flex-col justify-center items-center m-24 md:m-32 pt-10"
        >
          <h1 className="text-4xl font-bold">Register</h1>
          <div className="flex flex-col gap-1 pt-4">
            <label htmlFor="" className="text-xl">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="border-2 border-gray-500 rounded-sm"
              {...register("name", { required: "Please enter you name!" })}
            />
          </div>
          {errors.name && (
            <div className="text-red-500 mt-1">{errors.name.message}</div>
          )}
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
            Register
          </button>
        </form>
      </Layout>
    </>
  );
}

export default Register;
