'use client';

import { useEffect } from "react";



export default function ErorProduct ({eror}:{eror:Error}) {
    useEffect(() => {
        console.log(eror)
    },[eror]) 
    return (
        <div>
            <h1>{eror.message}</h1>
        </div>
    )
}