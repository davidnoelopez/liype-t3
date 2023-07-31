import React from "react";
import ClientsMarquee from "./ClientsMarquee";
import MainClientsDescription from "./MainClientsDescription";

const Clients = () => {
  return (
    <section id="clients">
      <MainClientsDescription />
      <ClientsMarquee />
    </section>
  );
};

export default Clients;
