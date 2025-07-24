import React from "react";
import "../styles/PopupMessage.css";

const PopupMessage = ({ type, message, show }) => {
  if (!show) return null;
  return (
    <div className={`popup-message ${type}`}>
      {type === "success" ? (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#22c55e" />
          <path
            d="M7 13l3 3 7-7"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#ef4444" />
          <path
            d="M8 8l8 8M16 8l-8 8"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span>{message}</span>
    </div>
  );
};

export default PopupMessage;
