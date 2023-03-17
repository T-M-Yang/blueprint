import "@/styles/globals.css";
import BackGround from "@/components/BackGround";

export default function App({ Component, pageProps, children }) {
  return (
    <BackGround>
      <Component {...pageProps} />
    </BackGround>
  );
}
