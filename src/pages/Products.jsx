import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import useStockCalls from "../service/useStockCalls";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductModal from "../components/ProductModal";
import { useState } from "react";
import ProductTable from "../components/ProductTable";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";

export default function Products() {
  const { getStocks } = useStockCalls();
  const { products, error, loading } = useSelector((state) => state.stock);

  const initialState = { categoryId: "", brandId: "", name: "" };
  const [data, setData] = useState(initialState);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData(initialState);
  };

  useEffect(() => {
    getStocks("categories");
    getStocks("products");
    getStocks("brands");
  }, []);


  return (
    <div>
      <Typography variant="h5" color="error" mb={3}>
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 3 }}>
        New Product
      </Button>
      <ProductModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        data={data}
        setData={setData}
      />
      
      {error && <ErrorMsg />}
      {loading && <TableSkeleton />}

      {!error && !loading && !products.length && <NoDataMsg />}

      {!loading && !error && products.length > 0 && <ProductTable />}
    
    </div>
  );
}
