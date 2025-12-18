import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStockCalls from "../service/useStockCalls";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
// import AddFirm, { AddSchema } from '../components/AddFirm';
// import { Formik } from 'formik';
import BrandCard from "../components/BrandCard";
import { useState } from "react";
import BrandModule from "../components/BrandModule";

export default function Brands() {
  const { getStocks } = useStockCalls();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    image: "",
  });
  useEffect(() => {
    getStocks("brands");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const { brands, loading, error } = useSelector((state) => state.stock);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData({ name: "", image: "" });
  };
  return (
    <div>
      <Typography variant="h5" color="error" mb={3}>
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Brand
      </Button>
      <BrandModule
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        data={data}
        setData={setData}
      />
      <Grid
        container
        spacing={3}
        gap={2}
        justifyContent={"center"}
        marginTop={2}>
        {brands?.map((brand) => (
          <Grid item key={brand._id}>
            <BrandCard
              brand={brand}
              setData={setData}
              handleOpen={handleOpen}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
