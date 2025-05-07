import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const RootPage = async () => {
  const session = (await cookies()).get("session_id");
  if (session) redirect("/dashboard");
  return (
    <>
      <main className="flex h-screen w-screen flex-col items-center justify-center gap-5">
        <Link className="rounded-2xl bg-white px-4 py-2" href="/auth/sign-up">
          Sign up
        </Link>
        <Link className="rounded-2xl bg-white px-4 py-2" href="/auth/sign-in">
          Sign in
        </Link>
      </main>
    </>
  );
};

export default RootPage;
