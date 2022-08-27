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

export const AddBooking = () => {
  const { addToast } = useToasts();
  const formik = useFormik({
    initialValues: {
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
          url: `${environment.api}bookings`,
          method: "POST",
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
            Add Booking
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
                Add Booking
              </Button>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
