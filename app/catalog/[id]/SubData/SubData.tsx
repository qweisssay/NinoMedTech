'use client'

import { iBrand } from '@/app/types/Product';
import style from './subdata.module.css';
import { useState } from 'react';


interface SubDataProps {
    country: string
    year: number
    validity?: number | null
    aprobation?: boolean | null
    brand: iBrand | null

}
export function SubData ({ country,year,validity,aprobation,brand }:SubDataProps ) {
    const [isOpen,setIsOpen] = useState(false) 
    return ( 
        <div className={style.subData}>
            <button className={style.btn} onClick={()=>setIsOpen(!isOpen)}>Доп.информация</button>
            <div className={isOpen ? style.itemsContainer + ' ' + style.open : style.itemsContainer}>
                <ul className={style.items}>
                    <li className={style.item}>
                        <p>Страна</p>
                        <p>{country}</p>
                    </li>
                    <li className={style.item}>
                        <p>Год выпуска</p>
                        <p>{year}</p>
                    </li>
                    <li className={style.item}>
                        <p>Срок Поставки</p>
                        <p>{validity == 0 ? 'В наличии' : validity}</p>
                    </li>
                    <li className={style.item}>
                        <p>Апробация</p>
                        <p>{aprobation ? 'Да' : 'Нет'}</p>
                    </li>
                    {brand && (
                        <li className={style.item}>
                        <p>Производитель</p>
                        <p>{brand.name}</p>
                    </li>
                    )}
                </ul>
            </div>
            
        </div>
    )
}