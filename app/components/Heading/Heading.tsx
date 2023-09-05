import style from './heading.module.css';



export function Heading ({value}:{value:string}) {
    
    return (
        <h2 className={style.heading}>
            {value}
        </h2>
    )

}