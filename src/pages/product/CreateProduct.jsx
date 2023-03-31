import React from "react";
import styled from "styled-components";
import CreateProduct from "../../components/main/product/CreateProduct";

function CreateProductPage() {
  return (
    <Body>
      <CreateProduct />
    </Body>
  );
}

export default CreateProductPage;

const Body = styled.div`
  width: 100%;
`;
