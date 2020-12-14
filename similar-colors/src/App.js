import React from "react";
import DefaultSimilarColorsFinder from "./components/SimilarColorsFinder/DefaultSimilarColorsFinder";


export default function App() {
  return (
    <div>
      <h1>Similar Color Code Finder</h1>
      <h2>Enter any color code (eg. 56ae57) and press enter:</h2>
      <DefaultSimilarColorsFinder />
      
    </div>
  );
}
