import React from "react";

export default function Paragraph({ children, className }) {
  return (
    <>
      <p className={`${className}`}>{children}</p>
    </>
  );
}
