import {
  Box,
  Card,
  Flex,
  Heading,
  SkeletonCircle,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function GroupPage() {
  const data = {
    time: 10,
  };
  return (
    <>
      {/* TODO: データの取得
    　　　　　　テストコードの追加
              リファクタリング
              ページネーションの追加
    */}
      <Box width="70%" height="100%" mx="auto">
        <Heading as="h1" size="md" p={2}>
          操縦者一覧
        </Heading>
        <Card width="100%" height="90%">
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>操縦者名</Th>
                  <Th>総飛行時間</Th>
                  <Th> 取得資格</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex alignItems="center">
                      <SkeletonCircle size="6" />
                      <Text ml={2}>操縦者A</Text>
                    </Flex>
                  </Td>
                  <Td>飛行時間</Td>
                  <Td>一等無人航空機操縦者資格</Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </>
  );
}
