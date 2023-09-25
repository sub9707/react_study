import { useRouter } from "next/router";
import Axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Loader } from "semantic-ui-react";
import Item from "@/components/Item";

export interface IProduct {
  id: number;
  name: string;
  price: string;
  description: string;
  updated_at: string;
  category: string;
  product_type: string;
  product_link: string;
  image_link: string;
}

export interface ItemProps {
  item: IProduct | undefined;
  name?: string;
}

const Post = ({ item, name }: ItemProps) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

// 브라우저 환경이 아닌 nodejs 서버에서 동작하는 함수
// 따라서 window와 같은 함수 사용시 에러가 발생함.
export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
