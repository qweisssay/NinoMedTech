'use client'

import { useEffect, useRef, useState } from 'react'
import style from './search.module.css'
import Link from 'next/link'


export function Search () {
    

    const [searchValue,setSearchValue] = useState('')
    const searchRef = useRef<HTMLAnchorElement>(null)
    
    useEffect(()=>{
        const handleSearch = (search:string) => {
        if(searchValue.length > 0){
            console.log(search)
        }
        else {
            console.log(null)
        }
        
        
        
    }
        const timeout = setTimeout(()=>{
            handleSearch(searchValue)   
        },500)
        
        return ()=>{
            clearTimeout(timeout)
        }
    },[searchValue,])
    
    return (
        <>
            <form className={style.search } onSubmit={(e)=>{e.preventDefault();searchRef.current?.click()}} action="">
                <input className={style.input} placeholder='Найти' value={searchValue} onChange={(e)=>{setSearchValue(e.currentTarget.value)}} type="text" />
                <Link ref={searchRef}  className={ searchValue.length < 2 ? style.btn + ' ' + style.isDisabled : style.btn  } href={`/catalog?search=${searchValue}`}>найти</Link>
            </form>
        </>
    )
} 