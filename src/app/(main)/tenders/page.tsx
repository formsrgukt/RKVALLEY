"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Tender } from "@/data/rguktData";
import { fetchTenders } from "@/lib/db/tenders";
import { useApp } from "@/context/AppContext";

export default function TendersPage() {
  const { openDocModal } = useApp();
  const [search, setSearch] = useState("");
  const [tendersData, setTendersData] = useState<Tender[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchTenders()
      .then(setTendersData)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const filtered = tendersData.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.refNo.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-view-container">
      <Breadcrumb title="Tenders & Procurement Portal" category="Tenders" />

      <div className="container">
        <div className="page-content-layout">
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">Explore Section</h4>
            <ul className="sidebar-nav-list">
              <li><Link href="/tenders" className="sidebar-link active">Active Tenders</Link></li>
              <li><Link href="/careers" className="sidebar-link">Careers & Recruitment</Link></li>
              <li><Link href="/about" className="sidebar-link">Institute Details</Link></li>
            </ul>
          </aside>

          <article className="page-main-body">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <h3>E-Procurement & Tender Notices</h3>
                <p style={{ color: "#475569" }}>
                  Official tenders invited for works, supplies, lab equipment, and institutional services at RGUKT RK Valley.
                </p>
              </div>

              <div style={{ width: "240px" }}>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Filter tenders..."
                  style={{ width: "100%", padding: "0.45rem 0.85rem", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "0.85rem" }}
                />
              </div>
            </div>

            <div style={{ overflowX: "auto" }}>
              <div className="table-responsive"><table className="gov-table">
                <thead>
                  <tr>
                    <th>Tender Ref No</th>
                    <th>Description of Work / Item</th>
                    <th>Category</th>
                    <th>Publish Date</th>
                    <th>Closing Date</th>
                    <th>EMD</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan={8} style={{ textAlign: "center", padding: "4rem", color: "#94a3b8" }}>
                        <svg viewBox="0 0 1105 1424" width="40" height="51" className="logo-loader">
                          <path d="M 129.50,22.00 Q 121.00,19.00 115.50,41.00 Q 110.00,63.00 115.00,115.50 Q 120.00,168.00 154.00,269.00 Q 188.00,370.00 239.00,453.50 Q 290.00,537.00 349.50,590.50 Q 409.00,644.00 313.00,718.50 Q 217.00,793.00 164.50,867.50 Q 112.00,942.00 72.50,1048.00 Q 33.00,1154.00 23.50,1224.50 Q 14.00,1295.00 17.00,1340.00 Q 20.00,1385.00 32.50,1375.00 Q 45.00,1365.00 95.50,1243.00 Q 146.00,1121.00 188.00,1059.00 Q 230.00,997.00 296.00,936.50 Q 362.00,876.00 420.50,851.00 Q 479.00,826.00 526.50,829.50 Q 574.00,833.00 645.00,870.00 Q 716.00,907.00 804.00,972.50 Q 892.00,1038.00 969.00,1121.00 Q 1046.00,1204.00 1055.00,1204.00 Q 1064.00,1204.00 1077.00,1175.00 Q 1090.00,1146.00 1080.00,1123.00 Q 1070.00,1100.00 965.00,978.00 Q 860.00,856.00 755.00,752.00 Q 650.00,648.00 741.50,590.00 Q 833.00,532.00 895.00,467.00 Q 957.00,402.00 1007.50,312.50 Q 1058.00,223.00 1070.00,182.50 Q 1082.00,142.00 1082.00,113.50 Q 1082.00,85.00 1070.00,86.50 Q 1058.00,88.00 991.50,184.50 Q 925.00,281.00 869.50,334.50 Q 814.00,388.00 749.00,421.00 Q 684.00,454.00 617.00,462.50 Q 550.00,471.00 488.50,454.00 Q 427.00,437.00 372.00,394.50 Q 317.00,352.00 274.00,294.50 Q 231.00,237.00 184.50,131.00 Q 138.00,25.00 129.50,22.00 Z M 549.50,171.00 Q 538.00,171.00 526.00,173.00 Q 514.00,175.00 506.50,177.50 Q 499.00,180.00 484.50,188.00 Q 470.00,196.00 459.00,206.00 Q 448.00,216.00 440.50,226.50 Q 433.00,237.00 427.50,249.50 Q 422.00,262.00 419.00,277.00 Q 416.00,292.00 416.00,303.00 Q 416.00,314.00 418.00,325.50 Q 420.00,337.00 426.50,352.50 Q 433.00,368.00 439.50,377.50 Q 446.00,387.00 454.50,395.50 Q 463.00,404.00 475.00,412.00 Q 487.00,420.00 498.00,424.50 Q 509.00,429.00 521.00,431.50 Q 533.00,434.00 547.50,434.00 Q 562.00,434.00 579.00,430.00 Q 596.00,426.00 608.00,420.00 Q 620.00,414.00 627.50,408.50 Q 635.00,403.00 644.50,393.00 Q 654.00,383.00 659.00,375.50 Q 664.00,368.00 670.50,352.50 Q 677.00,337.00 679.00,326.00 Q 681.00,315.00 681.00,302.00 Q 681.00,289.00 678.50,276.50 Q 676.00,264.00 671.50,252.50 Q 667.00,241.00 660.50,231.00 Q 654.00,221.00 643.00,210.00 Q 632.00,199.00 622.00,192.50 Q 612.00,186.00 601.50,181.50 Q 591.00,177.00 576.00,174.00 Q 561.00,171.00 549.50,171.00 Z" className="logo-outline"></path>
                          <path d="M 129.50,22.00 Q 121.00,19.00 115.50,41.00 Q 110.00,63.00 115.00,115.50 Q 120.00,168.00 154.00,269.00 Q 188.00,370.00 239.00,453.50 Q 290.00,537.00 349.50,590.50 Q 409.00,644.00 313.00,718.50 Q 217.00,793.00 164.50,867.50 Q 112.00,942.00 72.50,1048.00 Q 33.00,1154.00 23.50,1224.50 Q 14.00,1295.00 17.00,1340.00 Q 20.00,1385.00 32.50,1375.00 Q 45.00,1365.00 95.50,1243.00 Q 146.00,1121.00 188.00,1059.00 Q 230.00,997.00 296.00,936.50 Q 362.00,876.00 420.50,851.00 Q 479.00,826.00 526.50,829.50 Q 574.00,833.00 645.00,870.00 Q 716.00,907.00 804.00,972.50 Q 892.00,1038.00 969.00,1121.00 Q 1046.00,1204.00 1055.00,1204.00 Q 1064.00,1204.00 1077.00,1175.00 Q 1090.00,1146.00 1080.00,1123.00 Q 1070.00,1100.00 965.00,978.00 Q 860.00,856.00 755.00,752.00 Q 650.00,648.00 741.50,590.00 Q 833.00,532.00 895.00,467.00 Q 957.00,402.00 1007.50,312.50 Q 1058.00,223.00 1070.00,182.50 Q 1082.00,142.00 1082.00,113.50 Q 1082.00,85.00 1070.00,86.50 Q 1058.00,88.00 991.50,184.50 Q 925.00,281.00 869.50,334.50 Q 814.00,388.00 749.00,421.00 Q 684.00,454.00 617.00,462.50 Q 550.00,471.00 488.50,454.00 Q 427.00,437.00 372.00,394.50 Q 317.00,352.00 274.00,294.50 Q 231.00,237.00 184.50,131.00 Q 138.00,25.00 129.50,22.00 Z M 549.50,171.00 Q 538.00,171.00 526.00,173.00 Q 514.00,175.00 506.50,177.50 Q 499.00,180.00 484.50,188.00 Q 470.00,196.00 459.00,206.00 Q 448.00,216.00 440.50,226.50 Q 433.00,237.00 427.50,249.50 Q 422.00,262.00 419.00,277.00 Q 416.00,292.00 416.00,303.00 Q 416.00,314.00 418.00,325.50 Q 420.00,337.00 426.50,352.50 Q 433.00,368.00 439.50,377.50 Q 446.00,387.00 454.50,395.50 Q 463.00,404.00 475.00,412.00 Q 487.00,420.00 498.00,424.50 Q 509.00,429.00 521.00,431.50 Q 533.00,434.00 547.50,434.00 Q 562.00,434.00 579.00,430.00 Q 596.00,426.00 608.00,420.00 Q 620.00,414.00 627.50,408.50 Q 635.00,403.00 644.50,393.00 Q 654.00,383.00 659.00,375.50 Q 664.00,368.00 670.50,352.50 Q 677.00,337.00 679.00,326.00 Q 681.00,315.00 681.00,302.00 Q 681.00,289.00 678.50,276.50 Q 676.00,264.00 671.50,252.50 Q 667.00,241.00 660.50,231.00 Q 654.00,221.00 643.00,210.00 Q 632.00,199.00 622.00,192.50 Q 612.00,186.00 601.50,181.50 Q 591.00,177.00 576.00,174.00 Q 561.00,171.00 549.50,171.00 Z" className="logo-fill"></path>
                        </svg>
                        <p style={{ marginTop: "1rem" }}>Loading tenders...</p>
                      </td>
                    </tr>
                  ) : filtered.length === 0 ? (
                    <tr>
                      <td colSpan={8} style={{ textAlign: "center", padding: "2rem", color: "#94a3b8" }}>
                        No tenders found matching your query.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((t: Tender) => (
                      <tr key={t.id}>
                        <td><strong>{t.refNo}</strong></td>
                        <td style={{ maxWidth: "260px" }}>{t.title}</td>
                        <td><span className="badge-category">{t.category}</span></td>
                        <td>{t.publishDate}</td>
                        <td><strong style={{ color: "var(--status-crimson)" }}>{t.closingDate}</strong></td>
                        <td>{t.emd}</td>
                        <td><span className="table-badge-active">{t.status}</span></td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-primary"
                            style={{ padding: "0.3rem 0.6rem", fontSize: "0.75rem" }}
                            onClick={() => openDocModal(t.title, t.docUrl)}
                          >
                            PDF
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table></div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

