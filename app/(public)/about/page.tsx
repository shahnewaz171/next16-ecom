import {
  ArrowRight,
  Globe,
  Heart,
  Leaf,
  Shield,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Users
} from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const stats = [
  { label: 'Happy Customers', value: '50K+', icon: Users },
  { label: 'Products Delivered', value: '200K+', icon: ShoppingBag },
  { label: 'Countries Served', value: '30+', icon: Globe },
  { label: 'Customer Rating', value: '4.9', icon: Star }
];

const values = [
  {
    icon: Sparkles,
    title: 'Innovation First',
    description:
      'We leverage cutting-edge technology like Next.js 16 with partial pre-rendering and advanced caching to deliver lightning-fast experiences.'
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description:
      'Every transaction is protected with enterprise-grade encryption. Your data privacy is our top priority — always.'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'We are committed to eco-friendly packaging and carbon-neutral shipping, because the planet matters as much as your order.'
  },
  {
    icon: Heart,
    title: 'Community Driven',
    description:
      'Built by developers, for everyone. We listen to our community and continuously evolve based on real feedback.'
  }
];

const marqueeItems = [
  'Free Shipping Worldwide',
  '24/7 Customer Support',
  '30-Day Returns',
  'Eco-Friendly Packaging',
  'Secure Payments',
  'Price Match Guarantee',
  'Exclusive Member Deals',
  'Same-Day Dispatch'
];

export default function AboutPage() {
  return (
    <div className="py-8 space-y-24">
      {/* Hero Section */}
      <section className="relative text-center py-16 sm:py-24 overflow-hidden">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          We&apos;re Building the
          <br />
          <span className="text-gradient">Future of Shopping</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed px-4">
          Commerce is a next-generation e-commerce platform crafted with precision, powered by the
          latest web technologies, and designed to deliver experiences that feel instant.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/products">
            <Button
              size="xl"
              variant="gradient"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              Explore Products
            </Button>
          </Link>
          <Link href="/register">
            <Button size="xl" variant="outline">
              Join the Community
            </Button>
          </Link>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="marquee relative -mx-4 overflow-hidden py-6 border-y border-border/50 bg-secondary/30">
        <div className="flex gap-0 w-full overflow-hidden">
          <MarqueeTrack prefix="a" />
          <MarqueeTrack prefix="b" />
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card hover:border-(--gradient-start)/30 transition-all duration-300 text-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-(--gradient-start)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <stat.icon className="w-6 h-6 mx-auto mb-3 text-(--gradient-start)" />
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What <span className="text-gradient">Drives Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our core values shape every decision we make, from the technology we choose to the
            partners we work with.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="group relative p-8 rounded-2xl border border-border/50 bg-card hover:border-(--gradient-start)/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-(--gradient-start)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--gradient-start)/20 to-(--gradient-end)/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-(--gradient-start)" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Promise Section */}
      <section className="relative rounded-3xl border border-border/50 bg-linear-to-br from-secondary/50 to-card overflow-hidden p-8 sm:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-(--gradient-start) rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-(--gradient-end) rounded-full opacity-5 blur-3xl" />

        <div className="relative grid sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-(--gradient-start)/20 to-(--gradient-end)/20 flex items-center justify-center mx-auto">
              <Truck className="w-7 h-7 text-(--gradient-start)" />
            </div>
            <h3 className="text-lg font-semibold">Free Shipping</h3>
            <p className="text-sm text-muted-foreground">
              On all orders over $50. Worldwide delivery in 3–5 business days.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-(--gradient-start)/20 to-(--gradient-end)/20 flex items-center justify-center mx-auto">
              <Shield className="w-7 h-7 text-(--gradient-start)" />
            </div>
            <h3 className="text-lg font-semibold">Secure Checkout</h3>
            <p className="text-sm text-muted-foreground">
              End-to-end encrypted transactions with PCI DSS compliance.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-(--gradient-start)/20 to-(--gradient-end)/20 flex items-center justify-center mx-auto">
              <Heart className="w-7 h-7 text-(--gradient-start)" />
            </div>
            <h3 className="text-lg font-semibold">30-Day Returns</h3>
            <p className="text-sm text-muted-foreground">
              No questions asked. If you&apos;re not happy, we&apos;ll make it right.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to <span className="text-gradient">Get Started?</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Join thousands of happy customers and experience the future of online shopping today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/products">
            <Button
              size="xl"
              variant="gradient"
              icon={<ShoppingBag className="h-5 w-5" />}
              iconPosition="right"
            >
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function MarqueeTrack({ prefix }: { prefix: string }) {
  return (
    <div className="flex items-center gap-2 shrink-0 marquee-content">
      {marqueeItems.map((item) => (
        <span
          key={`${prefix}-${item}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground whitespace-nowrap"
        >
          <Sparkles className="w-3.5 h-3.5 text-(--gradient-start)" />
          {item}
          <span className="mx-4 text-border">•</span>
        </span>
      ))}
    </div>
  );
}
