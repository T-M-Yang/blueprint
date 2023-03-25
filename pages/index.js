import Head from "next/head";
import WebSystem from "@/components/WebSystem";

export default function Home() {
  return (
    <>
      <Head>
        <title>Snow Yang</title>
        <meta name="description" content="Snow Yang's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
        />
      </Head>
      <main className="grid min-h-screen max-w-screen">
        <WebSystem />
      </main>
    </>
  );
}
