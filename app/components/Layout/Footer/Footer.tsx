import { Container } from "../../Container/Container"
import Logo from "@/app/Icons/Logo/Logo"
import style from './footer.module.css'
import { Tg } from "@/app/Icons/Tg"
import { Vk } from "@/app/Icons/Vk"
export function Footer ( ) { 
    return (
        <footer id="contact" className={style.footer}>
            <Container>
                <nav className={style.nav}>
                <Logo/>
                <a className={style.mail} target="_blank" href="mailto:ninomedical@mail.ru">ninomedical@mail.ru</a>
                <ul className={style.social}>
                    <li>
                        <a  target="__blank" href="https://t.me/NinoMedTech">
                            <Tg className={style.icon}/>
                        </a>
                    </li>
                    <li>
                        <a  target="__blank"href="https://t.me/NinoMedTech">
                            <Vk className={style.icon}/>
                        </a>
                    </li>
                </ul>
                </nav>
            </Container>
        </footer>
    )
}