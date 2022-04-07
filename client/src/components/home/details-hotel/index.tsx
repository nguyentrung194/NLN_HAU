import { useParams } from "react-router-dom";
export const DetailsHotel = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};
