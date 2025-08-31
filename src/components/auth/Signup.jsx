import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", address: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () => {
    const { name, email, password, address } = form;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}$/;

    if (name.length < 20 || name.length > 60) return "Name must be 20–60 characters.";
    if (address.length > 400) return "Address must be 400 characters or less.";
    if (!emailRegex.test(email)) return "Invalid email format.";
    if (!passwordRegex.test(password)) return "Password must be 8–16 chars, include 1 uppercase and 1 special character.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) return alert(error);
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/auth/signup", form);
      login("dummy_token", "USER"); // Replace with real token from backend
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Signup</h2>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        disabled={loading}
      >
        {loading ? "Signing up..." : "Signup"}
      </button>
    </form>
  );
};

export default Signup;
