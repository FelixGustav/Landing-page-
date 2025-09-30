import { FC } from "react";
import Image from "next/image";
import heroImg from "../../public/iconFlor2.svg";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gray-50">

      <div className="max-w-lg">
        <h1 className="text-5xl font-bold leading-tight">
          Não é apenas uma { " "}  
           <span className="text-purple-600">Planta</span>  {""}
            É uma obra de arte viva Conheça nossas {" "}
           <span className="text-purple-600">Rosas do deserto</span> 
        </h1>
        <Link href="/shop">
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full">
          Ver Produtos
         </button>
        </Link> 
      </div>

      <div className="mt-10 md:mt-0">
        <Image src={heroImg} alt="Hero image" width={400} height={400} />
      </div>
    </section>
  );
};

export default Hero;
