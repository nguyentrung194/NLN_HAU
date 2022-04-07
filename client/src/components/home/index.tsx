import { Button } from "@mui/material";
import { Heading } from "./heading";
import { Hero } from "./hero";
import { ListHotels } from "./list-hotels";

export const Home = () => {
  return (
    <div>
      <div className="relative">
        <div className="grid grid-cols-2 p-3">
          <div className="col-span-1 flex justify-center items-center flex-col">
            <h1 className="pb-4 text-8xl leading-none font-medium font-serif">
              Hotel & restaurant
            </h1>
            <p className="pb-4 text-gray-500 leading-normal">
              Accompanying us, you have a trip full of experiences. With Roza,
              booking accommodation, resort villas, hotels
            </p>
            <Button
              onClick={() => {}}
              type="button"
              variant="contained"
              color="primary"
              className="self-start"
            >
              Start your search
            </Button>
          </div>
          <div className="col-span-1 pt-12">
            <img src="/images/home/hero.png" alt="hero" />
          </div>
        </div>
        <div className="absolute bottom-6 left-6 w-11/12">
          <Hero />
        </div>
      </div>
      <div>
        <Heading />
      </div>
      <div>
        <ListHotels />
      </div>
    </div>
  );
};
