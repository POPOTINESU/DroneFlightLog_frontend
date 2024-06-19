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
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Flex alignItems="center" height="100%">
        <Text ml={6} as="b">
          Drone Flight Log
        </Text>
        <Spacer />
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Link href="">
            <Text textAlign={"center"}>飛行記録</Text>
          </Link>
          <Link href="">日常点検記録</Link>
          <Link href="">点検整備記録</Link>
          <Link href="/flightlog/groups">グループ一覧</Link>
        </Grid>
        <IconButton
          aria-label="HamburgerMenu"
          background="black"
          color="red.white"
          colorScheme="black"
          icon={<GiHamburgerMenu />}
          ref={btnRef}
          onClick={onOpen}
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent background="black">
            <DrawerCloseButton />
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
                    <Link href="/flightlog/group">飛行記録</Link>
                  </MenuItem>
                  <MenuItem>グループ名</MenuItem>
                  <MenuItem>グループ名</MenuItem>
                </MenuList>
              </Menu>
              <Box>
                <Button>ログアウト</Button>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};
