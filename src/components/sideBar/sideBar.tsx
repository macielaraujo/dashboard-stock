import { LayoutGrid, PackageIcon, ShoppingBag } from "lucide-react";
import { SideBarButton } from "../ui/sideBarButton";

export function SideBar() {
  return (
    <div className="bg-white w-64">
      <div className="px-8 py-6 ">
        <h2 className="font-bold text-2xl">Dashboard</h2>
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
