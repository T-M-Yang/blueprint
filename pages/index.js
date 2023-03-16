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
      <main className="">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 rounded-full mix-blend-multiply blur-xl -left-4 w-72 h-72 bg-violet-500"></div>
            <div className="absolute top-0 rounded-full mix-blend-multiply blur-xl -right-4 w-72 h-72 bg-sky-700"></div>
            <div className="absolute bg-pink-600 rounded-full mix-blend-multiply blur-xl top-8 left-20 w-72 h-72"></div>
          </div>
        </div>
        <Mobile />
      </main>
    </>
  );
}
