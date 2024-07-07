"use client";
import { fetchGroupDetail } from "@/app/features/show/api/fetchGroupDetail";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { UserDetailTable } from "../organisms/UserDetailTable";
import { DroneDetailTable } from "../organisms/DroneDetailTable";

type GroupDetail = {
  name: string;
  users: { name: string; email: string; role: string; status: string }[];
  drones: {
    id: string;
    drone_number: string;
    JUNumber: string;
    purchaseDate: string;
  }[];
};
export const DetailGroupTemplate = () => {
  const { groupid } = useParams();
  const [groupDetail, setGroupDetail] = useState<GroupDetail | null>(null);

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const groupID = groupid[0];
        const data = await fetchGroupDetail({ id: groupID });
        setGroupDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGroup();
  }, [groupid]);

  return (
    <>
      <Card width="100%" height="100%">
        <CardHeader pb="0">
          <Heading size="md">グループ名: {groupDetail?.name}</Heading>
        </CardHeader>
        <CardBody>
          <Tabs>
            <TabList>
              <Tab>操縦者一覧</Tab>
              <Tab>機体一覧</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <UserDetailTable groupDetail={groupDetail} />
              </TabPanel>

              <TabPanel>
                <DroneDetailTable groupDetail={groupDetail} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};
