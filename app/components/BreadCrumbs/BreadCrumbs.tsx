import style from './breadcrumbs.module.css'
import Link from 'next/link'

interface BreadCrumb { 
    href?: string,
    text: string
}


export function BreadCrumbs ({crumbs}:{crumbs:BreadCrumb[]}) {
    
    return (
        <ul className={style.breadcrumbs} >
            <li className={style.item}>
                <Link href={''}>Главная</Link>
            </li>
            {crumbs.map(item=>item.href ? (
                <li className={style.item} key={item.text}>
                    <Link href={item.href}>{item.text}</Link>
                </li>
            ) : (
                <li className={style.item} key={item.text}>{item.text}</li>
            ))}
        </ul>
    )
}