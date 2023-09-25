import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { Header, Divider, Loader } from "semantic-ui-react";
import ItemList from "@/components/ItemList";

export interface Product {
  id: number;
  image_link: string;
  name: string;
  price: string;
  category: string;
  product_type: string;
}
export interface ItemListProps {
  list: Product[];
}

export default function Home() {
  const [list, setList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>Home | Next.js</title>
        <meta name="description" content="테스트 페이지 홈"></meta>
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header as={"h3"} style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as={"h3"} style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </div>
  );
}
