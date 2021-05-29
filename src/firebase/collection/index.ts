import firebase from "firebase";
import { db } from "../../firebase";

interface UserData {
  room: string;
  friends: [];
  password: string;
}

export const getUserData = async (user: firebase.User) => {
  try {
    const roomsRef = db.collection("rooms");
    const query = await roomsRef.where("email", "==", user.email).get();
    // Create and return new User
    if (query.empty) {
      const newUser = roomsRef.doc();
      await newUser.set({
        email: user.email,
        password: "",
        friends: [],
      });
      return {
        room: newUser.id,
        password: "",
        friends: [],
      };
    }
    // return existing user
    const doc = query.docs[0];
    const data = doc.data();
    return {
      room: doc.id,
      friends: data.friends,
      password: data.password,
    };
  } catch (err) {
    console.log(err);
    return {
      room: "",
      friends: [],
      password: "",
    };
  }
};
