import React from "react";

export default function Background() {
  return (
    <div className="bg-gray-700">
      <div style={{ height: 50 }}>
        <button
          style={{ height: "inherit" }}
          className="bg-sky-500/100"
        ></button>
        <button
          style={{ height: "inherit" }}
          className="bg-sky-500/75"
        ></button>
        <button
          style={{ height: "inherit" }}
          className="bg-sky-500/50"
        ></button>
      </div>
    </div>
  );
}
