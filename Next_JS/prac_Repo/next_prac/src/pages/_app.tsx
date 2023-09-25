import Footer from "@/components/Footer";
import Top from "@/components/Top";
import type { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

/**
 * Component: 현재 보여지는 페이지, 페이지 전환 시에 Component Props가 변경됨.
 * pageProps: Data patch Method를 통해 가져온 초기 개체. 없으면 빈 개체가 전달됨.
 */
