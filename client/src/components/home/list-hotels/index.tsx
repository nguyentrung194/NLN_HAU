import * as React from "react";
import { ActionAreaCard } from "../../common/card";
import axios from "axios";
import environment from "../../../config";

export const ListHotels = () => {
  const [rooms, setRooms] = React.useState<any[]>([]);
  React.useEffect(() => {
    async function fetchData() {
      // You can await here
      await axios({
        url: `${environment.api}rooms`,
        method: "GET",
        // withCredentials: true,
      })
        .then(({ data: { data: bookings } }) => {
          // Handle success
          console.log(bookings);
          setRooms(
            bookings.map((value: any) => {
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
    <div className="p-3 mb-11">
      <h3 className="pt-20 pb-3 text-4xl leading-none font-medium font-serif">
        List hotels
      </h3>
      <p className="pb-3 text-gray-500 leading-normal">Best your choose</p>
      <div className="grid grid-cols-3 gap-3">
        {rooms.map((el) => {
          return <ActionAreaCard ele={el} />;
        })}
      </div>
    </div>
  );
};
