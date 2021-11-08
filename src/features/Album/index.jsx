import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "V-Pop Tháng 11/2021",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/2/8/9/42894b0ec79a8eb0c46865edacb86d45.jpg",
    },
    {
      id: 2,
      name: "US-UK Tháng 11/2021",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/a/d/0/4ad043fd6a5ff457553e7b75708b66c6.jpg",
    },
    {
      id: 3,
      name: "K-Pop Tháng 11/2021",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/2/6/e/126e7cfe69f880d995858348d137e75c.jpg",
    },
  ];
  return (
    <div>
      <h3>Album</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
