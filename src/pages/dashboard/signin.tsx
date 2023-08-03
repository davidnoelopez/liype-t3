import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { Cookies } from "react-cookie";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";
import Loading from "~/components/Loading";
import { api } from "~/utils/api";

const SignInPage = () => {
  const cookies = React.useMemo(() => new Cookies(), []);

  const [email, setEmail] = React.useState(
    (cookies.get("email") as string) || ""
  );
  const [sentMail, setSentMail] = React.useState(false);
  const [token, setToken] = React.useState("");
  const { status } = useSession();
  const callbackUrl = useCallback(
    () => `${window.location.protocol}//${window.location.host}/dashboard`,
    []
  );

  const router = useRouter();

  useEffect(() => {
    if (cookies.get("email") !== undefined) {
      toast.success(
        `Se ha enviado un correo de inicio de sesión a ${
          cookies.get("email") as string
        }`,
        { duration: 3000 }
      );
      setSentMail(true);
    }
  }, [cookies, router]);

  useEffect(() => {
    if (status === "authenticated") {
      cookies.remove("email");
      void router.push("/");
    }
  }, [status, router, cookies]);

  const { mutate: handleSignIn, isLoading } = api.users.existEmail.useMutation({
    onSuccess: async (userExists) => {
      if (userExists) {
        await signIn("email", {
          email,
          callbackUrl: callbackUrl(),
          redirect: false,
        })
          .then(() => {
            cookies.set("email", email, {
              path: "/",
              expires: new Date(Date.now() + 60000),
            });
            toast.success("Se ha enviado un correo de inicio de sesión.");
            setSentMail(true);
          })
          .catch(() => {
            toast.error("Ocurrió un error al iniciar sesión.");
          });
      } else {
        toast.error("No existe un usuario con ese correo.");
      }
    },
    onError: (error) => {
      console.log(error.data?.zodError?.fieldErrors);
      Object.entries(error.data?.zodError?.fieldErrors || {}).map(
        ([key, value]) => {
          toast.error(`${key}: ${value?.join(", ") || ""}`);
        }
      );
    },
  });

  const verifyToken = useCallback(() => {
    const redirect = `/api/auth/callback/email?callbackUrl=${callbackUrl()}/&token=${token}&email=${encodeURIComponent(
      email
    )}`;

    window.location.href = redirect;
  }, [token, email, callbackUrl]);

  return (
    <div className="mt-20 flex h-full place-content-center">
      {status === "loading" || status === "authenticated" ? (
        <div className="block w-full justify-center">
          <Loading />
        </div>
      ) : (
        <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-slate-400/20 p-4 dark:bg-white/10 ">
          {sentMail ? (
            <>
              <h3 className="text-2xl font-bold">Revisa tu correo</h3>
              <div className="text-md">
                Te hemos enviado un correo con un enlace para iniciar sesión o
                puedes escribir el codigo aqui.
              </div>
              {/* verify 6 digit code. */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="flex flex-col gap-4"
              >
                <label htmlFor="code"></label>
                <input
                  maxLength={6}
                  type="text"
                  name="token"
                  placeholder="Código"
                  id="token"
                  className="rounded-lg border border-slate-500/50 p-2 text-center text-3xl tracking-widest text-slate-900"
                  value={token}
                  onChange={(e) => setToken(e.target.value.toUpperCase())}
                />
                <button
                  type="submit"
                  className="rounded-lg bg-sky-400/50 px-10 py-3 font-semibold no-underline transition hover:bg-slate-900/20 disabled:cursor-default disabled:bg-sky-200/20 disabled:text-slate-400 dark:bg-sky-200/20 dark:hover:bg-white/20 dark:disabled:bg-sky-200/20 dark:disabled:text-slate-400"
                  disabled={isLoading || token.length !== 6}
                  onClick={() => {
                    verifyToken();
                  }}
                >
                  Enviar
                </button>
              </form>
              <Link href="/dashboard">
                <div className="flex items-center space-x-2 font-bold underline hover:font-medium hover:text-slate-300 ">
                  <IoArrowBack /> <span>Regresar al inicio</span>
                </div>
              </Link>
            </>
          ) : (
            <div className="dark:text-white">
              <h3 className="text-2xl font-bold">Iniciar Sesión</h3>
              <div className="text-md">
                Ingresa tu correo y recibiras un enlace para iniciar sesión.
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="flex flex-col gap-4"
              >
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.toLowerCase())}
                  id="email"
                  className="rounded-lg border border-slate-500/50 p-2 text-slate-900"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-sky-400/50 px-10 py-3 font-semibold no-underline transition hover:bg-slate-900/20 disabled:cursor-default disabled:bg-sky-200/20 disabled:text-slate-400 dark:bg-sky-200/20 dark:hover:bg-white/20 dark:disabled:bg-sky-200/20 dark:disabled:text-slate-400"
                  onClick={() => handleSignIn(email)}
                  disabled={isLoading || !email}
                >
                  Enviar
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignInPage;
