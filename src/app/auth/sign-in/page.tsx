"use client";

import signIn from "@/lib/actions/signIn";
import { formState } from "@/lib/types/signIn";
import Link from "next/link";
import { useActionState } from "react";

const SignInPage = () => {
  const initialFormState: formState = {};

  const [state, action, isPending] = useActionState(signIn, initialFormState);

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <form
        action={action}
        className="flex flex-col items-center gap-3 rounded-2xl border-2 bg-green-500/50 p-5 duration-300 hover:border-green-500/60"
      >
        <h1 className="text-5xl font-extrabold">Morrow</h1>
        <h1 className="text-2xl font-bold">Great to see you again</h1>
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
        {state.error && <p className="auth-form-error">{state.error}</p>}
        <div className="flex w-full gap-3">
          <input
            type="submit"
            value={isPending ? "Signing in" : "Continue"}
            className="auth-submit-button"
            disabled={isPending}
          />
          <Link href="/auth/sign-up" className="auth-change-link">
            Sign Up
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignInPage;
