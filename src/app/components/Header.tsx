import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
export default function Header() {
  return (
    <div className="">
        <div className=" h-[50px] my-5 border-b-2 px-5">
  <div className="flex justify-between items-center text-xl sm:text-2xl lg:text-3xl">
   <Link href={'/'}> <h1 className="text-slate-600 font-bold">Foody.ko</h1></Link>
   <Link href={'/cart'}> <FaCartShopping className="text-slate-600" /></Link>
  </div>
</div>

    </div>
  )
}
