"use client";

import signUp from "@/lib/actions/signUp";
import { formState } from "@/lib/types/signUp";
import Link from "next/link";
import { useActionState } from "react";

const SignUpPage = () => {
  const initialFormState: formState = {};

  const [state, action, isPending] = useActionState(signUp, initialFormState);

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <form
        action={action}
        className="flex flex-col items-center gap-3 rounded-2xl border-2 bg-green-500/50 p-5 duration-300 hover:border-green-500/60"
      >
        <h1 className="text-5xl font-extrabold">Morrow</h1>
        <h1 className="text-2xl font-bold">Sign up for free</h1>
        <input
          required
          defaultValue={state.values?.name}
          type="text"
          name="name"
          placeholder="Your full name"
          className="auth-form-input"
        />
        <input
          required
          defaultValue={state.values?.email}
          type="email"
          name="email"
          placeholder="Email address"
          className="auth-form-input"
        />
        <input
          required
          defaultValue={state.values?.password}
          type="password"
          name="password"
          placeholder="Enter a strong password"
          className="auth-form-input"
        />
        <input
          required
          defaultValue={state.values?.rePassword}
          type="password"
          name="rePassword"
          placeholder="Re enter password"
          className="auth-form-input"
        />
        {state.error && <p className="auth-form-error">{state.error}</p>}
        <div className="flex w-full gap-3">
          <input
            type="submit"
            value={isPending ? "Signing Up" : "Continue"}
            className="auth-submit-button"
            disabled={isPending}
          />
          <Link href="/auth/sign-in" className="auth-change-link">
            Sign-in
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignUpPage;
