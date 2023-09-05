import style from './container.module.css'

interface iContainer { 
  children: React.ReactNode;
  ref?: any
}
export function Container ({
    children,ref
  }:iContainer) { 
    return (
        <div ref={ref} className={style.container}>
            {children}
        </div>
    )

}