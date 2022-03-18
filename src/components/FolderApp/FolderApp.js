import React, { useState } from 'react'

const FolderApp = ({explorer}) => {
    const [expand, setExpand] = useState(false);

  if(explorer.isFolder){
      return (
        <div>
            <div onClick={()=>setExpand(!expand)} >
                {explorer.name}
            </div>
            <div style={{display: expand ? 'block': 'none', paddingLeft: 20}}>
                {
                    explorer?.items.map((exp)=>{
                        return <FolderApp explorer={exp}/>
                    })
                }
            </div>
        </div>
      ) 
  }else{
      return (
          <div>{explorer.name}</div>
      )
  }
}

export default FolderApp