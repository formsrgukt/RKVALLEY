import { db } from "../firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import { Tender } from "../../types";

const COLLECTION_NAME = "tenders";

export async function fetchTenders(): Promise<Tender[]> {
  const q = query(collection(db, COLLECTION_NAME), orderBy("publishDate", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Tender[];
}

export async function createTender(tender: Omit<Tender, "id">): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), tender);
  return docRef.id;
}

export async function deleteTender(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION_NAME, id));
}

export async function updateTender(id: string, data: Partial<Tender>): Promise<void> {
  await updateDoc(doc(db, COLLECTION_NAME, id), data);
}
