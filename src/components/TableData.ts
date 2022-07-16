import createElement from "../utils/create-elem";

export default function TableData(data: string) {
  const td = createElement("div", { className: ["table__item"] }, data);

  return td;
}
