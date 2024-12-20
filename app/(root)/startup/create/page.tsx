import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { NextPage } from "next";
import { redirect } from "next/navigation";

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  const session = await auth();
  if (!session) redirect("/");
  console.log("session", session);

  return (
    <>
      {" "}
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit Your Startup</h1>
      </section>
      <StartupForm />
    </>
  );
};

export default Page;
