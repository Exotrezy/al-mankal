import heroImg from "@/assets/mixed-grill-platter.jpg";
import mixedImg from "@/assets/family-platter.jpg";
import shawarmaImg from "@/assets/shawarma-wrap.jpg";
import quesadillaImg from "@/assets/chicken-quesadilla.jpg";
import burgerImg from "@/assets/burger-combo.jpg";
import burritoImg from "@/assets/shawarma-burrito.jpg";
import platterImg from "@/assets/mixed-grill-platter.jpg";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Star, Navigation, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const PHONE = "(313) 358-8207";
const PHONE_TEL = "+13133588207";
const ADDRESS = "10021 S Texas 6, Sugar Land, TX 77498";
const MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ADDRESS);
const MAPS_EMBED = "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed";

const menu = [
  { name: "Mixed Grill Platter", desc: "Lamb, beef and chicken kabobs over warm pita with grilled vegetables and lemon.", img: platterImg },
  { name: "Family Feast Tray", desc: "A shareable spread of kabobs, shawarma wraps, fries and fresh greens.", img: mixedImg },
  { name: "Shawarma Plate", desc: "Hand-shaved shawarma wrapped tight, griddled crisp, served with crinkle fries.", img: shawarmaImg },
  { name: "Chicken Quesadilla", desc: "Grilled chicken and melted cheese in a sesame flatbread, served with pickles and fries.", img: quesadillaImg },
  { name: "ALMankal Burger", desc: "Hand-formed patty on a sesame bun with crisp fries on the side.", img: burgerImg },
  { name: "Shawarma Burrito", desc: "Loaded shawarma burrito griddled golden, served with garlic sauce and salsa.", img: burritoImg },
];

const reviews = [
  { text: "One of the best places I've been to in Houston. The staff is welcoming and the food is amazing.", name: "Sarah M." },
  { text: "Best Palestinian food I've ever had — worth the drive.", name: "Omar K." },
  { text: "The kabobs are some of the best in town. Always fresh and flavorful.", name: "Daniel R." },
  { text: "Great food, great service, and a cozy outdoor vibe.", name: "Layla H." },
];

const hours = [
  { day: "Sunday", time: "2 PM – 12 AM" },
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday", time: "1 PM – 12 AM" },
  { day: "Wednesday", time: "12 PM – 12 AM" },
  { day: "Thursday", time: "12 PM – 2 AM" },
  { day: "Friday", time: "3 PM – 2 AM" },
  { day: "Saturday", time: "12 PM – 2 AM" },
];

