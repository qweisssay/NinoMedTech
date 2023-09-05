'use client'

import style from './messageform.module.css'
import { Portal } from '../Portal/Portal'

import { useModalStore } from '@/app/store/useModalStore'
import { useBasketStore } from '@/app/store/useBasketStore'
import { sendMessage } from '@/app/helpers/sendMessage'
import { useEffect, useRef, useState } from 'react'
import { Container } from '../Container/Container'
import { Heading } from '../Heading/Heading'
import { validateEmail,validateName } from '@/app/helpers/validation'



export function MessageForm ( ) {
    const products = useBasketStore(state=>state.products)
    const element = useModalStore(state=>state.element)
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const product= useModalStore(state=>state.name)
    const [message,setMessage] = useState('');
    const setElement = useModalStore(state=>state.setElement);
    const containerRef = useRef<HTMLFormElement>(null);


    const [nameError,setNameError] = useState('');
    const [emailError,setEmailError] = useState('');


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setEmailError(validateEmail(email))
        setNameError(validateName(name))
       
        if (emailError.length > 0&& nameError.length > 0) return;
        sendMessage({
            email:email,
            name: name,
            message: message,
            products: [`${product}`]
            
        })
    }
    useEffect(()=>{
        const handleClick = (e:Event)=>{
             if(e.target instanceof Node && !containerRef.current?.contains(e.target) && element != null) {
                setElement(null)
                console.log(e.target)
            };
        }
        if (element == 'Message'){ document.addEventListener('click',handleClick)}
         return ()=>{
            document.removeEventListener('click',handleClick);
          }
      
    },[containerRef.current,element])

    return (
       <>
            {element == 'Message' && 
            <Portal className={style.blur}>
                <Container >
                    
                    <form ref={containerRef}  onSubmit={handleSubmit} className={style.form} >
                        <div className={style.item}>
                            <label className={style.label} htmlFor="email">Электронная почта</label>
                            <input className={style.input} id='email' value={email} onChange={(e)=>{ setEmail(e.currentTarget.value) }} type="text"/>
                            {nameError.length > 0 && <div className={style.error}>{nameError}</div>}
                        </div>
                        <div className={style.item}>
                            <label className={style.label} htmlFor="name">Название вашей компании/ ваше имя</label>
                            <input className={style.input} id='name' value={name} onChange={(e)=>{setName(e.currentTarget.value)}} type="text"/>
                            {emailError.length > 0 && <div className={style.error}>{emailError}</div>}   
                        </div>
                        <div className={style.item}>
                            <label className={style.label} htmlFor="message">Ваше сообщение</label>
                            <input className={style.input} id='message' value={message} onChange={(e)=>{setMessage(e.currentTarget.value)}} type="text"/>    
                        </div>
                        
                        <button className={style.button}>Отправить</button>
                </form>
                </Container>
                </Portal>}
       </>
    )
}