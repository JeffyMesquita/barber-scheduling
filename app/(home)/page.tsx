import { format } from "date-fns";
import { Header } from "../_components/Header/Header";
import { ptBR } from "date-fns/locale";
import { Search } from "./_components/Search/Search";
import { BookingItem } from "../_components/BookingItem/BookingItem";
import { BarbershopItem } from "./_components/BarbershopItem/BarbershopItem";
import { db } from "../prisma";
import { Barbershop } from "@prisma/client";
import { Footer } from "../_components/Footer/Footer";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});

  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Miguel</h2>
        <p className="capitalize text-sm opacity-75">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs text-neutral-400 font-semibold uppercase mb-3">
          agendamentos
        </h2>

        <BookingItem />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs text-neutral-400 font-semibold uppercase mb-3">
          recomendados
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop: Barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <div className="px-5 mt-6 mb-[4.5rem]">
        <h2 className="text-xs text-neutral-400 font-semibold uppercase mb-3">
          populares
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop: Barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
