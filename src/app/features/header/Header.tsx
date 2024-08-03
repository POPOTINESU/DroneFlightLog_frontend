"use client";
import {
  Box,
  Button,
  Flex,
  Grid,
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
  Badge,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { fetchGroupList } from "../../shared/api/fetchGroupList";
import { useRecoilState } from "recoil";
import { SelectedGroupState } from "./state/SelectedGroupState";
import { GroupListState } from "./state/GroupListState";
import { LogoutButton } from "./ui/LogoutButton/LogoutButton";
import { fetchUser } from "./api/fetchUser/fetchUser";
import { FaEnvelope } from "react-icons/fa";
import { fetchNotification } from "./api/fetchNotification/fetchNotification";

export const Header = () => {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGroup, setSelectedGroup] = useRecoilState(SelectedGroupState);
  const [groupList, setGroupList] = useRecoilState(GroupListState);
  const [notifications, setNotifications] = useState(0);
  const [user, setUser] = useState("");
  const btnRef = useRef<HTMLButtonElement>(null);

  type GroupList = {
    id: number;
    name: string;
    user_count: number;
    drone_count: number;
  };

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const response = await fetchGroupList();
        const user = await fetchUser();
        setUser(user.user_name);
        if (response.length > 0) {
          setSelectedGroup({ id: response[0].id, name: response[0].name });
        }
        setGroupList(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGroup();
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetchNotification();
        setNotifications(response.length);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotifications();
  }, [notifications]);

  const handelRedirect = () => {
    router.push("/invite/");
  }

  return (
    <Flex alignItems="center" height="100%" px={10}>
      <Text as="b">Drone Flight Log</Text>
      <Spacer />
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <Link href="/">
          <Text textAlign={"center"}>飛行記録</Text>
        </Link>
        <Link href="/groups">グループ一覧</Link>
        <Box position="relative" display="inline-block" width={8}>
          <IconButton
            aria-label="notifications"
            icon={<Box as={FaEnvelope} w={6} h={6} />}
            color={"white"}
            colorScheme="none"
            background="none"
            height={8}
            width={8}
            onClick={handelRedirect}
          />
          {notifications > 0 && (
            <Badge
              colorScheme="red"
              borderRadius="full"
              position="absolute"
              top="0"
              right="0"
              transform="translate(30%, -10%)"
            >
              {notifications}
            </Badge>
          )}
        </Box>
      </Grid>
      <IconButton
        aria-label="HamburgerMenu"
        background="black"
        color="white"
        colorScheme="black"
        ref={btnRef}
        onClick={onOpen}
        icon={<GiHamburgerMenu size="1.5rem" />}
      />
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
            <Flex alignItems="center">
              <Text color="white" p={4} as="b">
                ユーザー名
              </Text>
              <Text color="white">{user}</Text>
            </Flex>

            <Menu>
              <Flex alignItems="center">
                <Text color="white" p={4} as="b">
                  グループ名
                </Text>
                <MenuButton
                  as={Button}
                  p={2}
                  color="white"
                  background="gray"
                  height="1.5rem"
                >
                  {selectedGroup ? selectedGroup.name : ""}
                </MenuButton>
              </Flex>

              <MenuList>
                <MenuItem mb={2}>
                  <Link href="/create/group">グループ追加</Link>
                </MenuItem>
                {groupList.length > 0 ? (
                  groupList.map((group: GroupList) => (
                    <MenuItem
                      key={group.id}
                      onClick={() =>
                        setSelectedGroup({ id: group.id, name: group.name })
                      }
                    >
                      {group.name}
                    </MenuItem>
                  ))
                ) : (
                  <>グループを作成しましょう</>
                )}
              </MenuList>
            </Menu>
            <Box mt={4}>
              <LogoutButton />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
