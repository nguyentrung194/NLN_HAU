import * as React from "react";
import { CardBooking } from "./card";
import { Typography, Button } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { MenuCustomHead } from "../common/menu";
import environment from "../../../config";
import axios from "axios";

export const Bookings = () => {
  const [bookings, setBookings] = React.useState<any[]>([]);
  React.useEffect(() => {
    async function fetchData() {
      // You can await here
      await axios({
        url: `${environment.api}bookings`,
        method: "GET",
        // withCredentials: true,
      })
        .then(({ data: { data: bookings } }: { data: { data: any[] } }) => {
          // Handle success
          setBookings(
            bookings.map((value) => {
              Object.keys(value).forEach((k: any) => {
                if (typeof value[k] === "object") {
                  value[k] = JSON.stringify(value[k]);
                }
              });
              return value;
            })
          );
        })
        .catch((err) => {
          console.log(err);
          // Handle error
          console.log(err);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gray-200/40 -mt-4 pt-4 min-h-screen">
      <div className="flex justify-between items-center px-6 pt-6">
        <div className="">
          <h3 className="text-3xl leading-none font-bold font-serif">
            Bookings
          </h3>
          <Typography
            sx={{ fontSize: 14, margin: "8px 0 0 0" }}
            color="text.secondary"
            gutterBottom
          >
            You have total 2,595 booking's.
          </Typography>
        </div>
        <div className="flex space-x-2">
          <Button variant="outlined">
            <span className="flex justify-between items-center">
              <CloudDownloadIcon fontSize="medium" color="primary" />
              <span className="pl-3">Export booking</span>
            </span>
          </Button>
          <MenuCustomHead
            options={[
              {
                key: "1",
                text: "Add booking",
                path: "/admin/bookings/add-booking",
              },
              {
                key: "2",
                text: "Import booking",
                path: "/admin/bookings/import-bookings",
              },
            ]}
          />
        </div>
      </div>
      <div className="p-6">
        <CardBooking values={bookings} />
      </div>
    </div>
  );
};
