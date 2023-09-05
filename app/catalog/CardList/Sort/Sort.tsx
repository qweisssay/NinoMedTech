'use client'
import { useState } from 'react'
import style from './sort.module.css'
interface iSort { 
    name:string,
    value:string | null
}

export function Sort ({currentSort,setSort}:{currentSort:string | null,setSort:React.Dispatch<React.SetStateAction<string | null>>}) {

    const items = [
        {name:'По умолчанию',value:null},
        {name:'Цена по возрастанию',value:'price-asc'},
        {name:'Цена по убыванию',value:'price-desc'},
        {name:'По наименованию А-Я',value:'name-asc'},
        {name:'По наименованию Я-А',value:'name-desc'}
    ]
    
    const [isOpen,setIsOpen] = useState(false)
    return ( 
        <div className={style.sort}>
            <button className={style.itemBtn} onClick={()=>setIsOpen(!isOpen)}>{items.find(item=>item.value == currentSort)!.name}</button>
            <div className={isOpen ? style.itemsContainer + ' ' + style.open : style.itemsContainer}>
                <ul className={style.items}>
                    {items.map(item=>item.value != currentSort && (
                        <li className={style.item} key={item.value}>
                            <button className={style.itemBtn} onClick={()=>{setSort(item.value);}}>
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

