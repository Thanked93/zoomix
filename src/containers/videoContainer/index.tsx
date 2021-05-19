import React, { useEffect, useState } from "react";
import Video from "../../components/video";
import { initLocalStream } from "../../modules/RTCModule";

export const VideoContainer: React.FC = () => {
  const [peerConnection, setPeerConnection] = useState();
  //Mediastream will be passed  down to use.
  const [remoteMediaStream, setRemoteMediaStream] = useState<MediaStream | null>(null);
  const [localMediaStream, setLocalMediaStream] = useState<MediaStream | null>(null);

  return (
    <div>
      <LocalStream stream={localMediaStream} setStream={setLocalMediaStream} />
    </div>
  );
};

interface LocalStreamProps {
  stream: MediaStream | null;
  setStream: React.Dispatch<React.SetStateAction<MediaStream | null>>;
}

const LocalStream: React.FC<LocalStreamProps> = ({ stream, setStream }) => {
  // Check if localstream is active
  const activate = async () => {
    const streamPromise = await initLocalStream();
    if (streamPromise) {
      setStream(streamPromise);
    }
  };

  const disable = () => {
    setStream(null);
  };

  if (!stream) return <button onClick={activate}>Activate Camera</button>;

  return (
    <>
      <Video>
        <Video.Stream stream={stream} />
      </Video>
      <button onClick={disable}>deactivate Camera</button>
    </>
  );
};

export default VideoContainer;
