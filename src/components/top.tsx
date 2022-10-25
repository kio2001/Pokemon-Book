import React, { useState,useEffect} from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import "./styles/api.module.css";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
const url =
  "https://developers-api-aizuwakamatsu-p-mylocal.jp/mgmt/trip/spotlist/v1";

const Top = () => {
  const [status, setStatus] = useState<string[]>([]);


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
        // res.data.spotlist.map((item: any) => {
        //   setStatus([...status, item.status]);
        // });
        let datas = new Array();
        res.data.spotList.forEach((spot: any) => {
          datas.push(spot);
        });
        setStatus(datas);
      })
      .catch((err) => {
        console.log("err", err);
      });
     
  };
  useEffect(() => {
    console.log("useEffect", status);
  }, [status]);

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
          {status?.map((post: any) => (
              <li>
                <Link to={`/detail?langCode=ja_JP&spotId=${post.spotId}`}>
                  {post.spotName}
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
