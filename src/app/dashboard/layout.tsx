import { LayoutDataProvider } from "@/components/contexts/LayoutData";
import getUserData from "@/lib/getUserData";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard | Morrow",
};

const DashboardLayout = async ({
  children,
  header,
  nav,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  nav: React.ReactNode;
}) => {
  const session = (await cookies()).get("session_id")?.value;

  if (!session) redirect("/auth/sign-in");

  const user = await getUserData(session);

  if (!user) redirect("/auth/sign-in?logout=true");
  return (
    <main className="grid grid-cols-2 gap-2 p-2 text-white">
      {children}
      <LayoutDataProvider user={user}>
        {header}
        {nav}
      </LayoutDataProvider>
    </main>
  );
};

export default DashboardLayout;
