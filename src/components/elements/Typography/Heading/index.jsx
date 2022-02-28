import React from "react";

export default function Heading({ variants = "h2", className, children }) {
  return (
    <>
      {variants === "h1" ? (
        <h1
          className={`text-3xl lg:text-5xl pb-3 font-Medieval text-white outlineText font-bold ${className}`}
        >
          {children}
        </h1>
      ) : variants === "h2" ? (
        <h2
          className={`text-2xl lg:text-4xl pb-3 font-Medieval text-white outlineText font-bold ${className}`}
        >
          {children}
        </h2>
      ) : variants === "h4" ? (
        <h4
          className={`text-lg lg:text-xl pb-3 font-Medieval text-white outlineText ${className}`}
        >
          {children}
        </h4>
      ) : variants === "h5" ? (
        <h5
          className={`text-lg lg:text-xl pb-3 font-Sanchez text-white outlineText ${className}`}
        >
          {children}
        </h5>
      ) : (
        ""
      )}
    </>
  );
}
