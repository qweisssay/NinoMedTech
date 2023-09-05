import style from './categories.module.css';
import Link from 'next/link';
import { getCategories } from '@/app/helpers/getCategories';
import { Container } from '../../Container/Container';
export async function Categories () { 
    const res = await getCategories()
    const links = res.categories
    
    return ( 
       <section className={style.categories}>
       
        <ul className={style.list}>
                        {links.map(item=>(
                            <li className={style.item} key={Math.random()}>
                                <Link className={style.link} href={`/catalog?category=${item.id}`}>
                                    <Container>
                                    <span className={style.title}> {item.name}</span>
                                    <span className={style.count}> {item.count}</span>
                                    </Container>
                                    
                                </Link>
                            </li>
                        ))}
                   </ul> 
        
       </section> 
    )
}