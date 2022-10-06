import axios from "axios";
import React from "react";



const URL = "https://developers-api-aizuwakamatsu-p-mylocal.jp/mgmt/trip/spotdetail/v1?langCode=ja_JP&spotId=1";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(URL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
