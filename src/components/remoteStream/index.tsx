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
      remoteStream!.addTrack(track);
    });
  };

  return (
    <Video>
      <Video.Stream stream={remoteStream!} />
    </Video>
  );
};

export default RemoteStream;
