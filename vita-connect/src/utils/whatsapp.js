export const generateWhatsAppLink = (phone, message) => {
  const defaultMsg =
    "Hi! I found your profile on VitaConnect and I'd like to know more about your services.";
  const encodedMsg = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${phone}?text=${encodedMsg}`;
};