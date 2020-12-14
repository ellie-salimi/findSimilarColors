import React, { useState } from "react";
import ColorConverter from "color-convert";
import euclidean from "compute-euclidean-distance";

import colorsData from "../../ColorsData/xkcd.json";

//Components
import SearchInput from "./SearchInput/SearchInput";
import ResultTable from "./ResultTable/ResultTable";

const DefaultSimilarColorsFinder = () => {
  //Hooks
  const [searchInput, setSearchInput] = useState("");
  const [rows, setRows] = useState([]);
  const [inputError, setInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //Helper Functions
  const calculateDistance = (inputHex, dataHex) => {
    const inputHexToRgb = ColorConverter.hex.rgb(inputHex);
    const dataHexToRgb = ColorConverter.hex.rgb(dataHex);
    return euclidean(inputHexToRgb, dataHexToRgb);
  };

  const generateSimilarColors = () => {
    colorsData.colors.sort(({ distance: a }, { distance: b }) => a - b);
    setRows(
      colorsData.colors.slice(0, 50).map((color) => {
        return {
          id: color.color,
          color: color.hex,
          name: color.color,
          hex: color.hex.toUpperCase(),
          rgb: ColorConverter.hex.rgb(color.hex).toString(),
          cymk: ColorConverter.hex.cmyk(color.hex).toString(),
          distance: color.distance
        };
      })
    );
  };

  //Actions
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // regex to find the pattern in the hex input
      const hexRegEx = new RegExp(/^[0-9A-F]{6}$/i);

      if (hexRegEx.test(searchInput)) {
        colorsData.colors.map((color) => {
          color.distance = calculateDistance(searchInput, color.hex);
          return {
            color
          };
        });
        generateSimilarColors();
        setInputError(false);
      } else if (searchInput === null || searchInput === "") {
        setInputError(true);
        setErrorMessage("Please enter a hex color code, e.g 56ae57");
        setRows([]);
      } else {
        setInputError(true);
        setErrorMessage("Something went wrong, please try again.");
        setRows([]);
      }
    }
  };

  return (
    <div>
      <SearchInput
        searchInput={searchInput}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
        inputError={inputError}
        errorMessage={errorMessage}
      />
      <ResultTable rows={rows} />
    </div>
  );
};

export default DefaultSimilarColorsFinder;
