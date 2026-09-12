"use client";

import React, { useState, useEffect } from "react";
import { Tender } from "../../types";
import { fetchTenders, createTender, deleteTender } from "../../lib/db/tenders";
import Modal from "../../components/Modal";

export default function TendersPage() {
  const [tenders, setTenders] = useState<Tender[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Tender>>({
    refNo: "", title: "", category: "Equipment", 
    publishDate: new Date().toISOString().split('T')[0],
    closingDate: "", emd: "", status: "Active", docUrl: ""
  });

  useEffect(() => {
    loadTenders();
  }, []);

  const loadTenders = async () => {
    setIsLoading(true);
    try {
      const data = await fetchTenders();
      setTenders(data);
    } catch (err) {
      console.error("Failed to fetch tenders:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this tender?")) {
      await deleteTender(id);
      loadTenders();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.refNo && formData.title && formData.status) {
      await createTender(formData as Omit<Tender, "id">);
      setIsModalOpen(false);
      setFormData({ refNo: "", title: "", category: "Equipment", publishDate: new Date().toISOString().split('T')[0], closingDate: "", emd: "", status: "Active", docUrl: "" });
      loadTenders();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Manage Tenders</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors font-medium"
        >
          + Add New Tender
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-slate-500">Loading tenders...</div>
        ) : tenders.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No tenders found. Add one above.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                <th className="p-4 font-semibold text-sm">Ref No</th>
                <th className="p-4 font-semibold text-sm">Title</th>
                <th className="p-4 font-semibold text-sm">Closing Date</th>
                <th className="p-4 font-semibold text-sm">Status</th>
                <th className="p-4 font-semibold text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tenders.map((tender) => (
                <tr key={tender.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 text-sm font-medium text-slate-900">{tender.refNo}</td>
                  <td className="p-4 text-sm text-slate-700">{tender.title}</td>
                  <td className="p-4 text-sm text-slate-600 whitespace-nowrap">{tender.closingDate || "N/A"}</td>
                  <td className="p-4 text-sm">
                    <span className={"px-2 py-1 rounded-full text-xs font-bold " + (
                      tender.status === 'Active' ? 'bg-green-100 text-green-700' :
                      tender.status === 'Under Evaluation' ? 'bg-amber-100 text-amber-700' :
                      'bg-slate-100 text-slate-600'
                    )}>
                      {tender.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => handleDelete(tender.id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Tender">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Reference No</label>
              <input 
                required
                type="text" 
                placeholder="RGUKT/RKV/..."
                className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none"
                value={formData.refNo} 
                onChange={e => setFormData({...formData, refNo: e.target.value})} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
              <select 
                className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none bg-white"
                value={formData.status} 
                onChange={e => setFormData({...formData, status: e.target.value})}
              >
                <option value="Active">Active</option>
                <option value="Under Evaluation">Under Evaluation</option>
                <option value="Awarded">Awarded</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tender Title</label>
            <textarea 
              required
              rows={2}
              className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none"
              value={formData.title} 
              onChange={e => setFormData({...formData, title: e.target.value})} 
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Publish Date</label>
              <input 
                required
                type="date" 
                className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none"
                value={formData.publishDate} 
                onChange={e => setFormData({...formData, publishDate: e.target.value})} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Closing Date</label>
              <input 
                type="date" 
                className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none"
                value={formData.closingDate} 
                onChange={e => setFormData({...formData, closingDate: e.target.value})} 
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
              <input 
                type="text" 
                placeholder="Equipment, Services, etc."
                className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none"
                value={formData.category} 
                onChange={e => setFormData({...formData, category: e.target.value})} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">EMD Details</label>
              <input 
                type="text" 
                placeholder="₹ 50,000"
                className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none"
                value={formData.emd} 
                onChange={e => setFormData({...formData, emd: e.target.value})} 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Document Name / URL</label>
            <input 
              type="text" 
              placeholder="Tender_Doc.pdf"
              className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none"
              value={formData.docUrl} 
              onChange={e => setFormData({...formData, docUrl: e.target.value})} 
            />
          </div>
          
          <div className="pt-4 flex justify-end gap-3">
            <button 
              type="button" 
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-900 font-medium"
            >
              Save Tender
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
