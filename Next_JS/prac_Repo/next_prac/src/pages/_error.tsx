import React from "react";
import { NextPageContext } from "next";

interface ErrorProps {
  statusCode: number | undefined;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <p>
      {statusCode
        ? `에러코드: ${statusCode}(이)가 서버 상에서 발생했습니다.`
        : "클라이언트에서 에러 발생"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
