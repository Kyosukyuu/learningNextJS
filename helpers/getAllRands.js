import getRandRange from "./getRandRange";

export default function getAllRands(totalNums, min, max) {
  const nums = [];
  nums.push(getRandRange(min, max));
  while (nums.length < totalNums) {
    let roll = getRandRange(min, max);
    if (nums.some((num) => roll === num)) roll = getRandRange(min, max);
    else nums.push(roll);
  }
  return nums;
}
