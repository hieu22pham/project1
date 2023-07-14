import {post} from "../../../src/untils/request"

export const bookRoom = async () => {
  const result = await postMessage("book-room");
  return result;
}