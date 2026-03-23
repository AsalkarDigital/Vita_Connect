import React from 'react';
import { generateWhatsAppLink } from '../../utils/whatsapp';

const WhatsAppButton = ({
  phone,
  message,
  size = 'md',
  fullWidth = false,
  label = 'Chat on WhatsApp',
  className = '',
}) => {
  const sizeClasses = { sm: 'btn-sm', md: '', lg: 'btn-lg' };

  return (
    <a
      href={generateWhatsAppLink(phone, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-whatsapp btn-animate ${sizeClasses[size]} ${fullWidth ? 'w-100' : ''} ${className}`}
      aria-label="Contact via WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
      {label}
    </a>
  );
};

export default React.memo(WhatsAppButton);