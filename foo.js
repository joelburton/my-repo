import { delay } from "./delay.js";

async function af() {
  console.log("start af");
  await delay(500);
  console.log("finished af");
  return "done";
}

console.log("before call");
const result = af();
console.log("after call, got", result);
