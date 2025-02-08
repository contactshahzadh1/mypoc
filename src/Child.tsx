import React from "react";

interface ChildProps {
  message: string;
}

const Child: React.FC<ChildProps> = ({ message }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Received from Parent: {message}</p>
    </div>
  );
};

export default Child;
