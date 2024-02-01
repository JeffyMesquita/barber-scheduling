import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

const BookingItem = () => {
  return (
    <Card>
      <CardContent className="flex justify-between pr-5 py-0">
        <div className="flex flex-col gap-2 py-5 flex-1">
          <Badge className="bg-[#221c30] text-primary hover:bg-[#221c30] w-fit">
            Confirmado
          </Badge>
          <h2 className="font-bold">Corte de Cabelo</h2>

          <div className="flex itens-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage
                src="https://utfs.io/f/60f24f5c-9ed3-40ba-8c92-0cd1dcd043f9-16w.png"
                alt="Miguel"
              />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>

            <h3 className="text-sm">Vintage Barber</h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pl-5 border-l border-solid border-secondary text-current w-1/5">
          <p className="text-sm">Fevereiro</p>
          <p className="text-2xl">06</p>
          <p className="text-sm">09:45</p>
        </div>
      </CardContent>
    </Card>
  );
};

export { BookingItem };
