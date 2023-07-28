import React, { useState } from "react";
import { HomeContainer, HomeImg } from "./Home.style";
import Header from "../../components/header/Header";

const Home = () => {
  const printType = ["all", "books", "magazines"];
  const [query, setQuery] = useState(0);
  const [selectedType, setSelectedType] = useState("all")
  return (
    <HomeContainer>
      <Header setQuery={setQuery} setSelectedType={selectedType}/>
      <HomeImg></HomeImg>
    </HomeContainer>
  );
};

export default Home;
