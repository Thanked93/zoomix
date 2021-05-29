import firebase from "firebase";

export interface Room {
  room: string;
  password: string;
}

export interface Friend {
  email: string;
}

export interface IAuthContext {
  currentUser: firebase.User | null;
  room: Room;
  friends: Array<Friend>;
}
