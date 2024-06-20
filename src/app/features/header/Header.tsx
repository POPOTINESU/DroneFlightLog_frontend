"use client";
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { DeleteJWTToken } from "./api/logout/DeleteJWTToken";
import { IoIosLogOut } from "react-icons/io";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleLogout = async () => {
    try {
      const response: number | undefined = await DeleteJWTToken();

      if (response === 200) {
        window.location.href = "/";
      } else {
        alert("ログアウトに失敗しました");
      }
    } catch (error) {
      console.error("ログアウトエラー:", error);
      alert("ログアウトに失敗しました");
    }
  };

  return (
    <>
      <Flex alignItems="center" height="100%" px={10}>
        <Text as="b">Drone Flight Log</Text>
        <Spacer />
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Link href="/flightlog">
            <Text textAlign={"center"}>飛行記録</Text>
          </Link>
          <Link href="">日常点検記録</Link>
          <Link href="">点検整備記録</Link>
          <Link href="/flightlog/groups">グループ一覧</Link>
        </Grid>
        <Button
          aria-label="HamburgerMenu"
          background="black"
          color="white"
          colorScheme="black"
          ref={btnRef}
          onClick={onOpen}
        >
          <GiHamburgerMenu size="1.5rem" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent background="black">
            <DrawerCloseButton color="white" />
            <DrawerHeader>
              <Spacer />
            </DrawerHeader>
            <DrawerBody>
              <Box ml="auto" mr="auto">
                <Button color="white" background="black" colorScheme="black">
                  ユーザー名
                </Button>
              </Box>
              <Menu>
                <MenuButton p={4} color="white">
                  グループ名
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link href="/flightlog/groups">飛行記録</Link>
                  </MenuItem>
                  <MenuItem>グループ名</MenuItem>
                  <MenuItem>グループ名</MenuItem>
                </MenuList>
              </Menu>
              <Box>
                <Button
                  color="white"
                  background="black"
                  colorScheme="black"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  <Icon as={IoIosLogOut} mr={2}/>
                  ログアウト
                </Button>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};
