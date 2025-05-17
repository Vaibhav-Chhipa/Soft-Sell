import React, { useState } from "react";

const LICENSE_TYPES = [
  "Microsoft Office",
  "Adobe Creative Cloud",
  "AutoCAD",
  "Other",
];

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const err = {};
    if (!data.name.trim()) err.name = "Name required";
    if (!data.email.trim()) err.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(data.email)) err.email = "Invalid email";
    if (!data.company.trim()) err.company = "Company required";
    if (!data.licenseType) err.licenseType = "Select license type";
    if (!data.message.trim()) err.message = "Message required";
    return err;
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setData({ name: "", email: "", company: "", licenseType: "", message: "" });
      setErrors({});
      setTimeout(() => setSubmitted(false), 4000);
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <section className="max-w-5xl mt-12 mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
        Contact Us
      </h2>

      {submitted && (
        <p className="mb-6 p-4 bg-blue-100 text-blue-900 rounded text-center font-medium">
          Thanks for reaching out! We'll get back to you soon.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column Inputs */}
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-gray-800 dark:text-gray-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={data.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-gray-800 dark:text-gray-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block mb-2 font-medium text-gray-800 dark:text-gray-200">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={data.company}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                errors.company ? "border-red-500" : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
            />
            {errors.company && (
              <p className="text-red-600 text-sm mt-1">{errors.company}</p>
            )}
          </div>

          <div>
            <label htmlFor="licenseType" className="block mb-2 font-medium text-gray-800 dark:text-gray-200">
              License Type
            </label>
            <select
              id="licenseType"
              name="licenseType"
              value={data.licenseType}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                errors.licenseType ? "border-red-500" : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
            >
              <option value="">Select license</option>
              {LICENSE_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.licenseType && (
              <p className="text-red-600 text-sm mt-1">{errors.licenseType}</p>
            )}
          </div>
        </div>

        {/* Full width Message textarea */}
        <div className="mt-6">
          <label htmlFor="message" className="block mb-2 font-medium text-gray-800 dark:text-gray-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={data.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none ${
              errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"
            } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
          ></textarea>
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-8 w-full md:w-auto px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition transform active:scale-95"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
