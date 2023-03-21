import "@/styles/globals.css";
import BackGround from "@/components/BackGround";
import { Noto_Sans_TC } from "next/font/google";

const noto = Noto_Sans_TC({
  subset: ["zh"],
  weight: ["100"],
  variable: "--font-zh",
  preload: false,
});

export default function App({ Component, pageProps, children }) {
  return (
    <BackGround>
      <div className={`${noto.variable} font-zh`}>
        <Component {...pageProps} />
      </div>
    </BackGround>
  );
}
