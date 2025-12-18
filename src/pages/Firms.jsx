import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import useStockCalls from "../service/useStockCalls";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";
import { useState } from "react";
import TableSkeleton, {
  CardSkeleton,
  ErrorMsg,
  NoDataMsg,
} from "../components/DataFetchMsg";
import ProductTable from "../components/ProductTable";

export default function Firms() {
  const { getStocks } = useStockCalls();

  useEffect(() => {
    getStocks("firms");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const { firms, loading, error } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData({ name: "", phone: "", address: "", image: "" });
  };

  return (
    <div>
      <Typography variant="h5" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Firm
      </Button>
      <FirmModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        data={data}
        setData={setData}
      />

      {error && <ErrorMsg />}
      {loading && (
        <CardSkeleton>
          <FirmCard />
        </CardSkeleton>
      )}

      {!error && !loading && !firms.length && <NoDataMsg />}

      {!loading && !error && firms.length > 0 && (
        <Grid container gap={2} mt={3} justifyContent={"center"}>
          {firms?.map((firm) => (
            <Grid item key={firm._id}>
              <FirmCard firm={firm} handleOpen={handleOpen} setData={setData} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
