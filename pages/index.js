import Head from "next/head";
import Image from "next/image";
import Mobile from "../components/Mobile";

export default function Home() {
  return (
    <>
      <Head>
        <title>Snow Yang&apo;s portfolio</title>
        <meta name="description" content="Snow Yang&apo;s portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid bg-blue-800 xs:grid xs:min-h-screen xs:place-items-center">
        <Mobile />
      </main>
    </>
  );
}
