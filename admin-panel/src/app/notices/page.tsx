"use client";

import React, { useState, useEffect } from "react";
import { Notice } from "../../types";
import { fetchNotices, createNotice, deleteNotice } from "../../lib/db/notices";
import Modal from "../../components/Modal";

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Notice>>({
    title: "", category: "Academic", date: new Date().toISOString().split('T')[0],
    urgent: false, tag: "", summary: "", pdfName: "", size: ""
  });

  useEffect(() => {
    loadNotices();
  }, []);

  const loadNotices = async () => {
    setIsLoading(true);
    try {
      const data = await fetchNotices();
      setNotices(data);
    } catch (err) {
      console.error("Failed to fetch notices:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this notice?")) {
      await deleteNotice(id);
      loadNotices();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.category && formData.date) {
      await createNotice(formData as Omit<Notice, "id">);
      setIsModalOpen(false);
      setFormData({ title: "", category: "Academic", date: new Date().toISOString().split('T')[0], urgent: false, tag: "", summary: "", pdfName: "", size: "" });
      loadNotices();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Manage Notices</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors font-medium"
        >
          + Add New Notice
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-slate-500">Loading notices...</div>
        ) : notices.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No notices found. Add one above.</div>
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
              {notices.map((notice) => (
                <tr key={notice.id} className="border-b border-slate-100 hover:bg-slate-50">
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
                      onClick={() => handleDelete(notice.id)}
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Notice">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input 
              required
              type="text" 
              className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none"
              value={formData.title} 
              onChange={e => setFormData({...formData, title: e.target.value})} 
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
              <select 
                className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none bg-white"
                value={formData.category} 
                onChange={e => setFormData({...formData, category: e.target.value})}
              >
                <option value="Academic">Academic</option>
                <option value="Admissions">Admissions</option>
                <option value="Examinations">Examinations</option>
                <option value="Events">Events</option>
                <option value="Recruitment">Recruitment</option>
                <option value="Tenders">Tenders</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
              <input 
                required
                type="date" 
                className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none"
                value={formData.date} 
                onChange={e => setFormData({...formData, date: e.target.value})} 
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tag (e.g. NEW, UPDATED)</label>
              <input 
                type="text" 
                className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none"
                value={formData.tag} 
                onChange={e => setFormData({...formData, tag: e.target.value})} 
              />
            </div>
            <div className="flex items-center h-full pt-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 text-red-800 border-slate-300 rounded focus:ring-red-800"
                  checked={formData.urgent} 
                  onChange={e => setFormData({...formData, urgent: e.target.checked})} 
                />
                <span className="text-sm font-medium text-slate-700">Mark as Urgent (Red highlight)</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Summary / Description</label>
            <textarea 
              className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none"
              rows={3}
              value={formData.summary} 
              onChange={e => setFormData({...formData, summary: e.target.value})} 
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">PDF File Name</label>
              <input 
                type="text" 
                placeholder="Notice_2026.pdf"
                className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none"
                value={formData.pdfName} 
                onChange={e => setFormData({...formData, pdfName: e.target.value})} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">PDF File Size</label>
              <input 
                type="text" 
                placeholder="2.4 MB"
                className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-red-800 outline-none"
                value={formData.size} 
                onChange={e => setFormData({...formData, size: e.target.value})} 
              />
            </div>
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
              Save Notice
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
