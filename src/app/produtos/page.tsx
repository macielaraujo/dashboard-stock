import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { DataTable } from "@/components/ui/dataTable";
import { columnsTableProduct } from "./_components/tabelaProdutos";
import { db } from "../_lib/prisma";

export default async function Produtos() {
  const produtos = await db.product.findMany({});
  return (
    <div className="w-full space-y-5 p-8 bg-white m-7 rounded-2xl">
      <div className="flex justify-between">
        <div>
          <span className="text-sm font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        <Button className="gap-2 cursor-pointer">
          <PlusIcon size={20} />
          Novo Produto
        </Button>
      </div>
      <DataTable columns={columnsTableProduct} data={produtos} />
    </div>
  );
}
