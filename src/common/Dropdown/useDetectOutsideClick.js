import React, { useEffect } from 'react'

export function useDetectOutsideClick(ref, handler) {

    useEffect(()=>{
        const listener = (event) =>{
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }
            handler(event)
        }
        document.addEventListener('mousedown',listener)
        document.addEventListener('click',listener)
        return ()=>{
            document.removeEventListener('mousedown',listener)
            document.removeEventListener('click',listener)
        }
    },[ref,handler])
}
