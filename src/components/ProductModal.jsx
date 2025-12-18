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

export default function ProductModal({ open, handleClose, data, setData }) {
  const { postStock, putStock } = useStockCalls();
  const { categories, brands } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data._id) {
      putStock("products", data);
    } else {
      postStock("products", data);
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
              <InputLabel id="categoryId">Category</InputLabel>
              <Select
                labelId="categoryId"
                id="categoryId"
                name="categoryId"
                value={data?.categoryId?._id || data?.categoryId || ""}
                label="Category"
                onChange={handleChange}
                required>
                {categories?.map((item) => (
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

            <TextField
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={data?.name || ""}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              {data._id ? "Update Product" : "Add Product"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
