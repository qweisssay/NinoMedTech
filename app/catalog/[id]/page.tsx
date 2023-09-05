import { getProductById } from "@/app/helpers/getProducts"

import { currencyFormat } from "@/app/helpers/currencyFormat"
import style from './product.module.css'
import Image from "next/image"
import Link from "next/link"
import { CommercialButton } from "./CommercialButton/CommercialButton"
import { Doc } from "@/app/Icons/Doc"
import { SubData } from "./SubData/SubData"
import { BreadCrumbs } from "@/app/components/BreadCrumbs/BreadCrumbs"
import { getBrandData, getCategoryData, getProductData } from "../../../utils/getProductData"
export async function generateMetadata({params}:{params:{id:string}}) {
    const product =await getProductData(Number(params.id))

    
    if(product != null) {
        return {
            title: product!.name,
            description: product!.description,
            openGraph: {
                title: product!.name,
                description: product!.description,
                images: [
                    {
                        url: product!.image,
                        width: 800,
                        height: 600,
                        alt: product!.name
                    }
                ]
            }
        }
    }
    return {

    }
}
export default async function Product({params}:{params:{id:string}}) {
    // return ( 
    //     <h1>{params.id}</h1>
    // )
    const product =await getProductData(Number(params.id))

    const brand = product ? await getBrandData(Number(product!.brand_id)) : null
    const category = product ? await getCategoryData(Number(product!.category_id)) : null
    
    if (product != null && category != null && brand != null) {
        return ( 
            <>
                    <BreadCrumbs crumbs={[{href:'/catalog',text:'Каталог'},{href:`/catalog?c=${category.id}`,text:category.name},{href:`/catalog/${product!.id}`,text:product!.name}]}></BreadCrumbs>         
                    <div className={style.content} >
                    
                        <div className={style.data}>
                            <h1 className={style.heading}>{product!.name}</h1>
                            <div className={style.descriptionData}>
                                <p className={style.description}>
                                {product!.description}
                                </p>
                                <p className={style.priceInf}>От <span className={style.price}>{currencyFormat(product!.price)}</span></p>
                            </div>
                            
                            <div className={style.btnGroup}>
                                <CommercialButton name={product!.name} className={style.btn}>Запросить КП <Doc className={style.icon}/> </CommercialButton>
                                
                            </div>
                        </div>
                            <Image width={400} className={style.image} height={400} src={product!.image} alt={product!.name}/>
                    </div>
                    
                        
                        <SubData country={product!.country} aprobation={product!.aprobation} year={product!.year} validity={product!.validity} brand={brand}></SubData>
                    
                
            </>
        )
        
    }
    else {
        return ( 
            <div className={style.eror}>
                <h1 className={style.code}>40</h1>
                <p className={style.erorMessage}>К сожалению, товар не найден</p>
                <Link className={style.link} href={'/catalog'}>Вернуться в каталог</Link>
            </div>
        )
    }
    
}