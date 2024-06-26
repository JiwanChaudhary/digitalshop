import { headphoneData } from "./category-data/headphone-data";
import { keyboardData } from "./category-data/keyboard-data";
import { laptopData } from "./category-data/laptop-data";
import { mouseData } from "./category-data/mouse-data";
import { pcData } from "./category-data/pc-data";
import { speakerData } from "./category-data/speakers-data";

export type TCatDetailDataProps = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  brand: string;
  image: string;
};

export const categoryDetailData: {
  laptop: TCatDetailDataProps[];
  pc: TCatDetailDataProps[];
  keyboard: TCatDetailDataProps[];
  mouse: TCatDetailDataProps[];
  headphone: TCatDetailDataProps[];
  speaker: TCatDetailDataProps[];
} = {
  laptop: laptopData,
  pc: pcData,
  keyboard: keyboardData,
  mouse: mouseData,
  headphone: headphoneData,
  speaker: speakerData,
};
