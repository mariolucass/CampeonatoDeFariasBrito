import { Dispatch, SetStateAction } from "react";

export interface Picture {
  id: string;
  image: string;
  date: string;
}

export interface IPicturesState {
  pictures: Picture[];
  setPictures: Dispatch<SetStateAction<Picture[]>>;
}
