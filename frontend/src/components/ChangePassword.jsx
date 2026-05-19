import { useState } from "react";
import axios from "axios";
import { useAuth } from "../store/authStore";

import {
  formCard,
  formTitle,
  labelClass,
  formGroup,
  inputClass,
  submitBtn
} from "../styles/common.js"

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  
  const user = useAuth((state) => state.currentUser);
  
  const email = user.email
  const role = user.role

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      return setMessage("New passwords do not match");
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await axios.put(`${BASE_URL}/common-api/change-password`, {
        email,
        role,
        currentPassword,
        newPassword,
      },{ withCredentials: true });
      console.log(res)

      setMessage(res.data.message);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={formCard}>
    
      <form onSubmit={handleSubmit} className={formGroup}>
        <h2 className={formTitle}>Change Password</h2>

        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
          className={inputClass}
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          className={inputClass}
        />

        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          required
          className={inputClass}
        />

        <button type="submit" disabled={loading} className={submitBtn}>
          {loading ? "Updating..." : "Change Password"}
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
  },
  form: {
    width: "320px",
    padding: "24px",
    borderRadius: "8px",
    background: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    cursor: "pointer",
  },
  message: {
    fontSize: "14px",
    color: "red",
  },
};

export default ChangePassword;