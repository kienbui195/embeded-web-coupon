import * as React from "react";

const CardH = ({ prod, webKey, stt }) => {
  return (
    <div className="w-full flex md:flex-row flex-col p-4 gap-4 shadow-md rounded-md relative">
      <img
        src={prod.thumbnail}
        className="w-full flex-1 h-auto object-cover border shadow-inner rounded-md"
      />
      {stt && (
        <div className="rounded-full w-10 h-10 text-xl bg-red-500 text-white font-bold absolute top-0 left-0 flex justify-center items-center">
          {stt}
        </div>
      )}
      <div className="flex flex-col gap-2 mt-2 text-lg flex-1">
        <div className="font-bold">{prod.title}</div>
        <div className="font-bold">{prod.rating} *</div>
        <div className="font-bold">{prod.price} USD</div>
        <div className="italic">{prod.description}</div>
        <div className="font-bold italic">Category: {prod.category}</div>
        <div className="font-bold italic flex flex-wrap items-center gap-2">
          Tags:{" "}
          {Array.from(prod.tags).map((_tag, _idx) => (
            <div className="p-1 rounded-sm bg-slate-300" key={_idx}>
              {_tag}
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            window.open(
              `${window.location.href}${webKey ? `?webKey=${webKey}` : ""}`,
              "_blank"
            );
          }}
          className="mt-6 py-4 px-6 bg-blue-500 md:w-fit w-full rounded-md font-bold text-white shadow-md shadow-black hover:bg-blue-700 hover:shadow-none transition duration-200"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CardH;
