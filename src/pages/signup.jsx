import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, phoneNumber, email, password } = formData;

    if (fullName && phoneNumber && email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="relative w-full md:max-w-sm md:mx-auto h-screen bg-[#F7F8F9] rounded-md p-5">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 pt-8">
        Create your <br /> PopX account
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label
          htmlFor="fullname"
            className={`absolute left-4 px-1 bg-[#F7F8F9] text-[#6C25FF] transition-all
              ${
                focused === "fullName" || formData.fullName
                  ? "-top-2 text-xs font-medium"
                  : "top-3 text-sm"
              }`}
          >
            Full Name<span className="text-red-500"> *</span>
          </label>
          <input
          id="fullname"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onFocus={() => setFocused("fullName")}
            onBlur={() => setFocused("")}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            required
          />
        </div>

        <div className="relative">
          <label
          htmlFor="phno"
            className={`absolute left-4 px-1 bg-[#F7F8F9] text-[#6C25FF] transition-all
              ${
                focused === "phoneNumber" || formData.phoneNumber
                  ? "-top-2 text-xs font-medium"
                  : "top-3 text-sm"
              }`}
          >
            Phone number<span className="text-red-500"> *</span>
          </label>
          <input
          id="phno"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            onFocus={() => setFocused("phoneNumber")}
            onBlur={() => setFocused("")}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            required
          />
        </div>

        <div className="relative">
          <label
          htmlFor="email"
            className={`absolute left-4 px-1 bg-[#F7F8F9] text-[#6C25FF] transition-all
              ${
                focused === "email" || formData.email
                  ? "-top-2 text-xs font-medium"
                  : "top-3 text-sm"
              }`}
          >
            Email address<span className="text-red-500"> *</span>
          </label>
          <input
          id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused("")}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            required
          />
        </div>

        <div className="relative">
          <label
          htmlFor="password"
            className={`absolute left-4 px-1 bg-[#F7F8F9] text-[#6C25FF] transition-all
              ${
                focused === "password" || formData.password
                  ? "-top-2 text-xs font-medium"
                  : "top-3 text-sm"
              }`}
          >
            Password<span className="text-red-500"> *</span>
          </label>
          <input
          id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onFocus={() => setFocused("password")}
            onBlur={() => setFocused("")}
            autoComplete="new-password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            required
          />
        </div>

        <div className="relative">
          <label
          htmlFor="comp"
            className={`absolute left-4 px-1 bg-[#F7F8F9] text-[#6C25FF] transition-all
              ${
                focused === "companyName" || formData.companyName
                  ? "-top-2 text-xs font-medium"
                  : "top-3 text-sm"
              }`}
          >
            Company name
          </label>
          <input

          id="comp"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            onFocus={() => setFocused("companyName")}
            onBlur={() => setFocused("")}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Are you an Agency?<span className="text-red-500"> *</span>
          </label>

          <div className="flex gap-6">
            {["yes", "no"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isAgency"
                  value={val}
                  checked={formData.isAgency === val}
                  onChange={handleChange}
                  className="accent-[#6C25FF]"
                />
                <span className="text-sm text-gray-700">
                  {val.charAt(0).toUpperCase() + val.slice(1)}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="absolute bottom-8 left-5 right-5 bg-[#6C25FF] hover:bg-purple-700 text-white font-semibold rounded-md py-3 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
