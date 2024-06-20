import React from "react";

export const Greetings = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  let greeting = "";
  if (currentHour < 12) {
    greeting = "Good Morning!";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  return <h1 className="text-4xl font-bold">{greeting}</h1>;
};

export default Greetings;
