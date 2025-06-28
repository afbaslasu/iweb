import { useState } from "react";

const TestPage = () => {
  const [messages, SetMessages] = useState(['a', 'b', 'c']);

  function textMessage() {
    
    if (messages.length === 0) {
      return "You have no message in your inbox";
    } else if (messages.length === 1) {
      return "You have 1 new message in your inbox";
    } else {
      return `You have ${messages.length} messages in your inbox`;
    }
    
  }
  return <div>{textMessage()}</div>;
};

export default TestPage;
