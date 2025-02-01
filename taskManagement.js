import {
  businessCostOfMonth as BuData,
  carCostOfMonth as CarData,
} from "./tasks.js";

let subData;
let mathData;
let totalMath = 0;
function Datacollection(data1, data2) {
  subData = Object.keys(data1).concat(Object.keys(data2));
  mathData = Object.values(data1).concat(Object.values(data2));
  mathData.forEach((item) => {
    totalMath += item;
  });

  return mathData, subData, totalMath;
}
Datacollection(BuData, CarData);

export { subData, mathData, totalMath };
