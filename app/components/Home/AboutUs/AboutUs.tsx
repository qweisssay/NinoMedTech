import Link from 'next/link'
import { AboutUsItem } from './AboutUsItem/AboutUsItem'
import style from './aboutus.module.css'
import { Container } from '../../Container/Container'
import money from '@/public/money.png'
import contract from '@/public/contract.png'
import shield from '@/public/shield.png'
import hands from '@/public/hands.png'

export function AboutUs () { 
    const AboutUsData = [
        {title: 'Лизинг',description:'Возможность приобретения в лизинг.',icon:money},
        {title: 'Гарантия',description:'На всё оборудование от 6 мес и более.',icon:contract},
        {title: 'Индивидуальные условия',description:'Персональный менеджер, а так же  возможность подменного оборудования',icon:shield},
        {title: 'Комплексное оборудование',description:'С учетом специфики, особенностей оказания конкретных видов медицинской помощи',icon:hands},
    ]
    return ( 
        <section className={style.aboutus}>
            <Container>
                <div className={style.content}>
                <div className={style.card}>
                        <h2 className={style.heading}>Заботимся о здоровье  <span className={style.description}>
                        вашей клиники
                        </span></h2>
                       
                    </div>
                    <ul className={style.list}>
                        {AboutUsData.map(item=>(
                            <AboutUsItem key={Math.random()} title={item.title} desription={item.description} icon={item.icon}/>
                        ))}
                    </ul>
                   
                </div>
            </Container>
        </section>
    )
}