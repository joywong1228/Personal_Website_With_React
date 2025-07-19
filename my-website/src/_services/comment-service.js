import { db } from "../_utils/firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const commentsCollection = collection(db, "comments");

// Fetch all comments ordered by timestamp
export const getComments = async () => {
  const q = query(commentsCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  let comments = [];
  snapshot.forEach((doc) => {
    comments.push({ id: doc.id, ...doc.data() });
  });
  return comments;
};

// Listen to real-time comment updates
export const listenComments = (callback) => {
  const q = query(commentsCollection, orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    let comments = [];
    snapshot.forEach((doc) => {
      comments.push({ id: doc.id, ...doc.data() });
    });
    callback(comments);
  });
};

// Add a new comment
export const addComment = async (comment) => {
  // comment: { name, email, text, createdAt: Timestamp }
  try {
    const docRef = await addDoc(commentsCollection, comment);
    return docRef.id;
  } catch (error) {
    console.error("Error adding comment: ", error);
    throw error;
  }
};
