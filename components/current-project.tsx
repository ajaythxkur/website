import Image from "next/image"
import Link from "next/link"

export function CurrentProject(){
    const projects = [
        {
            icon: <Image alt="legends-trade" src={"/img/legends.png"} height={150} width={300} className="rounded"/>,
            href: "https://devnet.legends.trade",
        }
    ]
    return(
        <div className="row justify-content-center mt-4">
        <div className="col-md-8 col-xl-6">
            <div className="border rounded p-3">
               <p className="text-decoration-underline">Currently working on</p>
               {projects.map((p, i)=>(
                    <Link href={p.href} key={i} target="_blank">
                        {p.icon}
                    </Link>
               ))}
               
            </div>
        </div>
    </div>
    )
}