export default function LoginLayout({ children }: LayoutProps<'/login'>) {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gradient mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to continue shopping</p>
        </div>

        {children}
      </div>
    </div>
  );
}
