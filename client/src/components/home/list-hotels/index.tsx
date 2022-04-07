import { ActionAreaCard } from "../../common/card";
export const ListHotels = () => {
  const images = [
    "/images/home/paris.jpeg",
    "/images/home/vietnam.jpeg",
    "/images/home/paris.jpeg",
    "/images/home/paris.jpeg",
    "/images/home/paris.jpeg",
    "/images/home/paris.jpeg",
    "/images/home/paris.jpeg",
  ];
  return (
    <div className="p-3 mb-11">
      <h3 className="pt-20 pb-3 text-4xl leading-none font-medium font-serif">
        List hotels
      </h3>
      <p className="pb-3 text-gray-500 leading-normal">Best your choose</p>
      <div className="grid grid-cols-3 gap-3">
        {images.map((el) => {
          return <ActionAreaCard image={el} />;
        })}
      </div>
    </div>
  );
};
