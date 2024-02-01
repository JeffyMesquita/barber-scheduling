import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex justify-between items-center p-5">
        <Image src="/logo.png" alt="FWS Barber" width={120} height={22} />
        <Button variant="outline" size="icon" className="w-8 h-8">
          <MenuIcon size={18} />
        </Button>
      </CardContent>
    </Card>
  );
};

export { Header };
