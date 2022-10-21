import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import "./styles/api.module.css";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
const url =
  "https://developers-api-aizuwakamatsu-p-mylocal.jp/mgmt/trip/spotlist/v1";

const Top = () => {
  const [status, setStatus] = useState([]);
  const [detail, setDetail] = useState([]);

  // const [sum, setSum] = useState([]);
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
        console.log(res.data.spotList);
        //スポットリストのspotNameを配列に格納し、HTMLに表示(forとか使ってリスト表示する)
        // spotname summary
        // spotname summary
        // for (let i = 0; i < res.data.spotList.length; i++) {
        // const addStatus = () => {
        // let spotList = res.data.spotList

        setStatus(res.data.spotList.map((abc : any) => `${abc.spotName}`));
        // setSum(res.data.spotList.map((abc : any) =>
        //  abc.summary));
        setDetail(res.data.spotList.map((xyz : any) => `${xyz.spotId}`));
        // console.log(detail);
        console.log(status);
        console.log(detail);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <h2>観光システム・トップ</h2>

      <Button
        onClick={apiFunc}
        variant="contained"
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
        観光情報を取得する
      </Button>

      <Box
        sx={{
          p: 1,
          border: "1px dashed grey",
          width: 500,
          height: 300,
          m: 10,
          backgroundColor: "#DDDDDD",
        }}
      >
        <div>
          <ul className="css.api-ul">
            {status?.map((post) => (
              <li>
                <Link
                  to={`/detail?langCode=ja_JP&spotId=${detail}`}
                >
                  {post}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Box>
    </div>
  );
};

export default Top;
