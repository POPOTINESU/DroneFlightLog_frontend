export type Group = {
  id: string;
  name: string;
  user_count: number;
  drone_count: number;
};

export type GroupTableTypes = {
  group: Group[];
  handleRedirectDetailGroup: (id: string) => void;
};
