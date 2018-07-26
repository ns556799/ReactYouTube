import React from "react";
import VideoListItem from "./videoListItem";

const VideoList = props => {
  const VideoItem = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
      />
    );
  });

  return <ul className="col-md-4 list-group">{VideoItem}</ul>;
};
export default VideoList;
