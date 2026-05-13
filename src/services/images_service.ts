import { IPicturesState, Picture } from "@/interfaces/image_interface";
import { api } from "./axios";
import { fetchMock, isMockMode } from "./mock_handler";

export const getPictures = async ({
  pictures,
  setPictures,
}: IPicturesState) => {
  if (!pictures.length) {
    if (isMockMode) {
      const data = await fetchMock<Picture[]>("/mocks/weekendimages.json");
      setPictures(data);
    } else {
      const { data } = await api.get("/weekendimages/");
      setPictures(data);
    }
  }
};
