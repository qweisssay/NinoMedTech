'use client'
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';

interface iModal { 
    children:React.ReactNode,
    isOpen: boolean,
    onClose: ()=>void
}
export function Modal ({children,onClose,isOpen}:iModal) { 
    const ModalRef = useRef<HTMLDivElement>(null);
    const [isModalOpen,setIsModalOpen]= useState(false);
    useEffect(()=>{
        setIsModalOpen(true)
    },[])

    useEffect(()=>{
        const handleClick = (e:MouseEvent) =>{
            if(e.target instanceof Node && !ModalRef.current?.contains(e.target) ){onClose()}
          }
        if(isModalOpen) {
            
              document.addEventListener('click',handleClick);
              return ()=>{
                document.removeEventListener('click',handleClick);
              }
        }
      },[isModalOpen,onClose]);
    return ReactDOM.createPortal((
        <div ref={ModalRef} className={styles.modal}>
            {children}
        </div>
    ),document.getElementById('portal')!)
}