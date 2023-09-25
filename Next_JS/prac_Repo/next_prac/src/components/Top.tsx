import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
import Link from "next/link";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <Link href={`/`}>
            <img
              src="/images/planet.png"
              alt="logo"
              style={{ display: "block", width: 80 }}
            />
          </Link>
        </div>
        <Header as="h1">연습 헤더</Header>
      </div>
      <Gnb />
    </div>
  );
}
