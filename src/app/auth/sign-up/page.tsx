"use client";

import Link from "next/link";

const SignUpPage = () => {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <form className="flex flex-col items-center gap-3 rounded-2xl border-2 bg-green-500/50 p-5 duration-300 hover:border-green-500/60">
        <h1 className="text-5xl font-extrabold">Morrow</h1>
        <h1 className="text-2xl font-bold">Sign up for free</h1>
        <input
          defaultValue={""}
          type="text"
          name="name"
          placeholder="Your full name"
          className="auth-form-input"
        />
        <input
          defaultValue={""}
          type="email"
          name="email"
          placeholder="Email address"
          className="auth-form-input"
        />
        <input
          defaultValue={""}
          type="password"
          name="password"
          placeholder="Enter a strong password"
          className="auth-form-input"
        />
        <input
          defaultValue={""}
          type="password"
          name="rePassword"
          placeholder="Re enter password"
          className="auth-form-input"
        />
        <p className="auth-form-error">Something went wrong</p>
        <div className="flex w-full gap-3">
          <input
            type="submit"
            value="Continue"
            className="auth-submit-button"
          />
          <Link href="/auth/login" className="auth-change-link">
            Login
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignUpPage;
