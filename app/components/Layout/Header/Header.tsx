
import style from './header.module.css'
import Link from 'next/link'
import Logo from '@/app/Icons/Logo/Logo'
import { Container } from '../../Container/Container'
import { Menu } from '@/app/Icons/Menu/Menu'
import { SideMenu } from '../SideMenu/SideMenu'
import { getCategories } from '@/app/helpers/getCategories'

export default async function Header () { 
    const res = await getCategories()
    const categories = res.categories
    return(
        <header className={style.header}>
            <Container>
            <div className={style.content}>
            <Link href="/">
                    <Logo></Logo>
                </Link>
            
                
                <Link className={style.link} href="/catalog">Каталог</Link>
            
            <SideMenu categories={categories}/>
            </div>
            </Container>
            
        </header>
    )
}