import React, { useState } from "react";

const Temperature = () => {
  const [resultat, setResultat] = useState();
  const [Temperature, setTemperature] = useState();
  const handelSubmit = (e) => {
    e.preventDefault();
    const temp = parseFloat(e.target[0].value);
    console.log(temp);
    console.log(typeof temp);
    const F = temp * 1.8 + 32;
    setResultat(F);
  };
  return (
    <div>
      <div>
        <span className="ml-2">Fahrenheit</span>
        <div id="resultat" className="mb-4">
          {resultat}
        </div>
        <form
          onSubmit={handelSubmit}
          className="flex flex-col p-2 w-80 bg-blue-500 "
        >
          <label htmlFor=""> Temperature en °C </label>
          <input type="text" className=" p-1 mt-3 border-3 border-s-black " />
          <button type="submit" className="bg-green-500  mt-3 text-white ">
            Convertir
          </button>
        </form>
      </div>
    </div>
  );
};

export default Temperature;
