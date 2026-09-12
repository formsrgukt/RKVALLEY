export interface Notice {
  id: string;
  title: string;
  category: "Admissions" | "Academic" | "Examinations" | "Recruitment" | "Tenders" | "Events" | string;
  date: string;
  urgent: boolean;
  tag: string;
  summary: string;
  pdfName: string;
  size: string;
}

export interface Tender {
  id: string;
  refNo: string;
  title: string;
  category: string;
  publishDate: string;
  closingDate: string;
  emd: string;
  status: "Active" | "Under Evaluation" | "Awarded" | string;
  docUrl: string;
}
