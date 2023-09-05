
import { Footer } from "./Footer/Footer";
import Header from "./Header/Header";
import { MessageBtn } from "./MessageBtn/MessageBtn";
import { MessageForm } from "../MessageForm/MessageForm";

export function Layout ({children}:{children:React.ReactNode}) { 
    return ( 
        <>
            <Header/>
                <main id='main' style={{minHeight:'calc(100vh - 120px)',maxWidth:'100vw'}}>
                {children}
                {/* <MessageBtn></MessageBtn> */}
                <MessageForm></MessageForm>
                
                <div id="portal"></div>
                </main>
                
            <Footer/>
        </>
    )

}