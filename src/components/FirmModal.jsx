import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useStockCalls from "../service/useStockCalls";
import { ModalStyle } from "../styles/globalStyles";

export default function FirmModal({ open, handleClose, handleOpen, data, setData }) {
  const { postStock, putStock } = useStockCalls();


  const { name, phone, address, image } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data)
    if (data._id) {
      putStock("firms", data);
    } else {
      postStock("firms", data);
    }
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          component="form"
          sx={ModalStyle}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={2}
          onSubmit={handleSubmit} // Corrected this line
        >
          <TextField
            label="FirmName"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            required
            value={name}
            onChange={handleChange}
          />
          <TextField
            label="Phone"
            name="phone"
            id="phone"
            type="text"
            variant="outlined"
            required
            value={phone}
            onChange={handleChange}
          />
          <TextField
            label="Address"
            name="address"
            id="address"
            type="address"
            variant="outlined"
            required
            value={address}
            onChange={handleChange}
          />
          <TextField
            label="Image"
            name="image"
            id="image"
            type="url"
            variant="outlined"
            required
            value={image}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            type="submit"
            size="large">
            {data._id ? "Update Firm" : "Add Firm"}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
