import React from "react";
import { ItemListProps, Product } from "@/pages";
import { Grid, Image } from "semantic-ui-react";
import Link from "next/link";
import styles from "./ItemList.module.css";

export default function ItemList(list: ItemListProps) {
  return (
    <div>
      {" "}
      <Grid columns={3}>
        <Grid.Row>
          {list.list.map((item: Product) => (
            <Grid.Column key={item.id}>
              <Link href={`/dynamic/${item.id}`}>
                <div className={styles.wrap}>
                  <Image
                    src={item.image_link}
                    alt={item.name}
                    className={styles.image_item}
                  />
                  <strong className={styles.title_item}>{item.name}</strong>
                  <span className={styles.txt_info}>
                    {item.category} {item.product_type}
                  </span>
                  <strong className={styles.num_price}>${item.price}</strong>
                </div>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
