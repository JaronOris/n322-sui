import React from "react";
import {} from "semantic-ui-react";
import homeStyle from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={homeStyle.background}>
        <div className={homeStyle.banner}>
          <div className={homeStyle.columnContent}>
            <h1 className={homeStyle.header}>PokePedia</h1>
            <p>Search for a pokemon and see it's entry!</p>
          </div>
        </div>
      </div>
    </>
  );
}
