import React, { useState } from "react";
import { HomeContainer, HomeImg, MainContainer } from "./Home.style";
import Header from "../../components/header/Header";
import axios from "axios";
import homeimg from "../../assets/books.jpg";
import Card from "../../components/card/Card";

const Home = () => {
  const printType = ["all", "books", "magazines"];
  const [query, setQuery] = useState(0);
  const [selectType, setSelectType] = useState("all");
  const [myData, setMyData] = useState([]);

  const APP_KEY = process.env.REACT_APP_apiKey;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${APP_KEY}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);

      setMyData(data.items);
    } catch (error) {}
  };

  return (
    <HomeContainer>
      <Header
        setQuery={setQuery}
        setSelectedType={selectType}
        getData={getData}
      />

      {!myData.length ? (
        <HomeImg>
          <img src={homeimg} alt="home img " />
        </HomeImg>
      ) : (
        <MainContainer wrap="wrap" >
      {
      myData.map((item)=> <Card key={item.id} item={item}/>)
      }  
        </MainContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
