import React, { createContext, useContext } from "react";

const UserContext = createContext("");
const ChannelContext = createContext("");

const Use_context_2 = () => {
  return (
    <div>
      <UserContext.Provider value={"himanshu singh"}>
        <ChannelContext.Provider value={"code evolution"}>
          <ChildContext />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default Use_context_2;

export const ChildContext = () => {
  const userName = useContext(UserContext);
  const channelName = useContext(ChannelContext);
  return (
    <>
      <p>user context value {userName}</p>
      <p>channel context value {channelName}</p>
    </>
  );
};
