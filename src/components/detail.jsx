import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import Box from "@mui/material/Box";
import "./styles/api.module.css";
import useLocationChange from "./useLocationChange"

const Details = () => {
  const [val, setVal] = useState("");
    const param = window.location.search;
    const get =
    `https://developers-api-aizuwakamatsu-p-mylocal.jp/mgmt/trip/spotdetail/v1${param}`;
   
    console.log(param);
    axios
    .get(get, {
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "cd4c250ffb2046f59c3f2ab2e202178c",
      },
    })
    .then((rea) => {
      console.log(rea.data);
      setVal(rea.data);
    })
    .catch((err) => {
      console.log("err", err);
    });
  
  
  
  
  useEffect(() => {});
  return (
    <div>
      <h2>観光システム・詳細</h2>

      <Button
        variant="contained"
        href="/top"
        sx={{
          color: "#444444",
          backgroundColor: "#EEEEEE",
          "&:hover": {
            backgroundColor: "#DDDDDD",
          },
          mt: -3,
          ml: 10,
          mb: -10,
        }}
      >
        topに戻る
      </Button>
     

      <Box
        sx={{
          p: 1,
          border: "1px dashed grey",
          width: 500,
          height: 500,
          m: 10,
          backgroundColor: "#DDDDDD",
        }}
      >
        <div>
          <ul className="css.api-ul">
            <li>
              {val.spotName}
              <br></br>
              <br></br>
              住所　:　{val.address}
              <br></br>
              <br></br>
              営業時間　:　{val.businessHours}
              <br></br>
              <br></br>
              定休日　:　{val.regularHoliday}
              <br></br>
              <br></br>
              詳細　:　{val.detail}
            </li>
          </ul>
        </div>
      </Box>
    </div>
  );
};
export default Details;
