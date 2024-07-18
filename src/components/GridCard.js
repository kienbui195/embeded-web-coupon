import * as React from "react";
import CardV from "./CardVertical";

const GridCard = ({ data = [], webKey }) => {
  return (
    <section
      className={`container m-auto gap-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1`}
    >
      {data.map((prod, idx) => (
        <CardV prod={prod} stt={idx+1} webKey={webKey} key={idx}/>
      ))}
    </section>
  );
};

export default GridCard;
