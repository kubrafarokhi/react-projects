import React from 'react';

const ComponentF = () =>{
  return <>
        <UserContext.Consumer>
          {    
            (user) =>{
              return (
                <ChannelContext.Consumer>
                    {
                      (channel) => {
                        return <div> React context is {user}{channel}</div>
                      }
                    }
                </ChannelContext.Consumer>
                )}
          }
        </UserContext.Consumer>
      </>
}
const ComponentE = () => {
  return <ComponentF/>
}
const ComponentC = () =>{
  return <ComponentE/>
}
const UserContext = React.createContext();
const ChannelContext = React.createContext();
const ReactContextOld = () => {
   
  return (
    <div>
      <UserContext.Provider>
        <ChannelContext.Provider>
          <ComponentC user={'Kubra'} channel={"sony"}/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default ReactContextOld