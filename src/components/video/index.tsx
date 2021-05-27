import React, { ReactNode, useEffect, useRef, useState } from "react";
import { CloseButton, Row, CloseWrapper, Container, UserLabel, VideoButton, VideoDisplay } from "./styles";

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

interface VideoButtonProps extends ChildProps {
  func(): void;
}

Video.Row = ({ children, ...restProps }: ChildProps) => {
  return <Row {...restProps}>{children}</Row>;
};

Video.Button = ({ children, func, ...restProps }: VideoButtonProps) => {
  return (
    <VideoButton onClick={func} {...restProps}>
      {children}
    </VideoButton>
  );
};

interface CloseProps {
  func(): void;
}

Video.Close = ({ func, ...restProps }: CloseProps) => {
  return (
    <CloseWrapper {...restProps}>
      <CloseButton onClick={func}>X</CloseButton>
    </CloseWrapper>
  );
};

export default Video;
