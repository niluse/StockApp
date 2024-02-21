import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import useStockCalls from "../service/useStockCalls";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PurchaseModal from "../components/PurchaseModal";
import { useState } from "react";
import PurchaseTable from "../components/PurchaseTable";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";

export default function Purchases() {
  const { getProPurBranFirm } = useStockCalls();
  const { purchases, error, loading } = useSelector((state) => state.stock);

  const initialState = { categoryId: "", brandId: "", name: "" };
  const [data, setData] = useState(initialState);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData(initialState);
  };

  useEffect(() => {
    getProPurBranFirm()
  }, []);


  return (
    <div>
      <Typography variant="h5" color="error" mb={3}>
        Purchases
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 3 }}>
        New Purchase
      </Button>
      <PurchaseModal
        open={open}
        handleClose={handleClose}
        data={data}
        setData={setData}
      />
      
      {error && <ErrorMsg />}
      {loading && <TableSkeleton />}

      {!error && !loading && !purchases.length && <NoDataMsg />}

      {!loading && !error && purchases.length > 0 && <PurchaseTable setData={setData} handleOpen={handleOpen} />}
    
    </div>
  );
}
