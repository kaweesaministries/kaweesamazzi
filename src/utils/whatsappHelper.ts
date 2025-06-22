
export const WHATSAPP_NUMBER = "+256772477774";

export type MessageType = 
  | "general"
  | "sponsor" 
  | "volunteer"
  | "partner"
  | "event"
  | "donation"
  | "programs";

const messageTemplates: Record<MessageType, string> = {
  general: "Hello, I would like to get more information about Kaweesa Children's Ministry and your programs.",
  sponsor: "Hello, I would like to sponsor a child through Kaweesa Children's Ministry. Can you please provide me with more information about the sponsorship program?",
  volunteer: "Hello, I would like to join your team as a volunteer at Kaweesa Children's Ministry. Can you please tell me about the available volunteer opportunities?",
  partner: "Hello, I would like to become a partner with Kaweesa Children's Ministry. Can you please provide me with information about partnership opportunities?",
  event: "Hello, I would like to plan a fundraising event for Kaweesa Children's Ministry. Can you please guide me on how to organize an event to support your cause?",
  donation: "Hello, I would like to make a donation to support Kaweesa Children's Ministry. Can you please provide me with information about donation options?",
  programs: "Hello, I would like to learn more about the programs offered by Kaweesa Children's Ministry. Can you please share details about your current initiatives?"
};

export const redirectToWhatsApp = (messageType: MessageType, customMessage?: string) => {
  const message = customMessage || messageTemplates[messageType];
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export const getWhatsAppUrl = (messageType: MessageType, customMessage?: string) => {
  const message = customMessage || messageTemplates[messageType];
  return `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;
};
