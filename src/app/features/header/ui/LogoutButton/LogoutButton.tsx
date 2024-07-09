import { Button, Icon } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { handleLogout } from "./utility/handleLogout";

export const LogoutButton = () => {
  const router = useRouter();

  return (
    <Button
      color="white"
      background="black"
      colorScheme="black"
      onClick={() => handleLogout({ router })}
    >
      <Icon as={IoIosLogOut} mr={2} />
      ログアウト
    </Button>
  );
};