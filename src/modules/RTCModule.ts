import { stunServerConfig } from "./StunServerConfig";

export const initLocalStream = async () => {
  try {
    return await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const initPeerConnection = async () => {
  try {
    return await new RTCPeerConnection(stunServerConfig);
  } catch (error) {
    console.log(error);
  }
};
