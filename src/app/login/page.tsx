import React from "react";
import { InputField } from "../components/atoms/Input/InputField";
import { Grid, GridItem } from "@chakra-ui/react";
export default function LoginPage() {
  return (
    <>
      <Grid templateColumns="repeat(26, 1fr)">
        <GridItem colSpan={16}></GridItem>
        <GridItem colSpan={10}>
          <InputField placeholder="メールアドレス" size="lg" />
          <InputField type="password" placeholder="パスワード" size="lg" />
        </GridItem>
      </Grid>
    </>
  );
}
