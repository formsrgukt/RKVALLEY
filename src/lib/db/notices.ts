import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Notice } from "../../data/rguktData";

const COLLECTION_NAME = "notices";

export async function fetchNotices(): Promise<Notice[]> {
  const q = query(collection(db, COLLECTION_NAME), orderBy("date", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Notice[];
}
