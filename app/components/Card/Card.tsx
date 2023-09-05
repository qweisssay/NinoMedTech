import Link from 'next/link';
import style from './card.module.css';
import Image from 'next/image';
import { currencyFormat } from '@/app/helpers/currencyFormat';
import { iCard } from '@/app/types/Product';
export function Card ({name,price,id,image}:iCard) { 
    return (
        <li  className={style.item} >
            <Link className={style.card} href={`/catalog/${id}`}>
            <Image className={style.img} width={150} height={150} src={image} alt={name}/>
                <h4 className={style.heading}>
                    {name}
                </h4>
                <p className={style.price}>
                   От <span className={style.link}>{currencyFormat(price)}</span>
                </p>
                
            </Link>
        </li>
    )
}