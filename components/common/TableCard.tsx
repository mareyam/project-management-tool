import {
  Card,
  CardBody,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Image,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

type TableCardProps = {
  // data: Record<string | number, any[]>[];
  data: { [key: string]: any }[];
  columns?: { key: keyof any; header: string }[];
  column?: string[];
  handleDelete?: (id: string) => void;
  updateRecords: (email: string) => void;
};

const TableCard = ({
  data,
  columns,
  handleDelete,
  updateRecords,
}: TableCardProps) => {
  const router = useRouter();

  // //todo
  // const handleEditUser = () => {
  //   if (router.pathname == "/team") {
  //   }
  // };
  return (
    <Card rounded="lg" bg="white">
      <CardBody>
        <Table variant="simple" overflowY="scroll">
          <TableCaption>Flexible Table</TableCaption>
          <Thead>
            {columns && (
              <Tr>
                {columns.map(({ key, header }: any) => (
                  <Th key={key}>{header}</Th>
                ))}
                <Th>Action</Th>
              </Tr>
            )}
          </Thead>

          <Tbody>
            {data?.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                {columns?.map(({ key }: any) => (
                  <Td key={`${key}-${rowIndex}`}>
                    {key === "tags" ||
                    key === "dependencies" ||
                    key === "tasks" ||
                    key === "teamMembers" ||
                    key === "projects" ? (
                      row[key]?.join(", ")
                    ) : key === "avatar" ? (
                      <Image
                        src={row[key]}
                        alt="Avatar"
                        h="12"
                        w="12"
                        rounded="full"
                      />
                    ) : (
                      row[key]
                    )}
                  </Td>
                ))}
                <Td>
                  <Button
                    colorScheme="green"
                    onClick={() => {
                      handleDelete && handleDelete(row._id);
                    }}
                  >
                    delete
                  </Button>
                  <Button
                    colorScheme="orange"
                    onClick={() => updateRecords(row.email)}
                  >
                    edit
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default TableCard;
