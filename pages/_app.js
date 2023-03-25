import "@/styles/globals.css";
import BackGround from "@/components/BackGround";
import { Noto_Sans_TC } from "next/font/google";
import { appWithTranslation } from "next-i18next";

const noto = Noto_Sans_TC({
  subset: ["zh"],
  weight: ["100"],
  variable: "--font-zh",
  preload: false,
});

function App({ Component, pageProps }) {
  return (
    <BackGround>
      <div className={`${noto.variable} font-zh`}>
        <Component {...pageProps} />
      </div>
    </BackGround>
  );
}

export default appWithTranslation(App);
