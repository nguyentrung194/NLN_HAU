import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export const Hero = () => {
  const formik = useFormik({
    initialValues: {
      location: "",
      checkin: null,
      checkout: null,
    },
    onSubmit: async (values: any) => {
      try {
        formik.setSubmitting(true);

        // code there

        formik.setSubmitting(false);
      } catch (error: any) {
        // code there

        console.log(error);
        formik.setSubmitting(false);
      }
    },
  });
  return (
    <div>
      <div className="">
        <form
          className="flex bg-white rounded-full w-full shadow-2xl py-7 px-6 space-x-3"
          onSubmit={formik.handleSubmit}
        >
          <div className="">
            <div>
              <TextField
                label="Location"
                className="w-full"
                required
                type="text"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="">
            <LocalizationProvider
              className="w-full"
              dateAdapter={AdapterDateFns}
            >
              <DatePicker
                label="Checkin"
                value={formik.values.checkin}
                onChange={(value: any) =>
                  formik.setFieldValue("checkin", value)
                }
                renderInput={(params: any) => (
                  <TextField required {...params} />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="">
            <LocalizationProvider
              className="w-full"
              dateAdapter={AdapterDateFns}
            >
              <DatePicker
                label="Checkout"
                value={formik.values.checkout}
                onChange={(value: any) =>
                  formik.setFieldValue("checkout", value)
                }
                renderInput={(params: any) => (
                  <TextField required {...params} />
                )}
              />
            </LocalizationProvider>
          </div>
          <Button
            onClick={() => {}}
            type="button"
            variant="contained"
            color="primary"
            disabled={formik.isSubmitting}
          >
            Search
          </Button>
          <Button
            onClick={() => {}}
            type="button"
            variant="outlined"
            color="primary"
            disabled={formik.isSubmitting}
          >
            Clear
          </Button>
        </form>
      </div>
    </div>
  );
};
