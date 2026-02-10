export default function ProductsLayout({ children }: LayoutProps<'/products'>) {
  return (
    <div className="py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">All Products</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Discover our complete collection of premium products
        </p>
      </div>

      {children}
    </div>
  );
}
