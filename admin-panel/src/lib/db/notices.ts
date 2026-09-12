import { db } from "../firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import { Notice } from "../../types";

const COLLECTION_NAME = "notices";

export async function fetchNotices(): Promise<Notice[]> {
  const q = query(collection(db, COLLECTION_NAME), orderBy("date", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Notice[];
}

export async function createNotice(notice: Omit<Notice, "id">): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), notice);
  return docRef.id;
}

export async function deleteNotice(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION_NAME, id));
}

export async function updateNotice(id: string, data: Partial<Notice>): Promise<void> {
  await updateDoc(doc(db, COLLECTION_NAME, id), data);
}
