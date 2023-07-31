import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html style={{ scrollBehavior: "smooth" }}>
      <Head />
      <body className="h-full scroll-smooth bg-gray-100 dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
