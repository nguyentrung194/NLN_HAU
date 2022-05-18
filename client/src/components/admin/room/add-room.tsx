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
  CardMedia,
} from "@mui/material";
import * as React from "react";
import { useFormik } from "formik";
import { useToasts } from "react-toast-notifications";
import axios from "axios";
import environment from "../../../config";
import { storage } from "../../../hooks/use-firebase";

export const AddRoom = () => {
  const { addToast } = useToasts();

  const formik = useFormik({
    initialValues: {
      room_no: "",
      room_type: "",
      description: "",
      rent: 0,
      images: [],
      reviews: "",
      status: "",
    },
    onSubmit: async (values) => {
      try {
        formik.setSubmitting(true);
        // code there
        axios({
          url: `${environment.api}rooms`,
          method: "POST",
          data: values,
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
            Add Room
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
              <FormControl variant="standard" className="col-span-1">
                <TextField
                  id="No"
                  value={formik.values.room_no}
                  onChange={formik.handleChange}
                  label="No"
                  name="room_no"
                  required
                />
              </FormControl>
              <div className="col-span-1 flex items-center">
                <FormControl fullWidth>
                  <InputLabel id="Select-Room-Type-label">
                    Select Room Type
                  </InputLabel>
                  <Select
                    labelId="Select-Room-Type-label"
                    id="Select-Room-Type"
                    label="Select Room Type"
                    value={formik.values.room_type}
                    onChange={(event: SelectChangeEvent) => {
                      formik.setFieldValue("room_type", event.target.value);
                    }}
                  >
                    <MenuItem value={"Single"}>Single</MenuItem>
                    <MenuItem value={"Double"}>Double</MenuItem>
                    <MenuItem value={"Delux"}>Delux</MenuItem>
                    <MenuItem value={"Super Delux"}>Super Delux</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <FormControl variant="standard" className="col-span-1">
                <TextField
                  id="Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  label="Description"
                  name="description"
                  multiline
                  required
                />
              </FormControl>
              <FormControl variant="standard" className="col-span-1">
                <TextField
                  id="Rent"
                  value={formik.values.rent}
                  onChange={formik.handleChange}
                  label="Rent"
                  name="rent"
                  type="number"
                  required
                />
              </FormControl>
              <div className="col-span-1 row-span-2 flex items-start flex-col">
                {formik.values.images.length
                  ? formik.values.images.map((el) => {
                      return (
                        <CardMedia
                          component="img"
                          height="100"
                          sx={{ maxWidth: 100 }}
                          image={`${el}`}
                          alt="green iguana"
                        />
                      );
                    })
                  : ""}
                <div className="flex items-center">
                  <label className="h-full cursor-pointer border px-3 py-1.5 flex items-center justify-center w-full text-center hover:bg-slate-100 rou custom-file-upload">
                    <input
                      aria-label="File browser"
                      className="hidden"
                      name="images"
                      type="file"
                      multiple
                      accept="image/png,image/jpeg,image/jpg"
                      onChange={(e) => {
                        console.log(storage);
                        formik.setSubmitting(true);
                        const uploadFiles = Array.from(
                          e.target.files as FileList
                        ).map(async (file: File) => {
                          const storageRef = storage.ref();
                          const ref = storageRef.child(`assert/${file.name}`);
                          const metadata = {
                            size: file.size,
                            contentType: file.type,
                            name: file.name,
                          };
                          await ref.put(file, metadata);
                          const assetUrl = await ref.getDownloadURL();
                          formik.setSubmitting(false);
                          return { ...metadata, assetUrl };
                        });
                        console.log(uploadFiles);
                        Promise.all(uploadFiles)
                          .then(async (result) => {
                            formik.setFieldValue(
                              "images",
                              result.map((el) => {
                                return el.assetUrl;
                              })
                            );
                          })
                          .catch((error) => {
                            console.log(error.message);
                          });
                      }}
                    />
                    Upload Photo
                  </label>
                </div>
              </div>
              <FormControl variant="standard" className="col-span-1">
                <TextField
                  id="Review"
                  value={formik.values.reviews}
                  onChange={formik.handleChange}
                  label="Review"
                  name="reviews"
                  multiline
                />
              </FormControl>
              <div className="col-span-1 flex items-center">
                <FormControl fullWidth>
                  <InputLabel id="Status-label">Select an status</InputLabel>
                  <Select
                    labelId="Status-label"
                    id="Status"
                    label="Status"
                    value={formik.values.status}
                    onChange={(event: SelectChangeEvent) => {
                      formik.setFieldValue("status", event.target.value);
                    }}
                  >
                    <MenuItem value={"Open"}>Open</MenuItem>
                    <MenuItem value={"Inactive"}>Inactive</MenuItem>
                    <MenuItem value={"Booked"}>Booked</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Button type="submit" variant="contained">
                Add Room
              </Button>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
