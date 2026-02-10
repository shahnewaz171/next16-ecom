export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-gradient">404</h1>
          <h2 className="text-3xl font-semibold">Product Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The product you are looking for does not exist or has been moved.
          </p>
        </div>
      </div>
    </div>
  );
}
