import React from 'react';
import { Info } from 'lucide-react';

interface NoticeBoxProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'info' | 'warning' | 'success';
  className?: string;
}

export function NoticeBox({ 
  title, 
  children, 
  variant = 'info',
  className = '' 
}: NoticeBoxProps) {
  return (
    <div className={`notice-box notice-${variant} ${className}`}>
      <div className="notice-icon">
        <Info size={24} />
      </div>
      <div className="notice-content">
        {title && <h4 className="notice-title">{title}</h4>}
        <div className="notice-text">{children}</div>
      </div>
    </div>
  );
}
