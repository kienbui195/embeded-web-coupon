import * as React from "react";
import CardH from "./CardHorizontal";

const ListProds = ({ data = [], webKey }) => {
  return (
    <section className="container">
      {data.map((prod, idx) => (
        <CardH prod={prod} webKey={webKey} key={idx} stt={idx + 1} />
      ))}
    </section>
  );
};

export default ListProds;
