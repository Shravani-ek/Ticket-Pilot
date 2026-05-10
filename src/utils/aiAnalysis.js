// Detect Tone

export const detectTone = (text) => {
  const msg = text.toLowerCase();

  const angryWords = ["angry", "worst", "bad", "not working", "issue", "error", "hate", "terrible"];
  const positiveWords = ["great", "good", "thank", "awesome", "love", "perfect"];

  if (angryWords.some(word => msg.includes(word))) {
    return "Angry";
  }

  if (positiveWords.some(word => msg.includes(word))) {
    return "Positive";
  }

  return "Neutral";
};


// Detect Urgency

export const detectUrgency = (text) => {
  const msg = text.toLowerCase();

  const highUrgency = ["urgent", "asap", "immediately", "not working", "failed"];
  const mediumUrgency = ["issue", "problem", "error", "slow"];

  if (highUrgency.some(word => msg.includes(word))) {
    return "High";
  }

  if (mediumUrgency.some(word => msg.includes(word))) {
    return "Medium";
  }

  return "Low";
};


// AI Suggested Reply

export const generateReply = (text) => {

  const msg = text.toLowerCase();

  if (msg.includes("login") || msg.includes("password")) {
    return "We’re sorry you're facing login issues. Please try resetting your password or clearing browser cache.";
  }

  if (msg.includes("payment") || msg.includes("transaction")) {
    return "We apologize for the payment issue. Our billing team is reviewing this problem.";
  }

  if (msg.includes("error") || msg.includes("bug") || msg.includes("not working")) {
    return "Thank you for reporting this issue. Our technical team is currently investigating it.";
  }

  return "Thank you for contacting support. Our team will get back to you shortly.";
};