import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// 서버에서만 동작하는 문서파일. 전역 CSS나 함수는 동작하지 않고 MarkUpLang을 무시하고 진행한다.
