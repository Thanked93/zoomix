import { config } from "../context/peerConnection/config";
import { doCandidate } from "./FireBaseModule";
export const initiateLocalStream = async () => {
  try {
    return await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
  } catch (error) {
    console.log(error);
  }
};

export const inititateConnection = async () => {
  try {
    // Connectiong to google stun server
    const connection = new RTCPeerConnection(config);
    return connection;
  } catch (err) {
    console.log(err);
  }
};

export const listenToConnectionEvents = (
  conn: RTCPeerConnection,
  username: string,
  remoteUsername: string,
  remoteVideoRef: React.MutableRefObject;
) => {
    //listern to ice candidates
  conn.onicecandidate = function (event) {
    if (event.candidate) {
      doCandidate(remoteUsername, event.candidate, username);
    }
  };
  // when a remote user adds stream to the peeer we have to display
  conn.ontrack = function(event){
      let video = remoteVideoRef.current;
    if(video !== null){
        if(video.srcObject !== event.streams[0])
    }
        
    }
      video.srcObject = 
  }
};
