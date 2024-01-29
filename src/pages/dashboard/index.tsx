import { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

const Dashboard: NextPage = () => {
  const { data: sessionData, status } = useSession();
  return (
    <>
      <Head>
        <title>LIYPE Dashboard</title>
        <meta name="description" content="LIYPE Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-2 dark:text-white">
        <h1 className="text-6xl font-bold">Dashboard</h1>
        {status === "loading" ? (
          <div className="block w-full justify-center">
            <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            {status === "unauthenticated" ? (
              <Link
                href="/dashboard/signin"
                className="mt-4 rounded-md bg-slate-400/70 p-3 text-white backdrop-blur-sm transition duration-300 ease-in-out hover:bg-slate-400/80"
              >
                Iniciar sesión
              </Link>
            ) : (
              <>
                <h2 className="text-2xl font-bold">
                  {sessionData?.user?.name}
                </h2>
                <p className="text-xl">{sessionData?.user?.email}</p>
                <button
                  onClick={() => signOut()}
                  className="mt-4 rounded-md bg-slate-400/70 p-3 text-white backdrop-blur-sm transition duration-300 ease-in-out hover:bg-slate-400/80"
                >
                  Cerrar sesión
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
