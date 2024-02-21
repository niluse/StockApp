import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Form } from "formik"
import { number, object, string } from "yup"

export const AddSchema = object({
  name: string()
    .required("Marka adi zorunludur"),
  phone: number()
    .required("telefon numarasi zorunludur"),
  address: string()
    .required("adres zorunludur"),
  img: string()
    .required("Email zorunludur")
    .url("Lütfen geçerli bir url giriniz.")
})

const AddFirm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="FirmName"
          name="name"
          id="name"
          type="text"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={errors.name}
        />
        <TextField
          label="Phone"
          name="phone"
          id="phone"
          type="text"
          variant="outlined"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone && Boolean(errors.phone)}
          helperText={errors.phone}
        />
        <TextField
          label="Address"
          name="address"
          id="address"
          type="address"
          variant="outlined"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.address && Boolean(errors.address)}
          helperText={errors.address}
        />
        <TextField
          label="Image"
          name="image"
          id="image"
          type="url"
          variant="outlined"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.image && Boolean(errors.image)}
          helperText={errors.image}
        />
        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </Box>
    </Form>
  )

  //* Firms de FirmCard yerine asagidaki gibi de kullnailabilir
  // <Card sx={{ maxWidth: 345 }}>
  //     <CardMedia
  //       sx={{ height: 140 }}
  //       image={firm.image}
  //       title={firm.name}
  //     />
  //     <CardContent>
  //       <Typography gutterBottom variant="h5" component="div">
  //         {firm.name}
  //       </Typography>
  //       <Typography variant="body2" color="text.secondary">
  //        {firm.address}
  //       </Typography>
  //       <Typography variant="body2" color="text.secondary">
  //        {firm.phone}
  //       </Typography>
  //     </CardContent>
  //     <CardActions>
  //       <Button size="small">Edit</Button>
  //       <Button size="small" onClick={()=>deleteFirm(firm._id)} >Delete</Button>
  //     </CardActions>
  //   </Card>
//   <Formik
//   initialValues={{
//     name: "",
//     phone: "",
//     address: "",
//     img: "",
//   }}
//   validationSchema={AddSchema}
//   onSubmit={(values, actions) => {
//     // register(values)
//     actions.resetForm()
//     actions.setSubmitting(false)
//   }}
//   component={(props) => <AddFirm {...props} />}
// ></Formik>
}

export default AddFirm
