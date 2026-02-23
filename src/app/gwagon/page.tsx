'use client'
import {useRouter} from "next/navigation"

const gwagon= ()=>{

    const router=useRouter();
    return(
        <div>
        <h1>Diablo menudo carro primo </h1>
        <img src = {"coche.jpeg"}
        onClick={()=>{
        router.replace("/");
      } }/>
        <p onClick = {()=>{
            router.back();
        }}>Atras</p>
    </div>
    )
}

export default gwagon;
