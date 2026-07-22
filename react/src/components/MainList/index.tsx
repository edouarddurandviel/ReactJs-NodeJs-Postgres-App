import ButtonLink from "../ButtonLink";
import type { Company } from "../../stores/company/interfaces";
import { ItemList, ItemListLeft, ItemListRight, SpanIso, SpanTitle, SpanRef } from "./style";
import Button from "../Button";
import { Image } from "../../components";
import React from "react";

const Index = ({ data, handleEditModal, handleDeleteItem }: MainListProps) => {
  const date = new Date(data.createdAt);

  return (
    <ItemList key={data.id}>
      <ItemListLeft>
        <SpanTitle>{data.name}</SpanTitle>
        {data.imgpath && <Image src={data.imgpath} alt={data.imgpath} width={150} height={100} />}

        <SpanRef>
          {data.activity}{" "}
          {data.addresses &&
            data.addresses.map((e: any) => (
              <React.Fragment key={e.id}>
                <span>{e.street} </span>
                <span>{e.city}</span>
              </React.Fragment>
            ))}
        </SpanRef>
        <SpanIso>
          {data.owner} - {date.toLocaleDateString()}
        </SpanIso>
      </ItemListLeft>

      <ItemListRight>
        <Button
          content="Edit"
          onClick={() => {
            handleEditModal(data);
          }}
        />

        <Button
          content="Delete"
          onClick={() => {
            handleDeleteItem(data.id);
          }}
        />

        <ButtonLink path={`/detail/${data.id}`} text="View" />
      </ItemListRight>
    </ItemList>
  );
};

interface MainListProps {
  data: any;
  handleEditModal: (data: Company) => void;
  handleDeleteItem: (item: string) => void;
}

export default Index;
