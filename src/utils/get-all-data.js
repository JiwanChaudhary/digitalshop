import { categoryDetailData } from "./category-detail-data";

export function getAllData() {
  return [
    ...categoryDetailData.laptop,
    ...categoryDetailData.pc,
    ...categoryDetailData.keyboard,
    ...categoryDetailData.mouse,
    ...categoryDetailData.headphone,
    ...categoryDetailData.speaker,
  ];
}

export function shuffleData(arrayData) {
  let currentIndex = arrayData.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arrayData[currentIndex];
    arrayData[currentIndex] = arrayData[randomIndex];
    arrayData[randomIndex] = temporaryValue;
  }

  return arrayData;
}

export function getItemsByName(searchTerm) {
  const allData = getAllData();

  return allData.filter((x) => x.name.toLowerCase().includes(searchTerm));
}
