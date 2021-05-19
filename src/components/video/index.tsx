import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Container, UserLabel, VideoDisplay } from "./styles";

interface ChildProps {
  children: ReactNode;
}

const Video = ({ children, ...restProps }: ChildProps) => {
  return <Container {...restProps}>{children}</Container>;
};

interface StreamProps {
  stream: MediaStream;
  muted?: boolean;
}

Video.Stream = function VideoStream({ stream, muted = false, ...restProps }: StreamProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (ref.current) ref.current.srcObject = stream;
    if (muted) setIsMuted(muted);
  }, [stream, muted]);

  return <VideoDisplay ref={ref} muted={isMuted} autoPlay {...restProps} />;
};

Video.UserLabel = function VideoUserLabel({ children, ...restProps }: ChildProps) {
  return <UserLabel {...restProps}>{children}</UserLabel>;
};
export default Video;
