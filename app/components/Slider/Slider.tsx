'use client'

import style from './slider.module.css'
import Link from "next/link"
import {  useRef, useState } from "react"
import Image from 'next/image'
import { currencyFormat } from '@/app/helpers/currencyFormat'
import { iCard } from '@/app/types/Product'





export function Slider ({items}:{items:iCard[]}) { 
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number>(0);

  const handleSwipeStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleSwipeEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDiff = touchEndX - touchStartX.current;

    if (Math.abs(touchDiff) > 50) {
      if (touchDiff > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
      else if (touchDiff > 0 && currentIndex == 0) {
        setCurrentIndex(items.length - 1);
      }
      else if (touchDiff < 0 && currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
      else if (touchDiff < 0 && currentIndex == items.length - 1) {
        setCurrentIndex(0);
      }
    }
  };

  return (
    <>
        <div
            className={style.slider}
            ref={sliderRef}
            onTouchStart={handleSwipeStart}
            onTouchEnd={handleSwipeEnd}
        >
            {items.map((item, index) => (
                <div
                key={item.id}
                className={`${style.slide} ${index === currentIndex ? style.active : ''}`}
                >
                <div  className={style.item} style={{transform: `translateX(-${currentIndex * 100}%)`}} >
                                        <div className={style.content}>
                                            <h3 className={style.heading }>{item.name}</h3>
                                            <span className={style.description }>
                                            {item.description}
                                            </span>
                                            <span className={style.priceContainer} >
                                            От <span className={style.price}>{currencyFormat(item.price)}</span>
                                            </span>
                                            <Link className={style.link} href={`/catalog/${item.id}`}>
                                                Узнать подробнее
                                            </Link>
                                        </div>
                                            
                                        <div className={style.imageContainer}>
                                        <Image src={item.image} className={style.image} width={150} height={180} alt={item.name}></Image>   
                                        </div>
                                    
                                    </div>
                </div>
            ))}
        
        </div>
        <div className={style.pagContainer}>
        <div className={style.pagination}>
                {items.map((item,index)=>(
                    <button key={index} className={`${style.pagItem} ${index === currentIndex ? style.active : ''}`} onClick={()=>setCurrentIndex(index)}></button>
                ))}
        </div>
        </div>
    </>
    )}