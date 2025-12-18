import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { ModalStyle } from "../styles/globalStyles";
import useStockCalls from "../service/useStockCalls";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

export default function PurchaseModal({ open, handleClose, data, setData }) {
  const { postStock, putStock } = useStockCalls();
  const { firms, brands, products } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data._id) {
      putStock("purchases", data);
    } else {
      postStock("purchases", data);
    }
    handleClose();
  };

  // console.log(data)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={ModalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <InputLabel id="firmId">Firm</InputLabel>
              <Select
                labelId="firmId"
                id="firmId"
                name="firmId"
                value={data?.firmId?._id || data?.firmId || ""}
                label="firm"
                onChange={handleChange}
                required>
                {firms?.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="brandId">Brand</InputLabel>
              <Select
                labelId="brandId"
                id="brandId"
                name="brandId"
                value={data?.brandId?._id || data?.brandId || ""}
                label="Brand"
                onChange={handleChange}
                required>
                {brands?.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="productId">Product</InputLabel>
              <Select
                labelId="productId"
                id="productId"
                name="productId"
                value={data?.productId?._id || data?.productId || ""}
                label="product"
                onChange={handleChange}
                required>
                {products?.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Quantity"
              name="quantity"
              id="quantity"
              type="number"
              variant="outlined"
              InputProps={{ inputProps: { min: 0 } }}
              value={data?.quantity || ""}
              onChange={handleChange}
              required
            />

            <TextField
              label="Price"
              name="price"
              id="price"
              type="number"
              variant="outlined"
              InputProps={{ inputProps: { min: 0 } }}
              value={data?.price || ""}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              {data._id ? "Update Purchase" : "Add Purchase"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
