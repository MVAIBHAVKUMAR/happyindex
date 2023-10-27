import React from "react";

interface Props {
  message: string;
}

const Details = ({ message }: Props) => {
  return (
    <>
      <div className="answer-section">
        <p>{message}</p>
      </div>
    </>
  )
};

export default Details;
