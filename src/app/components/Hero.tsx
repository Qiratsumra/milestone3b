import Image from "next/image";
import hero from "../../../public/image.png"
import Link from "next/link";




export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r ">

<div className="relative flex flex-col-reverse items-center justify-between px-6 py-16 lg:flex-row lg:px-12 lg:py-20">
      {/* Left Section */}
      <div className="max-w-lg text-center space-y-6 lg:text-left">
        <p className="text-base great-vibes-regular text-pink-500  md:text-lg">It's Quick & Charming!</p>
        <h1 className="text-3xl font-bold md:text-5xl">
          <span className="text-pink-500">The</span> Art of speed
          <br />
          <span className="text-pink-500">food Quality</span>
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
       <Link href={'/products'}>
       <button className="px-5 py-3 font-medium text-black bg-pink-500 rounded-lg hover:bg-pink-800">
          See Menu
        </button>
       </Link>
      </div>

      {/* Right Section */}
      <div className="relative mb-8 lg:mb-0">
        {/* Food Image */}
        <div className="relative w-64 h-64 rounded-full overflow-hidden sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
          <Image
            src={hero} 
            alt="Food"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>


    </div>
  )
}