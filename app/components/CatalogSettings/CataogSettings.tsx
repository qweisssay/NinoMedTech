'use client'

import { iCategory, iBrand } from '@/app/types/Product'
import style from './catalogsettings.module.css'
import Link from 'next/link'
import { useState,useEffect } from 'react'
export function CatalogSettings ({categories,brands}:{categories:iCategory[],brands:iBrand[]}) {
    const [chosenCategory,setChosenCategory] = useState(0);
    const [chosenBrands,setChosenBrands] = useState<number[]>([]);
    const [params,setParams ]= useState<string[]>([])
    useEffect(()=>{
        chosenBrands.length > 0 ?  setParams(prev=>[...prev.filter(i=>!i.includes('brand')),`brand=${chosenBrands}`]) : setParams(prev=>prev.filter(i=>!i.includes('brand')));
        chosenCategory > 0 ?  setParams(prev=>[...prev.filter(i=>!i.includes('category')),`category=${chosenCategory}`]) : setParams(prev=>prev.filter(i=>!i.includes('category')));
    },[chosenBrands,chosenCategory])
    return (
        <div className={style.settings}>
            <div className={style.filter}>
                <div className={style.gorup}>
                    <h4>Категории</h4>
                    <ul className={style.list}>
                    {categories.map(
                        (item)=>(
                            <li className={style.item} key={item.id}>
                                     <Link href={`/catalog?category=${item.id}`} className={style.link}>
                                       {item.name}
                                    </Link>
                            </li>
                        )
                    )}
                    </ul>
                </div>
                
            </div>
            
            
        </div>
    )
}