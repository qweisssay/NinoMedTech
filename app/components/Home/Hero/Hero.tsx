import style from './hero.module.css'
import { Container } from '../../Container/Container'
import Link from 'next/link';
import Image from 'next/image';
import PIC from '@/public/PHOTO.png'
import { Slider } from '../../Slider/Slider';
import { getByParams } from '@/app/helpers/apiHandlers';
export async function Hero () {
    const res = await getByParams({skip:0,size:3})
    const CARDS = res.products
    return (
        <section className={style.hero}>
            
            
                <Container>
                    {CARDS ? <Slider items={CARDS}/>  : <div className={style.content}>
                        <h1 className={style.heading}>Заботимся о здоровье вашей клиники</h1>
                        <div className={style.description}>
                            
                        Мы - молодая и перспективная компания, специализирующаяся на медицинском оборудовании. Гарантируем высокое качество, быструю доставку и надежность. Предлагаем индивидуальные решения и низкие цены. Хотим быть вашим надежным партнером.
                        </div>
                        <Link className={style.link} href={'/aboutus'}>
                            Узнать подробнее
                        </Link>
                    </div>
                     }
                    
                </Container>

                   
            
            </section>
    )
}