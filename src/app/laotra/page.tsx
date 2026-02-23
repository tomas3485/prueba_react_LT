'use client'
import {useRouter} from "next/navigation"

const laotra= ()=>{

    const router=useRouter();
    return(
        <div>Otra pagina
        <p onClick = {()=>{
            router.back();
        }}>Atras</p>
    </div>
    )
}

export default laotra;
