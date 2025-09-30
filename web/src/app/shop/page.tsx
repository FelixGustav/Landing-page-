"use client";

import Image from "next/image";
import { useState } from "react";

export default function Shop() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const products = [
    {
      id: 1,
      name: "Produto 1",
      desc: "Descrição detalhada do produto 1.",
      img: "/images/flor1.jpg",
    },
    {
      id: 2,
      name: "Produto 2",
      desc: "Descrição detalhada do produto 2.",
      img: "/images/flor2.jpg",
    },
    {
      id: 3,
      name: "Produto 3",
      desc: "Descrição detalhada do produto 3.",
      img: "/images/flor3.jpg",
    },
  ];

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Loja</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aqui você encontra nossos produtos exclusivos de Rosa do Deserto.
          </p>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => setOpenImage(product.img)}
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  width={768}
                 height={1365}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal de imagem ampliada */}
      {openImage && (
       <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
    onClick={() => setOpenImage(null)}
    >
    {/* Container da imagem */}
    <div className="relative w-full max-w-5xl h-[90vh]">
      <Image
        src={openImage}
        alt="Imagem ampliada"
        fill
        className="object-contain rounded-xl shadow-2xl"
      />
     </div>
    </div>
      )}
    </section>
  );
}
