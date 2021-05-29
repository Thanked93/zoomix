import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { useRtc } from "../../context/rtc";
import { createCall, answerCall } from "../../rtc";
import Video from "../video";

const LocalStream = () => {
  const { room } = useAuth();
  const { pc, localStream, initLocalStream } = useRtc();
  const [input, setInput] = useState("");

  useEffect(() => {}, [localStream]);

  if (!localStream) return <button onClick={initLocalStream}>init</button>;

  return (
    <>
      <Video>
        <Video.Stream stream={localStream!} />
      </Video>
      <label>{room.room}</label>
      <button onClick={() => createCall(pc, room.room)}>Create Call</button>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => answerCall(pc, input)}>Answer call</button>
    </>
  );
};

export default LocalStream;
