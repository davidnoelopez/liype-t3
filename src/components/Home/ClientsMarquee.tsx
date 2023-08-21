import Image from "next/image";
import React from "react";

const ClientsMarqueeData = [
  {
    name: "Pollo Maton",
    logo: "/assets/clientsLogos/pollo_maton.webp",
  },
  {
    name: "Grupo GP",
    logo: "/assets/clientsLogos/grupo_gp.webp",
  },
  {
    name: "Centro Medico Eternal",
    logo: "/assets/clientsLogos/eternal.webp",
  },
  {
    name: "Christus Muguerza",
    logo: "/assets/clientsLogos/christus_muguerza.webp",
  },
  {
    name: "Centro Medico Sancen",
    logo: "/assets/clientsLogos/sancen.webp",
  },
  {
    name: "Orage Investments",
    logo: "/assets/clientsLogos/orange_investments.webp",
  },
  {
    name: "Posadas",
    logo: "/assets/clientsLogos/posadas.webp",
  },
  {
    name: "Las Alitas",
    logo: "/assets/clientsLogos/las_alitas.webp",
  },
  {
    name: "Noreste Grill",
    logo: "/assets/clientsLogos/noreste_grill.webp",
  },
  {
    name: "Live Aqua",
    logo: "/assets/clientsLogos/live_aqua.webp",
  },
  {
    name: "Delicias del Contry",
    logo: "/assets/clientsLogos/delicias.webp",
  },
  {
    name: "Soriana",
    logo: "/assets/clientsLogos/soriana.webp",
  },
  {
    name: "Acostaverde",
    logo: "/assets/clientsLogos/acostaverde.webp",
  },
  {
    name: "Plani Grupo",
    logo: "/assets/clientsLogos/plani_grupo.webp",
  },
];

const ClientsMarquee = () => {
  return (
    <div className="px-0 py-10">
      <div className="relative flex gap-10 overflow-hidden pb-10">
        <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-8">
          {ClientsMarqueeData.map((client, index) => (
            <div
              key={index}
              className="inline-block h-48 w-48 max-w-xs overflow-hidden rounded-lg bg-white text-center align-middle shadow-lg shadow-slate-400 transition-shadow duration-300 ease-in-out hover:bg-gray-100 hover:shadow-xl hover:shadow-slate-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={200}
                height={200}
                quality={80}
              />
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-8"
        >
          {ClientsMarqueeData.map((client, index) => (
            <div
              key={index}
              className="inline-block h-48 w-48 max-w-xs overflow-hidden rounded-lg bg-white text-center align-middle shadow-lg shadow-slate-400 transition-shadow duration-300 ease-in-out hover:bg-gray-100 hover:shadow-xl hover:shadow-slate-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={200}
                height={200}
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsMarquee;
