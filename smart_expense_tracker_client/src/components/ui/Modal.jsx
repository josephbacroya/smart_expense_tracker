import React, { useEffect } from 'react';

export default function Modal({ visible = false, onClose = () => {}, children }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (visible) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md shadow-lg overflow-auto">
        <div className="p-6">
          {children}
        </div>
      </div>
      {/* Click outside area will close */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        className="sr-only"
      />
    </div>
  );
}
