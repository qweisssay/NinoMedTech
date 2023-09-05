'use client'

import { useEffect, useState,useRef } from 'react';

import { Card } from '@/app/components/Card/Card';
import { iCard, iList } from '@/app/types/Product';
import { getByParams} from '@/app/helpers/apiHandlers';
import { LoadIcon } from '@/app/components/LoadIcon/LoadIcon';

export function CardList ({category,search,brand,orderedBy}:iList) {
    const [cards,setCards] = useState<iCard[]>([])
    const [isFetching,setIsFetching] = useState(true);
    const [page, setPage] = useState(1);
    const [lastPool,setLastPool] = useState(0);
    const oberverRef = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        if ( isFetching) { 
            
            getByParams({skip:page,size:12,category:category,search:search,brand:brand,orderedBy:orderedBy}).then(res=>{setCards(prev=>[...prev,...res.products]);setLastPool(res.products.length)});
            setIsFetching(false);
            setPage(prev=>prev+1);
        }
        const observer = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting && !isFetching && lastPool == 12) {
              setIsFetching(true)
            }
            
          },{rootMargin: '100px'});
    
          observer.observe(oberverRef!.current!)
    
    },[isFetching,orderedBy,category,brand,search])
    return ( 
        <>
            
                
                
                    {cards.map(item=>(
                        <Card  key={item.id} name={item.name} id={item.id} price={item.price} image={item.image}/>
                    ))}

                <div ref={oberverRef}></div>
                {isFetching && <p><LoadIcon></LoadIcon></p>}
            
        </>
    )
}