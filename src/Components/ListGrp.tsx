import { useState } from "react";

function ListGrp() {
  let items = ["Tokyo", "Japan", "Kyoto", "Shinjuku"];

  useState; //State Hook
  const [selectIndex, setSelectIndex] = useState(-1);
  const msg = () => {
    return items.length === 0 ? <p>error 404</p> : null;
  };
  //   if (items.length === 0) {
  //     return <p> Error 404</p>;
  //   }
  return (
    <>
      <h1>List</h1>

      <ul className="list-group">
        {msg()}
        {/*
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
        {items.map((items, index) => (
          //   <li className="list-group-item  " key={items} onClick={handClick}>
          //     {items}
          //   </li>
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={items}
            onClick={() => setSelectIndex(index)}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGrp;
