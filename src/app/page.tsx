import LogOut from "@/components/buttons/LogOut";
import findUser from "@/lib/findUser";
import Link from "next/link";

const RootPage = async () => {
  const user = await findUser();
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      {user ? (
        <>
          <h1 className="text-3xl font-extrabold text-white">
            Welcome {user?.name}
          </h1>
          <LogOut />
        </>
      ) : (
        <Link className="rounded-2xl bg-white px-4 py-2" href="/auth/sign-up">
          Sign up
        </Link>
      )}
    </main>
  );
};

export default RootPage;
