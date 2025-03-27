"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@prisma/client";
import { Badge } from "@/components/ui/badge";

const getStatuLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "Em estoque";
  } else {
    return "Esgotado";
  }
};

export const columnsTableProduct: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor Unitário",
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      const produto = row.row.original;
      const label = getStatuLabel(produto.status);
      return (
        <Badge
          className={`${
            label == "Em estoque"
              ? "bg-green-200 text-green-700"
              : "bg-red-200 text-red-400"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              label === "Em estoque" ? "bg-green-700" : "bg-red-400"
            }`}
          ></span>
          {label}
        </Badge>
      );
    },
  },
];
