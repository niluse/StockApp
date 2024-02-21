import { useSelector } from "react-redux"
import useStockCalls from "../service/useStockCalls"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { btnStyle } from "../styles/globalStyles"
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid"
import Box from "@mui/material/Box"

export default function PurchaseTable({setData, handleOpen}) {
  const { deleteStock } = useStockCalls();
  const { purchases } = useSelector((state) => state.stock);
  const getRowId = (row) => row._id;

  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      flex: 1.4,
      minWidth: "150px",
      headerAlign: "center",
      align: "center",
      sortable: false,
      renderCell: ({row})=>(
        new Date(row.createdAt).toLocaleString("de-DE")
      )
    },
    {
      field: "firmId",
      headerName: "Firm",
      flex: 1,
      headerAlign: "center",
      align: "center",
      valueGetter: (props) => {
        // console.log(props)
        return props.row?.firmId?.name;
      },
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1.2,
      headerAlign: "center",
      align: "center",
      valueGetter: (props) => props.row?.brandId?.name,
    },
    {
      field: "product",
      headerName: "Product",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
      valueGetter: (props) => props.row?.productId?.name
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      headerAlign: "center",
      renderCell: ({
        row: { brandId, productId, quantity, price, firmId, _id },
      }) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              handleOpen()
              setData({ _id, brandId, productId, quantity, price, firmId })
            }}
            sx={btnStyle}
          />,
          <GridActionsCellItem
            key={"delete"}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteStock("purchases", _id)}
            sx={btnStyle}
          />,
        ]
      },
    },
  ];

  return (
    <Box sx={{ height: "100%" }}>
      <DataGrid
        autoHeight
        rows={purchases}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }}
        pageSizeOptions={[5, 10, 20, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
