import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/");
      // alert("sigin in again!")
    }
  },[username, secret, router]);

  if (!showChat) return <div />;

  return (
    <div className= ""
    >
    
     {/* "background" */}
      {/* <div className="shadow"> */}
        <ChatEngine
          // height="calc(100vh - 200px)"
          height = "95vh"
          
          projectID="85cebbcd-28d4-4703-ab03-7a9d77ce9f4b"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      {/* </div> */}
    </div>
  );
}