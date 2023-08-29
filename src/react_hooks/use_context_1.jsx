import React from "react";
import { createContext } from "react";

export const UserContext = createContext("");
export const ChannelContext = createContext("");
const Use_context_1 = () => {
  return (
    <div>
      <UserContext.Provider value={"himanshu singh"}>
        <ChannelContext.Provider value={"CODE EVOLUTION"}>
          <ChildContext />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default Use_context_1;

export function ChildContext() {
  return (
    <>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return (
                  <>
                    <div>channel context {channel}</div>
                    <div>user context value{user}</div>
                  </>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </>
  );
}
