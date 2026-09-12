import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Tender } from "../../data/rguktData";

const COLLECTION_NAME = "tenders";

export async function fetchTenders(): Promise<Tender[]> {
  const q = query(collection(db, COLLECTION_NAME), orderBy("publishDate", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Tender[];
}
