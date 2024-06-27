import React from "react";
import axios, { isAxiosError } from "axios";

/**
 * グループの作成
 *
 * args:
 *  groupName: グループ名
 *  emails: メールアドレス
 *  droneNumber: 製造番号
 *  JUNumber: JU番号
 *  purchaseDate: 購入日
 *
 * return:
 *  status: ステータス
 *  message: メッセージ
 */

type DroneSet = {
  droneNumber: string;
  JUNumber: string;
  purchaseDate: string;
};

type CreateGroupProps = {
  values: {
    sets: DroneSet[];
  };
};

export const createGroup = async (props: CreateGroupProps) => {
  const { values } = props;

  // sessionからデータを取得
  const groupName = sessionStorage.getItem("groupName");
  const emails = sessionStorage.getItem("emails");

  const data = {
    name: groupName,
    emails: emails,
    droneSets: values.sets,
  };
  console.log(data);
  /**sample_data:
   *{groupName: "test", emails: "test@test", droneSets: Array(1)}
   */

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/groups`,
      data,
      {
        withCredentials: true,
      }
    );
    return response.status;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.status;
    }
  }
};
