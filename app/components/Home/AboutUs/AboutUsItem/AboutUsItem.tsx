
import style from './aboutusitem.module.css'
import Image,{ StaticImageData } from 'next/image'


interface AboutUsItemProps { 
    title: string,
    icon: string | StaticImageData,
    desription: string
}

export function AboutUsItem ({title,icon,desription}:AboutUsItemProps) { 
    return (
        <div className={style.item}>
            <Image loading='lazy' className={style.icon} src={icon} alt={title}></Image>
            <div>
            
            <span className={style.description}>
            <span className={style.heading}>
                {title}
            </span> 
                {` ${desription}`}
            </span>
            </div>
        </div>
    )
}