import { useState } from "react";
import axios from "axios";
import { useAuth } from "../store/authStore";
import { secondaryBtn, inputClass } from "../styles/common.js";
import toast from "react-hot-toast";

function AddComment({ articleId, onCommentAdded }) {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const currentUser = useAuth((s) => s.currentUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment.trim()) return;

    try {
      setError("");

      const res = await axios.put(
        `${BASE_URL}/user-api/articles/${articleId}/comment`,
        { comment },
        { withCredentials: true }
      );

      onCommentAdded(res.data.payload?.comments || res.data.payload);
      setComment("");
    } catch (err) {
      const status = err.response?.status;
      const msg = err.response?.data?.message;

      if (status === 403) {
        setError("Only USERS are allowed to comment on articles.");
      } else if (status === 404) {
        setError("Article not found.");
      } else {
        setError(msg || "Failed to post comment. Try again.");
      }

      console.log("COMMENT ERROR:", err.response?.data);
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            setError("");
          }}
          placeholder="Write a comment..."
          className={inputClass}
        />

        <button type="submit" className={secondaryBtn}>
          Post
        </button>
      </form>

      {error && (
        <p className="text-red-500 mt-2 text-sm font-medium">{error}</p>
      )}
    </div>
  );
}

export default AddComment;
