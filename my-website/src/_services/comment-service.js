import { db } from "../_utils/firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";

const commentsCollection = collection(db, "comments");

export const getComments = async () => {
  const q = query(commentsCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  let comments = [];
  snapshot.forEach((doc) => {
    comments.push({ id: doc.id, ...doc.data() });
  });
  return comments;
};

export const listenComments = (callback) => {
  const q = query(commentsCollection, orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    let comments = [];
    snapshot.forEach((doc) => {
      comments.push({ id: doc.id, ...doc.data() });
    });
    console.log("Fetched comments from snapshot:", comments);
    callback(comments);
  });
};

export const addComment = async (comment) => {
  try {
    const docRef = await addDoc(commentsCollection, comment);
    return docRef.id;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};
