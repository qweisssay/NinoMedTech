'use client'

import { iBrand,iCategory } from '@/app/types/Product';
import style from './filter.module.css'
import {useState,useEffect} from 'react'
import { LargeNumberLike } from 'crypto';
import { getBrands } from '@/app/helpers/getBrands';
import { getCategories } from '@/app/helpers/getCategories';

type iFilter = {
    setChosenBrands:(brand:string) => void,
    setChosenCategories:(category:number) => void
}


export function Filter ({setChosenBrands,setChosenCategories}:iFilter)  {
    const [brands,setBrands] = useState<iBrand[]>([]);
    const [categories,setCategories] = useState<iCategory[]>([]);
    useEffect(()=>{
        getBrands().then(res=>setBrands(res.brands));
        getCategories().then(res=>setCategories(res.categories)); 
    },[])
    const [isOpen,setIsOpen] = useState(false);
    const [IsCategoryOpen,setIsCategoryOpen] = useState(false);
    const [IsBrandsOpen,setIsBrandsOpen] = useState(false);
    return ( 
        <div className={style.filter}>
            <button className={style.itemBtn} onClick={()=>{setIsOpen(!isOpen);console.log(isOpen)}}>Фильтровать</button>
            <div className={isOpen ? style.itemsContainer + ' ' + style.open : style.itemsContainer}>
                <div className={style.buttons}>
                <button className={style.itemBtn} onClick={()=>setIsCategoryOpen(!IsCategoryOpen)}>Категории</button>
                <div className={IsCategoryOpen ? style.itemsContainer + ' ' + style.open : style.itemsContainer}>
                    <ul className={style.items}>
                    <li className={style.item}  onClick={()=>setChosenCategories(0)}>Всё</li>
                        {categories.map((item)=>(
                                <li className={style.item} key={item.id} onClick={()=>setChosenCategories(item.id)}>{item.name}</li>
                            ))}
                    </ul>
                </div>
                <button className={style.itemBtn} onClick={()=>setIsBrandsOpen(!IsBrandsOpen)}>Бренды</button>
                <div className={IsBrandsOpen ? style.itemsContainer + ' ' + style.open : style.itemsContainer}>
                    <ul className={style.items}>
                        {brands.map((item)=>(
                            <li className={style.item} key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>   
                </div>
            </div>
            
            
            
        </div>
    )
}