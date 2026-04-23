import { useState, useEffect } from 'react';

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export default function Toast({ message, visible, onClose }: ToastProps) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    if (visible) {
      setHiding(false);
      const timer = setTimeout(() => {
        setHiding(true);
        setTimeout(onClose, 300);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className={`toast${hiding ? ' hiding' : ''}`}>
      <div className="toast-message">{message}</div>
    </div>
  );
}
