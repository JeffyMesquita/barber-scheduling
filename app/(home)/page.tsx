import { format } from "date-fns";
import { Header } from "../_components/Header/Header";
import { ptBR } from "date-fns/locale";
import { Search } from "./_components/Search/Search";
import { BookingItem } from "../_components/BookingItem/BookingItem";

export default function Home() {
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
    </div>
  );
}