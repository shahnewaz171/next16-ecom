import { notFound } from 'next/navigation';
import ProductModal from '@/features/products/components/modals/ProductModal';
import { getProductById } from '@/features/products/product-services';

export default async function InterceptedProductPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) notFound();

  return <ProductModal product={product} />;
}
