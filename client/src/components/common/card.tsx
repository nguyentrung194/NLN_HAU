import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Carousel from "react-multi-carousel";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const ActionAreaCard = ({ ele }: any) => {
  const [isShown, setIsShown] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  return (
    <div
      className="flex justify-center items-start z-0"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            // autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={isShown}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {JSON.parse(ele.images || "[]").map((el: any) => {
              return (
                <CardMedia
                  component="img"
                  height="140"
                  image={`${el}`}
                  alt="green iguana"
                />
              );
            })}
          </Carousel>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {ele.room_no}
            </Typography>
            <Typography
              className="flex justify-between"
              gutterBottom
              variant="h5"
              component="div"
            >
              {ele.room_type}
              <div
                className={`bg-black/20 hover:bg-black/40 rounded-full ${
                  isFavorite ? "text-white" : "text-red-500"
                }`}
              >
                <IconButton
                  onClick={() => {
                    setIsFavorite(!isFavorite);
                  }}
                  aria-label="add to favorites"
                  color="inherit"
                >
                  <FavoriteIcon />
                </IconButton>
              </div>
            </Typography>
            <Typography variant="body2" className="py-2" color="text.secondary">
              <LocationOnIcon /> Sai gon
            </Typography>
            <Typography className="flex justify-between py-2" variant="body2">
              <span className="flex justify-center items-center  space-x-1">
                <strong>{`${ele.rent.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}`}</strong>{" "}
                <span>/night</span>
              </span>
              <span className="flex justify-center items-center space-x-1">
                <StarIcon className="text-yellow-300" /> <strong>4.3</strong>{" "}
                (16)
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