const Stars = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" : "text-muted-foreground"}`} />
    ))}
  </div>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit", href: "#visit" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-3 md:py-4 px-4">
        <a href="#top" className="flex items-center gap-2">
          <div className={`font-display font-bold text-lg md:text-xl ${scrolled ? "text-foreground" : "text-white"}`}>
            ALMankal <span className="text-primary">Grill</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white/90"}`}>{l.label}</a>
          ))}
          <Button asChild size="sm">
            <a href={`tel:${PHONE_TEL}`}><Phone className="w-4 h-4 mr-2" />Call</a>
          </Button>
        </nav>
        <button className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto py-4 flex flex-col gap-3 px-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-base font-medium">{l.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="ALMankal Grill mixed kabob platter with lamb, chicken and beef" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 container mx-auto px-4 text-center text-white">
      <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/70 mb-5">Charcoal-Fired · Sugar Land, TX</p>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5 max-w-4xl mx-auto">
        Authentic Middle Eastern flavor, off the grill.
      </h1>
      <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-8">
        Kabobs, shawarma and charcoal-grilled skewers — served fresh from our food truck.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild size="lg" className="h-12 px-8">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            <Navigation className="w-5 h-5 mr-2" />Get Directions
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white hover:text-foreground h-12 px-8">
          <a href={`tel:${PHONE_TEL}`}><Phone className="w-5 h-5 mr-2" />{PHONE}</a>
        </Button>
      </div>
      <div className="mt-10 flex items-center justify-center gap-3 text-sm text-white/80">
        <Stars rating={5} />
        <span className="font-semibold">4.8</span>
        <span className="text-white/60">· 582 Google reviews</span>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Our Story</span>
      <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">Fire. Spice. Tradition.</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        At <span className="text-foreground font-semibold">ALMankal Grill</span>, every skewer tells a story. We bring the bold flavors of the Middle East to Sugar Land — slow-marinated meats grilled over charcoal, fresh ingredients prepared daily, and a welcoming smile with every order.
      </p>
      <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl mx-auto">
        {[
          { v: "100%", l: "Charcoal Grilled" },
          { v: "4.8★", l: "582 Reviews" },
          { v: "Daily", l: "Fresh Ingredients" },
        ].map(s => (
          <div key={s.l} className="text-center">
            <div className="font-display text-2xl md:text-4xl font-bold text-primary">{s.v}</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MenuSection = () => (
  <section id="menu" className="py-20 md:py-28 bg-muted/40">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Menu Highlights</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">Straight from the flames</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">A taste of our most-loved dishes. Most items $10–20.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {menu.map((item) => (
          <article key={item.name} className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-colors">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={item.img} alt={item.name} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section id="reviews" className="py-20 md:py-28 bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--gold))] font-semibold">Loved by locals</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">4.8 ★ from 582 reviews</h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <Stars rating={5} />
          <span className="text-sm text-secondary-foreground/70">on Google</span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <blockquote key={i} className="bg-white/5 border border-white/10 rounded-xl p-7">
            <Stars rating={5} />
            <p className="text-base md:text-lg mt-4 leading-relaxed">"{r.text}"</p>
            <footer className="mt-4 text-sm text-secondary-foreground/70 font-medium">— {r.name}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

const Visit = () => (
  <section id="visit" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Find Us</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">Come hungry</h2>
        <p className="text-muted-foreground mt-4">Located in the gas station area · Outdoor seating available</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        <div className="rounded-xl overflow-hidden border border-border aspect-square lg:aspect-auto lg:min-h-[500px]">
          <iframe
            src={MAPS_EMBED}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ALMankal Grill location map"
          />
        </div>
        <div className="space-y-4">
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-lg font-bold mb-1">Address</h3>
                <p className="text-muted-foreground">{ADDRESS}</p>
                <Button asChild className="mt-4" size="sm">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4 mr-2" />Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-lg font-bold mb-1">Call Us</h3>
                <a href={`tel:${PHONE_TEL}`} className="text-lg font-semibold text-primary hover:underline">{PHONE}</a>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold mb-3">Hours</h3>
                <ul className="space-y-1.5 text-sm">
                  {hours.map(h => (
                    <li key={h.day} className="flex justify-between border-b border-border/60 pb-1.5 last:border-0">
                      <span className="font-medium">{h.day}</span>
                      <span className={h.closed ? "text-destructive font-semibold" : "text-muted-foreground"}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[hsl(var(--charcoal))] text-white/70 py-10">
    <div className="container mx-auto px-4 text-center">
      <div className="font-display text-lg font-bold text-white mb-2">ALMankal Grill</div>
      <p className="text-sm">{ADDRESS} · {PHONE}</p>
      <p className="text-xs mt-3 text-white/40">© {new Date().getFullYear()} ALMankal Grill. All rights reserved.</p>
    </div>
  </footer>
);

const StickyCall = () => (
  <a
    href={`tel:${PHONE_TEL}`}
    className="md:hidden fixed bottom-5 right-5 z-50 h-12 px-5 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center gap-2 font-semibold"
    aria-label="Call ALMankal Grill"
  >
    <Phone className="w-5 h-5" />
    Call
  </a>
);

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MenuSection />
      <Reviews />
      <Visit />
      <Footer />
      <StickyCall />
    </main>
  );
};

export default Index;
