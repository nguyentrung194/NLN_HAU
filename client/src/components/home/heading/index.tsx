import { CarouselMulti } from "./carousel-multi";

export const Heading = () => {
  return (
    <div className="p-3 mb-11">
      <h3 className="pt-20 pb-3 text-4xl leading-none font-medium font-serif">
        Top hotels
      </h3>
      <p className="pb-3 text-gray-500 leading-normal">
        Most popular restaurants
      </p>
      <div className="">
        <CarouselMulti />
      </div>
    </div>
  );
};
