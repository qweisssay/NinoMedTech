'use client'
import style from './portal.module.css'
import { useModalStore } from '@/app/store/useModalStore';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';




export function Portal ({className,children}:{className:string,children:React.ReactNode}) { 
    
    const wrapper = document.getElementById('portal');
    
    
    return createPortal((
        
            <div className={className}>
                {children}
            </div>
        
        
    ),wrapper!) 

    
}