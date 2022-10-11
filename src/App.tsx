import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import { DonutLarge } from "@mui/icons-material";

const url =
  "https://developers-api-aizuwakamatsu-p-mylocal.jp/mgmt/trip/spotlist/v1";

const App: React.FC = () => {
  const [status, setStatus] = useState([]);
  
  const apiFunc = () => {
    console.log("test");
    
    const req = url + "?langCode=ja_JP&sortType=1&pageNo=1";
    axios
      .get(req, {
        headers: {
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": "cd4c250ffb2046f59c3f2ab2e202178c",
        },
      })
      .then((res) => {
        // console.log(res.data.spotList);
        //スポットリストのspotNameを配列に格納し、HTMLに表示(forとか使ってリスト表示する)
        // spotname summary
        // spotname summary
        // for (let i = 0; i < res.data.spotList.length; i++) {
          // const addStatus = () => {
          let spotList = res.data.spotList
          setStatus(spotList.map(abc =>
          abc.spotName));
          
           console.log(status);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div>
      <Button
        onClick={apiFunc}
        variant="contained"
        sx={{
          backgroundColor: "red",
          "&:hover": {
            backgroundColor: "red",
          },
        }}
      >
        データを取得する
      </Button>

      <div>
        <ul>
          
          {
            status?.map(post => <li>{post}</li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default App;
