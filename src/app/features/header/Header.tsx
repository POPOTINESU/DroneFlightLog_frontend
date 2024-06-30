"use client";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  SelectField,
  Select,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useRef} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { DeleteJWTToken } from "./api/logout/DeleteJWTToken";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import { fetchGroupList } from "../flightlog/api/group/FetchGroupList";
import { useRecoilState } from "recoil";
import { SelectedGroupState } from "./state/SelectedGroupState";
import { GroupListState } from "./state/GroupListState";

export const Header = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGroup, setSelectedGroup] = useRecoilState(SelectedGroupState);
  const [groupList, setGroupList] = useRecoilState(GroupListState);
  const btnRef = useRef<HTMLButtonElement>(null);

  type GroupList ={
    id: number;
    name: string;
    user_count: number;
    drone_count: number;
  }
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const response = await fetchGroupList();
        if (response.length > 0) {
          setSelectedGroup({id: response[0].id, name: response[0].name});
        }
        setGroupList(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGroup();
  }, []);

  const handleLogout = async () => {
    try {
      const response: number | undefined = await DeleteJWTToken();

      if (response === 200) {
        router.push("/login");
      } else {
        alert("ログアウトに失敗しました");
      }
    } catch (error) {
      console.error("ログアウトエラー:", error);
      alert("ログアウトに失敗しました");
    }
  };

  return (
    <Flex alignItems="center" height="100%" px={10}>
      <Text as="b">Drone Flight Log</Text>
      <Spacer />
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <Link href="/">
          <Text textAlign={"center"}>飛行記録</Text>
        </Link>
        <Link href="">日常点検記録</Link>
        <Link href="">点検整備記録</Link>
        <Link href="/groups">グループ一覧</Link>
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
        size={"sm"}
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
                <Flex alignItems='center'>
                  <Text color="white" p={4} as="b">
                    グループ名
                  </Text>
                  <MenuButton p={2} color="white" background="gray" height="1.5rem" >
                    {selectedGroup ? selectedGroup.name : ""}
                  </MenuButton>
                </Flex>

                <MenuList>
                  <MenuItem mb={2}>
                    <Link href="/create/group">グループ追加</Link>
                  </MenuItem>
                  {groupList.length > 0 ? (
                    groupList.map((group:GroupList) => (
                      <MenuItem
                        key={group.id}
                        onClick={() => setSelectedGroup({id: group.id, name: group.name})}
                      >
                        {group.name}
                      </MenuItem>
                    ))
                  ) : (
                    <></>
                  )}
                </MenuList>
              </Menu>
            <Box>
              <Button
                color="white"
                background="black"
                colorScheme="black"
                onClick={handleLogout}
              >
                <Icon as={IoIosLogOut} mr={2} />
                ログアウト
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
