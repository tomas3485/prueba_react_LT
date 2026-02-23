'use client'
import Link from "next/link"
import {useRouter} from "next/navigation"
import { useState } from 'react'

const Home=()=>{

  const [count,setCount]=useState(0)
  const router = useRouter();
  
  return (
    <div className="contenedor">
      <h1>Hola Mundo</h1>
      <Link href="/laotra">Si pinchas aqui te lleva a la otra</Link>
      <p onClick={()=>{
          router.replace("/laotra")
      }}>Ir pero feo</p>

      <img src = {"oshawott.jpeg"}
        onClick={()=>{
        router.push("/laotra");
      }}
      />
      <img src = {"cabra.jpeg"}
        className= "cabra"
        onClick={()=>{
        router.push("/gwagon");
      } }/>
      
      <div className="Torrecilla">
         <h1>Torrecilla es pila bujarra</h1>
         <button className = "boton" onClick={()=>setCount((count)=>count+1)}>votos para el partido boliviano : {count}</button>
      </div>
      <Link href="humungosaurus.jpeg">humongosaurio</Link>
    </div>
  );
}

export default Home;