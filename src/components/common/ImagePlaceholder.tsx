import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  text?: string;
  aspectRatio?: '16:9' | '4:3' | '3:2' | '1:1';
  className?: string;
}

export function ImagePlaceholder({ 
  text = 'Image Placeholder', 
  aspectRatio = '16:9',
  className = ''
}: ImagePlaceholderProps) {
  
  // Aspect ratio classes
  const aspectClass = {
    '16:9': 'aspect-16-9',
    '4:3': 'aspect-4-3',
    '3:2': 'aspect-3-2',
    '1:1': 'aspect-1-1'
  }[aspectRatio];

  return (
    <div className={`image-placeholder ${aspectClass} ${className}`}>
      <div className="placeholder-content">
        <ImageIcon size={32} className="placeholder-icon" />
        <span className="placeholder-text">[{text}]</span>
      </div>
    </div>
  );
}
