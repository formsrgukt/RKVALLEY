"use client";

import React, { useState, useEffect } from "react";
import { Notice } from "../../types";
import { fetchNotices, createNotice, deleteNotice } from "../../lib/db/notices";
import Modal from "../../components/Modal";

export default function NewsPage() {
  const [news, setNews] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [isDeletingAction, setIsDeletingAction] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState<Partial<Notice>>({
    title: "", category: "News", date: new Date().toISOString().split('T')[0],
    urgent: false, tag: "", summary: "", pdfName: "", size: ""
  });

  useEffect(() => {
    loadNotices();
  }, []);

  const showSuccess = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const loadNotices = async () => {
    setIsLoading(true);
    try {
      const data = await fetchNotices();
      setNews(data.filter(n => n.category === "News"));
    } catch (err) {
      console.error("Failed to fetch notices:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const promptDelete = (id: string) => {
    setItemToDelete(id);
  };

  const confirmDelete = async () => {
    if (itemToDelete) {
      setIsDeletingAction(true);
      setDeletingId(itemToDelete);
      await deleteNotice(itemToDelete);
      showSuccess("News deleted successfully!");
      await loadNotices();
      setItemToDelete(null);
      setIsDeletingAction(false);
      setDeletingId(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.category && formData.date) {
      await createNotice(formData as Omit<Notice, "id">);
      setIsModalOpen(false);
      setFormData({ title: "", category: "News", date: new Date().toISOString().split('T')[0], urgent: false, tag: "", summary: "", pdfName: "", size: "" });
      showSuccess("News published successfully!");
      loadNotices();
    }
  };

  return (
    <div className="relative">
      {successMessage && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-[100] animate-slide-up">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <span className="font-semibold text-lg">{successMessage}</span>
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Manage News</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors font-medium"
        >
          + Add New News
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-slate-500">Loading notices...</div>
        ) : news.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No news found. Add one above.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                <th className="p-4 font-semibold text-sm">Date</th>
                <th className="p-4 font-semibold text-sm">Title</th>
                <th className="p-4 font-semibold text-sm">Category</th>
                <th className="p-4 font-semibold text-sm">Urgent</th>
                <th className="p-4 font-semibold text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {news.map((notice) => (
                <tr key={notice.id} className={`border-b border-slate-100 hover:bg-slate-50 transition-all duration-300 ${deletingId === notice.id ? 'opacity-0 scale-95' : 'opacity-100'}`}>
                  <td className="p-4 text-sm text-slate-600 whitespace-nowrap">{notice.date}</td>
                  <td className="p-4 text-sm font-medium text-slate-900">{notice.title}</td>
                  <td className="p-4 text-sm text-slate-600">
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs">{notice.category}</span>
                  </td>
                  <td className="p-4 text-sm">
                    {notice.urgent ? <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">Yes</span> : <span className="text-slate-400 text-xs">No</span>}
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => promptDelete(notice.id)}
                      disabled={deletingId === notice.id}
                      className="text-red-600 hover:text-red-800 hover:bg-red-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1.5"
                    >
                      {deletingId === notice.id ? (
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                      )}
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New News">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Title</label>
            <input 
              required
              type="text" 
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-sm outline-none shadow-sm"
              value={formData.title} 
              onChange={e => setFormData({...formData, title: e.target.value})} 
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Category</label>
              <select 
                disabled
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-100 text-slate-500 cursor-not-allowed outline-none shadow-sm appearance-none"
                value={formData.category} 
              >
                <option value="News">News</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Date</label>
              <input 
                required
                type="date" 
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-sm outline-none shadow-sm"
                value={formData.date} 
                onChange={e => setFormData({...formData, date: e.target.value})} 
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tag (e.g. NEW, UPDATED)</label>
              <input 
                type="text" 
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-sm outline-none shadow-sm"
                value={formData.tag} 
                onChange={e => setFormData({...formData, tag: e.target.value})} 
              />
            </div>
            <div className="flex items-center h-full pt-7">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-500 focus:ring-2 transition-all cursor-pointer"
                  checked={formData.urgent} 
                  onChange={e => setFormData({...formData, urgent: e.target.checked})} 
                />
                <span className="text-sm font-semibold text-slate-700">Mark as Urgent (Red highlight)</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Summary / Description</label>
            <textarea 
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-sm outline-none shadow-sm resize-none"
              rows={3}
              value={formData.summary} 
              onChange={e => setFormData({...formData, summary: e.target.value})} 
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">PDF File Name</label>
              <input 
                type="text" 
                placeholder="News_2026.pdf"
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-sm outline-none shadow-sm"
                value={formData.pdfName} 
                onChange={e => setFormData({...formData, pdfName: e.target.value})} 
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">PDF File Size</label>
              <input 
                type="text" 
                placeholder="2.4 MB"
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-sm outline-none shadow-sm"
                value={formData.size} 
                onChange={e => setFormData({...formData, size: e.target.value})} 
              />
            </div>
          </div>
          
          <div className="pt-6 flex justify-end gap-3 border-t border-slate-100">
            <button 
              type="button" 
              onClick={() => setIsModalOpen(false)}
              className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 hover:border-slate-300 font-semibold transition-all shadow-sm"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-5 py-2.5 bg-red-700 text-white rounded-xl hover:bg-red-800 font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Save News
            </button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={!!itemToDelete} onClose={() => setItemToDelete(null)} title="Confirm Deletion">
        <div className="space-y-4">
          <p className="text-slate-600">Are you sure you want to delete this news item? This action cannot be undone.</p>
          <div className="pt-4 flex justify-end gap-3">
            <button 
              onClick={() => setItemToDelete(null)}
              className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={confirmDelete}
              disabled={isDeletingAction}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition-colors shadow-sm flex items-center gap-2"
            >
              {isDeletingAction ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Deleting...
                </>
              ) : (
                "Yes, Delete"
              )}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
