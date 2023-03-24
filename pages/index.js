import Head from "next/head";
import Image from "next/image";
import WebSystem from "@/components/WebSystem";
import Bio from "../components/Bio";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Bio"])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation();
  const { locale } = useRouter();

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
        <Bio useTranslation={t} />
      </main>
    </>
  );
}
