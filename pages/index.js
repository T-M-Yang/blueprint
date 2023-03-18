import Head from "next/head";
import Image from "next/image";
import WebSystem from "@/components/WebSystem";
import Bio from "../components/Bio";

export default function Home() {
  return (
    <>
      <Head>
        <title>Snow Yang&apo;s portfolio</title>
        <meta name="description" content="Snow Yang&apo;s portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid min-h-screen max-w-screen">
        <WebSystem />

        <Bio />
      </main>
    </>
  );
}
