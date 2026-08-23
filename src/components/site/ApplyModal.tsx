import { useState } from "react";
import { X, User, Mail, Phone, MapPin, Calendar, GraduationCap, AlertCircle } from "lucide-react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    student_name: "",
    father_name: "",
    mother_name: "",
    dob: "",
    gender: "",
    class_admission: "",
    academic_year: "",
    address: "",
    phone: "",
    email: "",
    previous_school: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/apply.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("Application submitted successfully! We will contact you soon.");
        setFormData({
          student_name: "",
          father_name: "",
          mother_name: "",
          dob: "",
          gender: "",
          class_admission: "",
          academic_year: "",
          address: "",
          phone: "",
          email: "",
          previous_school: "",
        });
      } else {
        setError(data.message || "Application failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="w-full max-w-2xl rounded-lg bg-card p-6 shadow-card my-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-green-deep">Apply for Admission</h2>
          <button
            onClick={onClose}
            className="rounded-sm p-2 text-green-deep transition hover:bg-accent"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {error && (
          <div className="mb-4 flex items-center gap-2 rounded-sm bg-red-50 p-3 text-red-600">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-4 rounded-sm bg-green-50 p-3 text-green-600">
            <span className="text-sm font-semibold">{success}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-semibold text-green-deep">
                Student Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="student_name"
                  value={formData.student_name}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-border px-10 py-2.5 text-sm focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
                  placeholder="Enter student name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-green-deep">
                Father's Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="father_name"
                  value={formData.father_name}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-border px-10 py-2.5 text-sm focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
                  placeholder="Enter father's name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-green-deep">
                Mother's Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="mother_name"
                  value={formData.mother_name}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-border px-10 py-2.5 text-sm focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
                  placeholder="Enter mother's name"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-green-deep">
                Date of Birth *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-border px-10 py-2.5 text-sm focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-green-deep">
                Gender *
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full rounded-sm border border-border px-4 py-2.5 text-sm focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-green-deep">
                Class for Admission *
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <select
                  name="class_admission"
                  value={formData.class_admission}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-border px-10 py-2.5 text-sm focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
                  required
                >
                  <option value="">Select Class</option>
                  <option value="Nursery">Nursery</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 5">Class 5</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-green-deep">
                Academic Year
              </label>
              <input
                type="text"
                name="academic_year"
                value={formData.academic_year}
                onChange={handleChange}
                className="w-full rounded-sm border border-border px-4 py-2.5 text-sm focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
                placeholder="e.g., 2024-25"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-green-deep">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-border px-10 py-2.5 text-sm focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
                  placeholder="10 digit number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-green-deep">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-border px-10 py-2.5 text-sm focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
                  placeholder="Enter email address"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-green-deep">
                Previous School
              </label>
              <input
                type="text"
                name="previous_school"
                value={formData.previous_school}
                onChange={handleChange}
                className="w-full rounded-sm border border-border px-4 py-2.5 text-sm focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
                placeholder="Enter previous school name"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-green-deep">
              Address *
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-sm border border-border px-10 py-2.5 text-sm focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
                placeholder="Enter complete address"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-sm bg-green-gradient px-4 py-3 font-bold text-secondary-foreground transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
