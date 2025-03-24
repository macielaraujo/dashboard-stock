import { db } from "../_lib/prisma";

export default async function Produtos() {
  const products = await db.product.findMany();
  return (
    <div>
      <h3>Produtos</h3>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}
