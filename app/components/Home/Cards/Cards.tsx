import { Card } from '../../Card/Card';
import style from './cards.module.css'
import { Container } from '../../Container/Container'
import Link from 'next/link';
import { Heading } from '../../Heading/Heading';
import { getByParams } from '@/app/helpers/getProducts';



export async function Cards () {
    const res = await getByParams({skip:0,size:4})
    const CARDS = res.products
    return(
        <section className={style.catalog}>
            <Container>
                <div className={style.content}>
                    <Heading value='Каталог'/>
                    <ul className={style.list}>
                        {CARDS.map(item=>(
                            <Card description={item.description} key={item.id} name={item.name} id={item.id} price={item.price} image={item.image}/>
                        ))}
                    </ul>
                    <Link className={style.link} href={'/catalog'}>Перейти в каталог</Link>
                </div>
            </Container>
        </section>
    )
}