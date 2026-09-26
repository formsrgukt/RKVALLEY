"use client";

import React, { useState, useEffect } from "react";
import { Notice } from "@/data/rguktData";
import { fetchNotices } from "@/lib/db/notices";
import { useApp } from "@/context/AppContext";

export default function ImportantNews() {
  const { openDocModal } = useApp();
  const [newsItems, setNewsItems] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchNotices()
      .then(data => {
        let urgentNotices = data.filter(n => n.category === "News");
        
        urgentNotices.sort((a, b) => {
          const aDate = new Date(a.date).getTime();
          const bDate = new Date(b.date).getTime();
          const now = Date.now();
          const aNew = !isNaN(aDate) && aDate > now - 3 * 24 * 60 * 60 * 1000;
          const bNew = !isNaN(bDate) && bDate > now - 3 * 24 * 60 * 60 * 1000;
          
          if (aNew && !bNew) return -1;
          if (!aNew && bNew) return 1;
          
          if (!isNaN(aDate) && !isNaN(bDate)) {
            return bDate - aDate;
          }
          return 0;
        });

        setNewsItems(urgentNotices.slice(0, 3));
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);
  
  if (isLoading) {
    return (
      <section aria-label="Important News" style={{ padding: "1.5rem 0", background: "var(--surface-bg, #f8fafc)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "center" }}>
          <svg viewBox="0 0 1105 1424" width="30" height="38" className="logo-loader">
            <path d="M 129.50,22.00 Q 121.00,19.00 115.50,41.00 Q 110.00,63.00 115.00,115.50 Q 120.00,168.00 154.00,269.00 Q 188.00,370.00 239.00,453.50 Q 290.00,537.00 349.50,590.50 Q 409.00,644.00 313.00,718.50 Q 217.00,793.00 164.50,867.50 Q 112.00,942.00 72.50,1048.00 Q 33.00,1154.00 23.50,1224.50 Q 14.00,1295.00 17.00,1340.00 Q 20.00,1385.00 32.50,1375.00 Q 45.00,1365.00 95.50,1243.00 Q 146.00,1121.00 188.00,1059.00 Q 230.00,997.00 296.00,936.50 Q 362.00,876.00 420.50,851.00 Q 479.00,826.00 526.50,829.50 Q 574.00,833.00 645.00,870.00 Q 716.00,907.00 804.00,972.50 Q 892.00,1038.00 969.00,1121.00 Q 1046.00,1204.00 1055.00,1204.00 Q 1064.00,1204.00 1077.00,1175.00 Q 1090.00,1146.00 1080.00,1123.00 Q 1070.00,1100.00 965.00,978.00 Q 860.00,856.00 755.00,752.00 Q 650.00,648.00 741.50,590.00 Q 833.00,532.00 895.00,467.00 Q 957.00,402.00 1007.50,312.50 Q 1058.00,223.00 1070.00,182.50 Q 1082.00,142.00 1082.00,113.50 Q 1082.00,85.00 1070.00,86.50 Q 1058.00,88.00 991.50,184.50 Q 925.00,281.00 869.50,334.50 Q 814.00,388.00 749.00,421.00 Q 684.00,454.00 617.00,462.50 Q 550.00,471.00 488.50,454.00 Q 427.00,437.00 372.00,394.50 Q 317.00,352.00 274.00,294.50 Q 231.00,237.00 184.50,131.00 Q 138.00,25.00 129.50,22.00 Z M 549.50,171.00 Q 538.00,171.00 526.00,173.00 Q 514.00,175.00 506.50,177.50 Q 499.00,180.00 484.50,188.00 Q 470.00,196.00 459.00,206.00 Q 448.00,216.00 440.50,226.50 Q 433.00,237.00 427.50,249.50 Q 422.00,262.00 419.00,277.00 Q 416.00,292.00 416.00,303.00 Q 416.00,314.00 418.00,325.50 Q 420.00,337.00 426.50,352.50 Q 433.00,368.00 439.50,377.50 Q 446.00,387.00 454.50,395.50 Q 463.00,404.00 475.00,412.00 Q 487.00,420.00 498.00,424.50 Q 509.00,429.00 521.00,431.50 Q 533.00,434.00 547.50,434.00 Q 562.00,434.00 579.00,430.00 Q 596.00,426.00 608.00,420.00 Q 620.00,414.00 627.50,408.50 Q 635.00,403.00 644.50,393.00 Q 654.00,383.00 659.00,375.50 Q 664.00,368.00 670.50,352.50 Q 677.00,337.00 679.00,326.00 Q 681.00,315.00 681.00,302.00 Q 681.00,289.00 678.50,276.50 Q 676.00,264.00 671.50,252.50 Q 667.00,241.00 660.50,231.00 Q 654.00,221.00 643.00,210.00 Q 632.00,199.00 622.00,192.50 Q 612.00,186.00 601.50,181.50 Q 591.00,177.00 576.00,174.00 Q 561.00,171.00 549.50,171.00 Z" className="logo-outline"></path>
            <path d="M 129.50,22.00 Q 121.00,19.00 115.50,41.00 Q 110.00,63.00 115.00,115.50 Q 120.00,168.00 154.00,269.00 Q 188.00,370.00 239.00,453.50 Q 290.00,537.00 349.50,590.50 Q 409.00,644.00 313.00,718.50 Q 217.00,793.00 164.50,867.50 Q 112.00,942.00 72.50,1048.00 Q 33.00,1154.00 23.50,1224.50 Q 14.00,1295.00 17.00,1340.00 Q 20.00,1385.00 32.50,1375.00 Q 45.00,1365.00 95.50,1243.00 Q 146.00,1121.00 188.00,1059.00 Q 230.00,997.00 296.00,936.50 Q 362.00,876.00 420.50,851.00 Q 479.00,826.00 526.50,829.50 Q 574.00,833.00 645.00,870.00 Q 716.00,907.00 804.00,972.50 Q 892.00,1038.00 969.00,1121.00 Q 1046.00,1204.00 1055.00,1204.00 Q 1064.00,1204.00 1077.00,1175.00 Q 1090.00,1146.00 1080.00,1123.00 Q 1070.00,1100.00 965.00,978.00 Q 860.00,856.00 755.00,752.00 Q 650.00,648.00 741.50,590.00 Q 833.00,532.00 895.00,467.00 Q 957.00,402.00 1007.50,312.50 Q 1058.00,223.00 1070.00,182.50 Q 1082.00,142.00 1082.00,113.50 Q 1082.00,85.00 1070.00,86.50 Q 1058.00,88.00 991.50,184.50 Q 925.00,281.00 869.50,334.50 Q 814.00,388.00 749.00,421.00 Q 684.00,454.00 617.00,462.50 Q 550.00,471.00 488.50,454.00 Q 427.00,437.00 372.00,394.50 Q 317.00,352.00 274.00,294.50 Q 231.00,237.00 184.50,131.00 Q 138.00,25.00 129.50,22.00 Z M 549.50,171.00 Q 538.00,171.00 526.00,173.00 Q 514.00,175.00 506.50,177.50 Q 499.00,180.00 484.50,188.00 Q 470.00,196.00 459.00,206.00 Q 448.00,216.00 440.50,226.50 Q 433.00,237.00 427.50,249.50 Q 422.00,262.00 419.00,277.00 Q 416.00,292.00 416.00,303.00 Q 416.00,314.00 418.00,325.50 Q 420.00,337.00 426.50,352.50 Q 433.00,368.00 439.50,377.50 Q 446.00,387.00 454.50,395.50 Q 463.00,404.00 475.00,412.00 Q 487.00,420.00 498.00,424.50 Q 509.00,429.00 521.00,431.50 Q 533.00,434.00 547.50,434.00 Q 562.00,434.00 579.00,430.00 Q 596.00,426.00 608.00,420.00 Q 620.00,414.00 627.50,408.50 Q 635.00,403.00 644.50,393.00 Q 654.00,383.00 659.00,375.50 Q 664.00,368.00 670.50,352.50 Q 677.00,337.00 679.00,326.00 Q 681.00,315.00 681.00,302.00 Q 681.00,289.00 678.50,276.50 Q 676.00,264.00 671.50,252.50 Q 667.00,241.00 660.50,231.00 Q 654.00,221.00 643.00,210.00 Q 632.00,199.00 622.00,192.50 Q 612.00,186.00 601.50,181.50 Q 591.00,177.00 576.00,174.00 Q 561.00,171.00 549.50,171.00 Z" className="logo-fill"></path>
          </svg>
        </div>
      </section>
    );
  }

  if (newsItems.length === 0) return null;

  return (
    <section aria-label="Important News" style={{ padding: "2rem 0", background: "var(--surface-bg, #f8fafc)" }}>
      <div className="container">
        
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1rem"
        }}>
          <span style={{ 
            background: "var(--primary-maroon)", 
            color: "white", 
            padding: "0.25rem 0.75rem", 
            borderRadius: "4px",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase"
          }}>
            Urgent
          </span>
          <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "var(--primary-maroon)" }}>Important News</h4>
        </div>

        <div style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          paddingTop: "1.5rem",
          paddingLeft: "1.5rem",
          marginTop: "-1.5rem",
          marginLeft: "-1.5rem",
          paddingBottom: "1.5rem",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none"
        }}>
          {newsItems.map((news) => {
            const newsDate = new Date(news.date).getTime();
            const isNew = !isNaN(newsDate) && newsDate > Date.now() - 3 * 24 * 60 * 60 * 1000;

            return (
              <div key={news.id} style={{
                position: "relative",
                flex: "0 0 300px",
                scrollSnapAlign: "start",
                background: "#ffffff",
                borderRadius: "8px",
                padding: "1rem 1.25rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                borderLeft: "3px solid var(--primary-maroon)",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
              }}>
                {isNew && <span className="badge-new">New</span>}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#64748b" }}>{news.date}</span>
                  </div>
                </div>
              
              <h5 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.3, color: "#0f172a" }}>
                {news.title}
              </h5>

              {news.pdfName && (
                <button 
                  onClick={() => openDocModal(news.pdfName || "", news.title)}
                  style={{
                    alignSelf: "flex-start",
                    background: "transparent",
                    border: "none",
                    color: "var(--primary-maroon)",
                    padding: "0",
                    marginTop: "0.25rem",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.textDecoration = "underline"}
                  onMouseOut={(e) => e.currentTarget.style.textDecoration = "none"}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  View PDF
                </button>
              )}
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
