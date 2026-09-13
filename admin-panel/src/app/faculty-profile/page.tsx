"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function FacultyProfilePage() {
  const { user, role } = useAuth();
  
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    qualification: "",
    almaMater: "",
    specialization: "",
    email: "",
    phone: "",
    cabin: "",
    experience: "",
    publicationsCount: 0,
    patentsCount: 0,
    officeHours: "",
    bio: "",
    educationDetails: "",
    teachingExperience: "",
    researchExperience: "",
    booksPublished: "",
    journalPapers: "",
    conferencePapers: "",
    workshopsAttended: "",
    refresherCourses: "",
    scholarshipsAwards: "",
    administrativePositions: "",
    committeeMemberships: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    async function loadProfile() {
      if (!user || !user.email) {
        setLoading(false);
        return;
      }
      try {
        const docRef = doc(db, "facultyProfiles", user.email.toLowerCase());
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormData({
            ...formData,
            ...data
          } as typeof formData);
        } else {
          // Initialize with default if it doesn't exist
          setFormData((prev) => ({ ...prev, email: user.email || "" }));
        }
      } catch (err) {
        console.error("Failed to load profile:", err);
      } finally {
        setLoading(false);
      }
    }
    loadProfile();
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: parseInt(value) || 0 }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !user.email) return;
    
    setSaving(true);
    setMessage({ type: "", text: "" });
    try {
      await setDoc(doc(db, "facultyProfiles", user.email.toLowerCase()), formData, { merge: true });
      setMessage({ type: "success", text: "Profile updated successfully!" });
    } catch (err) {
      console.error("Failed to update profile:", err);
      setMessage({ type: "error", text: "Failed to update profile. Please try again." });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Loading profile...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">My Faculty Profile</h1>
        <p className="text-slate-500 mt-2">Update your public profile details that will appear on the RGUKT RK Valley website.</p>
      </div>

      {message.text && (
        <div className={`p-4 mb-6 rounded-md ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-8 space-y-6">
          <h2 className="text-xl font-semibold text-slate-800 border-b pb-2">Basic Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Designation</label>
              <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g. Assistant Professor" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" name="email" value={formData.email} disabled className="w-full px-4 py-2 border border-slate-300 bg-slate-50 rounded-lg text-slate-500 cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-slate-800 border-b pb-2 pt-4">Academic Background</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Qualification (Short)</label>
              <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g. Ph.D., M.Tech" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Alma Mater (University)</label>
              <input type="text" name="almaMater" value={formData.almaMater} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g. IIT Madras" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Specialization & Research Areas (Short)</label>
              <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g. Machine Learning, NLP" />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-slate-800 border-b pb-2 pt-4">Institute Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Total Experience</label>
              <input type="text" name="experience" value={formData.experience} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g. 10 Years" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Cabin / Office Location</label>
              <input type="text" name="cabin" value={formData.cabin} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g. Room 204, Academic Block 1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Total Publications (Number)</label>
              <input type="number" name="publicationsCount" value={formData.publicationsCount} onChange={handleNumberChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Total Patents (Number)</label>
              <input type="number" name="patentsCount" value={formData.patentsCount} onChange={handleNumberChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Office / Consultation Hours</label>
              <input type="text" name="officeHours" value={formData.officeHours} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g. Mon-Fri, 4:00 PM - 5:00 PM" />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-slate-800 border-b pb-2 pt-4">Detailed Profile</h2>
          <p className="text-sm text-slate-500 mb-4">Enter each item on a new line. It will automatically be formatted as a bulleted list on your profile page.</p>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Brief Biography (Paragraph)</label>
            <textarea name="bio" value={formData.bio} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="A short 2-3 sentence overview of your career..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Educational Details (One per line)</label>
              <textarea name="educationDetails" value={formData.educationDetails} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ph.D. from ...&#10;M.Tech from ..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Teaching Experience (One per line)</label>
              <textarea name="teachingExperience" value={formData.teachingExperience} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Faculty at RGUKT since 2009..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Research Experience & Areas (One per line)</label>
              <textarea name="researchExperience" value={formData.researchExperience} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Plant Systematics&#10;Biodiversity" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Administrative Positions (One per line)</label>
              <textarea name="administrativePositions" value={formData.administrativePositions} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Head of Department...&#10;Warden..." />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-slate-800 border-b pb-2 pt-4">Publications & Research</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Books Published (One per line)</label>
              <textarea name="booksPublished" value={formData.booksPublished} onChange={handleChange} rows={3} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Journal Papers Published (One per line)</label>
              <textarea name="journalPapers" value={formData.journalPapers} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Conference/Seminar Papers (One per line)</label>
              <textarea name="conferencePapers" value={formData.conferencePapers} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-slate-800 border-b pb-2 pt-4">Events & Awards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Workshops/Conferences Attended (One per line)</label>
              <textarea name="workshopsAttended" value={formData.workshopsAttended} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Refresher Courses / FDPs (One per line)</label>
              <textarea name="refresherCourses" value={formData.refresherCourses} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Scholarships, Awards & Achievements (One per line)</label>
              <textarea name="scholarshipsAwards" value={formData.scholarshipsAwards} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Committee Memberships (One per line)</label>
              <textarea name="committeeMemberships" value={formData.committeeMemberships} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
        </div>

        <div className="px-8 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {saving ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Saving...
              </>
            ) : "Save Profile"}
          </button>
        </div>
      </form>
    </div>
  );
}
