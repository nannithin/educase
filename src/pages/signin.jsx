import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="relative w-full md:max-w-sm md:mx-auto h-screen bg-[#F7F8F9] rounded-md p-5">
      <div className="py-8 space-y-3">
        <h1 className="text-3xl font-bold text-gray-900">
          Create your <br /> PopX account
        </h1>
        <p className="text-xl text-gray-600 font-medium">
          Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label
          htmlFor="email"
            className={`absolute left-4 px-1 bg-[#F7F8F9] text-[#6C25FF] transition-all duration-200 pointer-events-none
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
            className={`absolute left-4 px-1 bg-[#F7F8F9] text-[#6C25FF] transition-all duration-200 pointer-events-none
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

        <button
          type="submit"
          disabled={!formData.email || !formData.password}
          className={`w-full py-3 rounded-md font-semibold text-white transition
            ${
              formData.email && formData.password
                ? "bg-[#6C25FF] hover:bg-purple-700"
                : "bg-[#CBCBCB] cursor-not-allowed"
            }`}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;
