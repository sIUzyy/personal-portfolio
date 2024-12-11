import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import CircularProgress from "@mui/material/CircularProgress";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import knowlesCompletion from "../assets/certi/knowles-completion.png";
import mdmsSeminar from "../assets/certi/mdms-seminar.png";
import ReactNative from "../assets/certi/reactNative.jpg";
import MERN from "../assets/certi/mern_stack.jpg";
import Azure from "../assets/certi/azure_cloud.jpg";

import { useState } from "react";

const Certification = () => {
  const [isLoading, setIsLoading] = useState(true);

  const imageListLoad = () => {
    setIsLoading(false);
  };

  const itemData = [
    {
      img: MERN,
      company: "MERN - The MERN Fullstack Guide",
      certi: "Course",
      date: "2024",
    },

    {
      img: Azure,
      company: "Fortifying Azure Cloud Storage ",
      certi: "Workshop",
      date: "2024",
    },

    {
      img: ReactNative,
      company: "React Native - The Practical Guide ",
      certi: "Course",
      date: "2024",
    },

    {
      img: mdmsSeminar,
      company: "Modern Database Management Systems",
      certi: "Workshop",
      date: "2024",
    },

    {
      img: knowlesCompletion,
      company: "knowles training institute",
      certi: "IT Intern",
      date: "2023 - 2024",
    },
  ];
  return (
    <div
      className={`max-w-2xl border-x border-[#27272C] h-auto md:h-screen lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto bg-[#18181B] px-3 py-12  text-white  md:px-5 lg:px-8 xl:px-12`}
    >
      <div className="container-1 mb-10">
        <h1 className="text-4xl font-h1 font-bold pb-2">Certifications</h1>
        <p className="text-[#A1A1AA] font-p text-lg">
          Here is a list of certifications I’ve earned throughout my journey.
        </p>
      </div>

      {isLoading && (
        <div className="flex justify-center">
          {" "}
          <CircularProgress />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {itemData.map((item) => (
          <Zoom key={item.img}>
            <ImageListItem
              onLoad={imageListLoad}
              style={{ display: isLoading ? "" : "block" }}
              className="my-3 md:mx-1 md:px-2 "
            >
              <div className=" ">
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.company}
                  className="rounded-sm hover:opacity-70 w-screen h-[248px]   "
                />

                <ImageListItemBar
                  title={
                    <div className="flex justify-between">
                      <h1 className="text-[#d1d1d4] capitalize font-p text-sm ">
                        {item.company}{" "}
                      </h1>
                      <h1 className="text-[#A1A1AA]  font-p text-sm">
                        {item.date}
                      </h1>
                    </div>
                  }
                  subtitle={
                    <h1 className="text-[#A1A1AA] capitalize font-p text-sm">
                      {item.certi}
                    </h1>
                  }
                  position="below"
                />
              </div>
            </ImageListItem>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Certification;
