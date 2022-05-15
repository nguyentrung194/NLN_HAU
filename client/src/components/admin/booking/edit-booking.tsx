import {
  Card,
  CardContent,
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import * as React from "react";
import { useFormik } from "formik";
import { useToasts } from "react-toast-notifications";
import axios from "axios";
import environment from "../../../config";
import { useParams } from "react-router-dom";

export const EditBooking = () => {
  const { addToast } = useToasts();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchData(id: string) {
      // You can await here
      await axios({
        url: `${environment.api}bookings/${id}`,
        method: "PUT",
        withCredentials: true,
      })
        .then(({ data: { data } }) => {
          // Handle success
          formik.setValues(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
          // Handle error
          console.log(err);
        });
    }
    if (id) {
      fetchData(id);
    }
  }, [id]);

  const formik = useFormik({
    initialValues: {
      package_p: "",
      userId: "",
      roomId: "",
      note: "",
      status: "",
    },
    onSubmit: async (values) => {
      try {
        formik.setSubmitting(true);
        // code there
        axios({
          url: `${environment.api}bookings/${id}`,
          method: "PUT",
          data: {},
          withCredentials: true,
        })
          .then(({ data }) => {
            // Handle success
            addToast(`Success`, {
              appearance: "success",
              autoDismiss: true,
            });
          })
          .catch((err) => {
            console.log(err);
            // Handle error
            addToast("Error!!", {
              appearance: "error",
              autoDismiss: true,
            });
          });
        formik.setSubmitting(false);
      } catch (error) {
        // Handle error
        addToast("Error!!", {
          appearance: "error",
          autoDismiss: true,
        });
        console.log(error);
        formik.setSubmitting(false);
      }
    },
  });
  return (
    <div className="bg-gray-200/40 -mt-4 pt-4 min-h-screen">
      <div className="flex justify-between items-center px-6 pt-6">
        <div className="">
          <h3 className="text-3xl leading-none font-bold font-serif">
            Edit Booking
          </h3>
        </div>
      </div>
      <div className="p-6">
        <Card sx={{ minWidth: 0, height: "100%" }}>
          <CardContent>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1 },
              }}
              noValidate
              autoComplete="off"
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-3 gap-3"
            >
              <FormControl variant="standard" className="col-span-3">
                <TextField
                  id="UserId"
                  value={formik.values.userId}
                  onChange={formik.handleChange}
                  label="UserId"
                  name="userId"
                  required
                />
              </FormControl>
              <FormControl variant="standard" className="col-span-3">
                <TextField
                  id="RoomId"
                  value={formik.values.roomId}
                  onChange={formik.handleChange}
                  label="RoomId"
                  name="roomId"
                  required
                />
              </FormControl>
              <div className="col-span-1 flex items-center">
                <FormControl fullWidth>
                  <InputLabel id="Select-an-package-label">
                    Select an package
                  </InputLabel>
                  <Select
                    labelId="Select-an-package-label"
                    id="Select-an-package"
                    label="Select an package"
                    value={formik.values.package_p}
                    onChange={(event: SelectChangeEvent) => {
                      formik.setFieldValue("package_p", event.target.value);
                    }}
                  >
                    <MenuItem value={"Strater Package"}>
                      Strater Package
                    </MenuItem>
                    <MenuItem value={"Honeymoon Package"}>
                      Honeymoon Package
                    </MenuItem>
                    <MenuItem value={"Spring Package"}>Spring Package</MenuItem>
                    <MenuItem value={"Vacation Package"}>
                      Vacation Package
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <FormControl variant="standard" className="col-span-3">
                <TextField
                  id="Note"
                  value={formik.values.note}
                  onChange={formik.handleChange}
                  label="Note"
                  name="note"
                  required
                  multiline
                  rows={3}
                />
              </FormControl>
              <Button type="submit" variant="contained">
                Edit Booking
              </Button>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
