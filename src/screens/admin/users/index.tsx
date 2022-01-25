import { Typography } from "@mui/material";
import { IColumn } from "../../../@types/table.types";
import Table from "../../../components/Table";
import { Container } from "../products/Products.styled";
import { useEffect } from "react";
import { getUsers } from "../../../redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import { ICellRendererParams } from "ag-grid-community";

const columns: IColumn[] = [
  {
    name: "firstName",
  },
  {
    name: "lastName",
  },
  {
    name: "email",
  },
  {
    name: "isAdmin",
    cellRenderer: "AdminRenderer",
  },
  {
    name: "dateOfBirth",
    cellRenderer: (params) => new Date(params.value).toLocaleDateString(),
  },
];

// const Admin = (props: ICellRendererParams) => {
//   return <></>;
// };

function Users() {
  // @ts-ignore
  const {
    users: { users },
  } = useSelector((state: AppState) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h2" color="text.primary">
        Users
      </Typography>
      <div style={{ width: "100%", margin: "auto" }}>
        <Table
          data={users}
          columns={columns}
          // frameworkComponents={{
          //   AdminRenderer: Admin,
          // }}
        />
      </div>
    </Container>
  );
}

export default Users;
