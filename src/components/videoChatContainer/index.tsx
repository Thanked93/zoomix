import { connect } from "http2";
import React, { useEffect, useRef, useState } from "react";
import { doLogin } from "../../modules/FireBaseModule";
import { initiateLocalStream, inititateConnection } from "../../modules/WebrtcModule";

const VideoChatContainer = () => {
  const localRef = useRef<MediaStream | null>(null);
  const remoteRef = useRef<MediaStream | null>(null);
  const [stunConnection, setStunConnection] = useState<RTCPeerConnection | null>(null);

  useEffect(() => {
    async function initStream() {
      const stream = await initiateLocalStream();
      if (stream) localRef.current = stream;
      else console.log("Error no stream found.");

      const connection = await inititateConnection();
      if (connection) setStunConnection(connection);
    }

    initStream();
  }, []);

  const onLogin = async (username: string) => {
    // do the login
    await doLogin(username, handleUpdate);
  };

  const startCall = async (username: string, userToCall: string) => {
      //listen to events
    
      //create offer
  };

  const handleUpdate = (notif: any, username: string) => {
    if (notif) {
      switch (notif.type) {
        case "offer":
          break;
        case "answer":
          break;
        case "candidate":
          break;
        default:
          break;
      }
    }
  };

  return <div></div>;
};

export default VideoChatContainer;
