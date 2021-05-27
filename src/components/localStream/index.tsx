import React, { useEffect, useState } from "react";
import { createCall } from "typescript";
import { useRtc } from "../../context/rtc";
import Video from "../video";

const LocalStream = () => {
  const { localStream, initLocalStream, callId, answerCall, createCall } = useRtc();
  const [input, setInput] = useState("");

  console.log("RENDER");

  useEffect(() => {}, [localStream]);

  if (!localStream) {
    return <button onClick={initLocalStream}>Init my Stream</button>;
  }

  return (
    <>
      <Video>
        <Video.Stream stream={localStream!} />
      </Video>
      <label>{callId}</label>
      <button onClick={createCall}>Create Call</button>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => answerCall(input)}>Answer call</button>
    </>
  );
};

export default LocalStream;
