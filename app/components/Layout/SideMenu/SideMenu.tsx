
'use client'
import style from './sidemenu.module.css';

import { Menu } from "@/app/Icons/Menu/Menu";
import { Portal } from '../../Portal/Portal';
import { useState } from 'react';
import { useModalStore } from '@/app/store/useModalStore';
import Link from 'next/link';
import { iCategory } from '@/app/types/Product';
export function SideMenu ({categories}:{categories:iCategory[]}) {
    const element = useModalStore(state=>state.element);
    const setElement = useModalStore(state=>state.setElement);
    const handleClick = () => {
        if (element) { 
            setElement(null);
        }
        else setElement('Menu')
    }
    return (
        <div className={style.content}>
            <button className={element == 'Menu' ? style.active + ' '  + style.btn: style.btn} onClick={handleClick}>
                <Menu/>
            </button>
            {element == 'Menu'  &&
            <Portal className={style.blur}>
                <div className={style.container}>
                    <ul className={style.list}>
                        <li className={style.item} >
                                <Link className={style.link} href={`/catalog`}>Каталог</Link>
                            </li>
                        {categories.map(category => (
                            <li className={style.item} key={category.id}>
                                <Link className={style.link} href={`/catalog?category=${category.id}`}>{category.name}</Link>
                            </li>
                        ))}
                
                    </ul>
                </div>
                </Portal>}
        </div>
    )
}