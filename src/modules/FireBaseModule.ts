import { db as database } from "../firebase";

interface LoginCallBack {
  (value: any, username: string): void;
}

export const doLogin = async (username: string, handleUpdate: LoginCallBack) => {
  await database.ref("/notifies/" + username).remove();

  database.ref("/notifies/" + username).on("value", (snapshot) => {
    snapshot.exists() && handleUpdate(snapshot.val(), username);
  });
};

export const doOffer = async (to: string, offer: any, username: string) => {
  await database.ref("/notifies/" + to).set({
    type: "offer",
    from: username,
    offer: JSON.stringify(offer),
  });
};

export const doAnswer = async (to: string, answer: any, username: string) => {
  await database.ref("/notifies/" + to).update({
    type: "answer",
    from: username,
    offer: JSON.stringify(answer),
  });
};

export const doCandidate = async (to: string, candidate: RTCIceCandidate, username: string) => {
  await database.ref("/notifies/" + to).update({
    type: "candidate",
    from: username,
    candidate: JSON.stringify(candidate),
  });
};
