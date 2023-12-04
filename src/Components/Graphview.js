import React, { useState, useEffect } from "react";
import "./Graphview.css";
import "./flag.css";
import { MultiSelect } from "primereact/multiselect";
import LineDemo from "./Chart";

export default function Graphview() {
  const [selectedCities, setSelectedCities] = useState([]);

  const [keyHolder, setKeyHolder] = useState([]);

  const cities = [
    { name: "PPL -0.25%", code: "ppl-025" },
    { name: "PPL -0.50%", code: "ppl-050" },
    { name: "PPL -0.75%", code: "ppl-075" },
    { name: "PPL -1%", code: "ppl-1" },
    { name: "PPL -2%", code: "ppl-2" },
    { name: "PPL -5%", code: "ppl-5" },
    { name: "PPL -10%", code: "ppl-10" },
    { name: "PPL -20%", code: "ppl-20" },
    { name: "PPL +0.25%", code: "ppl+025" },
    { name: "PPL +0.50%", code: "ppl+050" },
    { name: "PPL +0.75%", code: "ppl+075" },
    { name: "PPL +1%", code: "ppl+1" },
    { name: "PPL +2%", code: "ppl+2" },
    { name: "PPL +5%", code: "ppl+5" },
    { name: "PPL +10%", code: "ppl+10" },
    { name: "PPL +20%", code: "ppl+20" },
  ];

  const handleSelectPPL = (e) => {
    setSelectedCities(e.value);
    let newArr = [];
    e.value.forEach((element) => {
      newArr.push(element.name);
    });
    
    setKeyHolder(newArr);

    console.log(keyHolder);
  };

  return (
    <>
      <div className="card flex justify-content-center">
        <MultiSelect
          value={selectedCities}
          onChange={handleSelectPPL}
          options={cities}
          optionLabel="name"
          filter
          placeholder="Select Cities"
          maxSelectedLabels={3}
          className="w-full md:w-20rem"
        />
      </div>

      <div>
        {selectedCities &&
          selectedCities.map((elm, index) => <div key={index}>{elm.name}</div>)}
      </div>
 <ul>
    {
        keyHolder.length > 0 ? keyHolder.map((item, i)=>{
            return (<li key={i}>{item}</li>)
            }) : null
    }
 </ul>

      <div>
        <LineDemo />
      </div>
    </>
  );
}
