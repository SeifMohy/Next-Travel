import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import info from "../api/data/info.json";

const place = (props) => {
  //prop items from static props
  return <div>{props.Name}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: info.data.map((place) => {
      return ({params: {placeName: place.Name}})
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  return {
    props: {
      Name: params?.placeName,
      Description: info.data.filter((place)=>(params.placeName === place.Name)[0]?.Description),
      imgURL: info.data.filter((place)=>(params.placeName === place.Name)[0]?.imgURL)
    }
  };
};

export default place;
