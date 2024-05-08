import { useUserStore } from "@/zustand-store/user";
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
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

type TableCardProps = {
  data: { [key: string]: any }[];
  columns?: { key: keyof any; header: string }[];
  column?: string[];
  record: string;
  handleDelete?: (id: string) => void;
  updateRecords: (email: string, description: string) => void;
};

const TableCard = ({
  data,
  columns,
  handleDelete,
  updateRecords,
  record,
}: TableCardProps) => {
  const router = useRouter();
  const { role, setRole } = useUserStore();

  useEffect(() => {
    setRole(localStorage.getItem("role") ?? "");
    console.log(role);
  }, [role]);

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
            {data?.map((row: any, rowIndex: number) => (
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

                {role == "user" ? (
                  <>
                    <Td>
                      <Button colorScheme="red" fontSize="12">
                        ADMIN ONLY OPERATIONS
                      </Button>
                    </Td>
                  </>
                ) : (
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
                      onClick={() => {
                        record === "email"
                          ? updateRecords(row.email, row.description)
                          : record === "title"
                          ? updateRecords(row.title, row.description)
                          : record === "task"
                          ? updateRecords(row.taskName, row.description)
                          : updateRecords(row.taskName, row.description);
                      }}
                    >
                      edit
                    </Button>
                  </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default TableCard;
