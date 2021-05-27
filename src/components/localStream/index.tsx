import React, { useEffect, useState } from "react";
import { useRtc } from "../../context/rtc";
import Video from "../video";

const LocalStream = () => {
  const { localStream, callId, answerCall, createCall } = useRtc();
  const [input, setInput] = useState("");

  useEffect(() => {}, [localStream]);

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
