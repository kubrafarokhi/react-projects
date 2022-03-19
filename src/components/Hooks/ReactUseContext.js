import React, { useContext } from 'react'

const ComponentF = () =>{

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    
    return <>
        {user}
        {channel}
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

const ReactUseContext = () => {
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

export default ReactUseContext