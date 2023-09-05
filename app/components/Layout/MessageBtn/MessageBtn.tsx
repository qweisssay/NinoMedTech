'use client'

import { useModalStore } from '@/app/store/useModalStore'
import style from './messagebtn.module.css'
import { Message } from '@/app/Icons/Message'

export function MessageBtn ( ) { 

    const setElement = useModalStore(state=>state.setElement)
    return (
        <button onClick={()=>setElement('Message')} className={style.btn}>
            <Message className={style.icon}/>
        </button>
    )
}