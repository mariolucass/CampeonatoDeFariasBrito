import { IPicturesState } from "@/interfaces/image_interface";
import { api } from "./axios";

export const getPictures = async ({
  pictures,
  setPictures,
}: IPicturesState) => {
  if (!pictures.length) {
    const { data } = await api.get("/weekendimages/");
    setPictures(data);
  }
};
