import { LayoutGrid, PackageIcon, ShoppingBag } from "lucide-react";
import { SideBarButton } from "../ui/sideBarButton";
import Image from "next/image";

export function SideBar() {
  return (
    <div className="bg-white w-64">
      <div className="px-8 py-6 ">
        <h2 className="font-bold text-2xl text-green-700 flex gap-2">
          <Image src="/favicon.png" width={32} height={32} alt="Icone Stock" />
          Stock
        </h2>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SideBarButton href="/">
          <LayoutGrid size={20} />
          Dashboard
        </SideBarButton>
        <SideBarButton href="/produtos">
          <PackageIcon size={20} />
          Produtos
        </SideBarButton>
        <SideBarButton href="/vendas">
          <ShoppingBag size={20} />
          Vendas
        </SideBarButton>
      </div>
    </div>
  );
}
