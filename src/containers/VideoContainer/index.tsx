import React, { useEffect, useRef, useState } from "react";
import Video from "../../components/video";

interface VideoContainerProps {
  email?: string;
  stream: MediaStream;
  muted?: boolean;
}

const VideoContainer: React.FC<VideoContainerProps> = ({
  stream,
  email = "Anonymous User",
  muted = false,
}) => {
  return (
    <Video>
      <Video.Stream stream={stream} muted={muted} />
      <Video.UserLabel>{email}</Video.UserLabel>
    </Video>
  );
};

export default VideoContainer;
