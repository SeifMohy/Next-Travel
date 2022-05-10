import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import info from "../api/data/info.json";
import Image from "next/image";

type Info = {
  Name: string;
  Description: string;
  imgURL: string;
  imgs: { urls: {regular: string} }[];
};
const place = (props: Info) => {
  //prop items from static props
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-80 object-cover object-center"
          src={props.imgURL}
        />
        <p className="absolute text-white text-3xl font-bold bottom-0 p-5">
          {props.Name}
        </p>
      </div>
      <p className="p-5 mx-3 text-base">{props.Description}</p>
      <p className="text-lg mx-5">Other Photos</p>
      <div className="flex overflow-auto">
        {props.imgs.map((pics, idx) => {
          return (
            <img
              key={idx}
              src={pics.urls.regular}
              alt="Picture of the author"
              width={300}
              height={200}
            />
          );
        })}
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: info.data.map((place) => {
      return { params: { placeName: place.Name } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pics = await fetch(
    `https://api.unsplash.com/search/photos?query=${params?.placeName}&orientation=landscape&client_id=UlBgvQHHmGY9u6WdsnM-ZoaunUAKx8oJJQy_WZnGONI`
  );
  const data = await pics.json();
  return {
    props: {
      Name: params?.placeName,
      Description: info.data.filter((place) => {
        return place.Name === params.placeName;
      })[0].Description,
      imgURL: info.data.filter((place) => {
        return place.Name === params.placeName;
      })[0].imgURL,
      imgs: data.results,
    },
  };
};

export default place;
