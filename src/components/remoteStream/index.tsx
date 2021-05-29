import React, { useEffect } from "react";
import { useRtc } from "../../context/rtc";
import Video from "../video";

const RemoteStream = () => {
  const { pc, remoteStream } = useRtc();

  useEffect(() => {
    console.log("here in remote stream");
  }, [remoteStream]);

  if (!remoteStream) return null;

  pc.ontrack = (e) => {
    e.streams[0].getTracks().forEach((track) => {
      remoteStream.forEach((stream) => stream.addTrack(track));
    });
  };

  return (
    <>
      {remoteStream.forEach((stream) => {
        return (
          <Video>
            <Video.Stream stream={stream!} />
          </Video>
        );
      })}
    </>
  );
};

export default RemoteStream;
