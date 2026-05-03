import heroImg from "@/assets/hero-grill.jpg";
import lambImg from "@/assets/lamb-skewers.jpg";
import beefImg from "@/assets/beef-skewers.jpg";
import chickenImg from "@/assets/chicken-kabobs.jpg";
import shawarmaImg from "@/assets/shawarma.jpg";
import burgerImg from "@/assets/burger.jpg";
import mixedImg from "@/assets/mixed-grill.jpg";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Star, Flame, Navigation, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const PHONE = "(313) 358-8207";
const PHONE_TEL = "+13133588207";
const ADDRESS = "10021 S Texas 6, Sugar Land, TX 77498";
const MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ADDRESS);
const MAPS_EMBED = "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed";

const menu = [
  { name: "Lamb Skewers", desc: "Tender chunks of lamb, marinated and charcoal-grilled to juicy perfection.", img: lambImg },
  { name: "Beef Skewers", desc: "Bold, smoky beef seasoned with authentic Middle Eastern spices.", img: beefImg },
  { name: "Chicken Kabobs", desc: "Marinated chicken kissed by the flames — tender, char-kissed and addictive.", img: chickenImg },
  { name: "Shawarma", desc: "Slow-cooked, hand-shaved meat wrapped with garlic sauce and pickles.", img: shawarmaImg },
  { name: "Smashed Burgers", desc: "Hand-formed patties seared crisp with melted cheese and fresh toppings.", img: burgerImg },
  { name: "Mixed Grill Platter", desc: "The full feast — lamb, beef, chicken, rice, hummus and warm bread.", img: mixedImg },
];

const reviews = [
  { text: "One of the best places I've been to in Houston! The staff is incredibly welcoming and the food is amazing.", name: "Sarah M." },
  { text: "Best Palestinian food I've ever had — worth the drive!", name: "Omar K." },
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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-3 md:py-4">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-fire flex items-center justify-center shadow-glow">
            <Flame className="w-5 h-5 text-primary-foreground animate-flicker" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg md:text-xl">ALMankal Grill</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">Food Truck · SLTX</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium hover:text-primary transition-colors">{l.label}</a>
          ))}
          <Button asChild variant="default" className="bg-gradient-fire hover:opacity-90 shadow-glow">
            <a href={`tel:${PHONE_TEL}`}><Phone className="w-4 h-4 mr-2" />Call Now</a>
          </Button>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <nav className="container mx-auto py-4 flex flex-col gap-3">
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
    <img src={heroImg} alt="Charcoal-grilled Middle Eastern kabobs over flames" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
    <div className="absolute inset-0 bg-gradient-charcoal" />
    <div className="absolute inset-0 bg-[hsl(var(--charcoal))]/50" />
    <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground animate-fade-in-up">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
        <Flame className="w-4 h-4 text-[hsl(var(--gold))]" />
        <span className="text-xs md:text-sm font-medium uppercase tracking-widest">Charcoal-Fired · Sugar Land, TX</span>
      </div>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5 max-w-4xl mx-auto">
        Authentic Middle Eastern <span className="text-gradient-fire">Flavor on the Grill</span>
      </h1>
      <p className="text-base md:text-xl text-white/85 max-w-2xl mx-auto mb-8">
        Freshly grilled kabobs, shawarma, and more — served hot from our food truck.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild size="lg" className="bg-gradient-fire hover:opacity-90 shadow-glow text-base h-12 px-8">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            <Navigation className="w-5 h-5 mr-2" />Get Directions
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:text-white h-12 px-8 text-base">
          <a href={`tel:${PHONE_TEL}`}><Phone className="w-5 h-5 mr-2" />Call Now</a>
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
      <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Our Story</span>
      <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">Fire. Spice. Tradition.</h2>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
        At <span className="text-foreground font-semibold">ALMankal Grill</span>, every skewer tells a story. We bring the bold, soul-warming flavors of the Middle East to Sugar Land — slow-marinated meats kissed by glowing charcoal, fresh ingredients prepared daily, and a welcoming smile with every order. Pull up a seat, breathe in the smoke, and taste tradition done right.
      </p>
      <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl mx-auto">
        {[
          { v: "100%", l: "Charcoal Grilled" },
          { v: "4.8★", l: "582 Reviews" },
          { v: "Daily", l: "Fresh Ingredients" },
        ].map(s => (
          <div key={s.l} className="text-center">
            <div className="font-display text-2xl md:text-4xl font-bold text-gradient-fire">{s.v}</div>
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
        <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Menu Highlights</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">Straight From The Flames</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">A taste of our most-loved dishes. Price range $10–20.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {menu.map((item, i) => (
          <article key={item.name} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-1" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={item.img} alt={item.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
        <span className="text-sm uppercase tracking-[0.3em] text-[hsl(var(--gold))] font-semibold">Loved By Locals</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">4.8 ★ from 582 Reviews</h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <Stars rating={5} />
          <span className="text-sm text-secondary-foreground/70">on Google</span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <blockquote key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors">
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
        <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Find Us</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">Come Hungry</h2>
        <p className="text-muted-foreground mt-4">Located in the gas station area · Outdoor seating available</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-soft aspect-square lg:aspect-auto lg:min-h-[500px]">
          <iframe
            src={MAPS_EMBED}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ALMankal Grill location map"
          />
        </div>
        <div className="space-y-6">
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-full bg-gradient-fire flex items-center justify-center shadow-glow">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-1">Address</h3>
                <p className="text-muted-foreground">{ADDRESS}</p>
                <Button asChild className="mt-4 bg-gradient-fire hover:opacity-90 shadow-glow">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4 mr-2" />Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-full bg-gradient-fire flex items-center justify-center shadow-glow">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-1">Call Us</h3>
                <a href={`tel:${PHONE_TEL}`} className="text-lg font-semibold text-primary hover:underline">{PHONE}</a>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-full bg-gradient-fire flex items-center justify-center shadow-glow">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold mb-3">Hours</h3>
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
  <footer className="bg-[hsl(var(--charcoal))] text-white/80 py-10">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Flame className="w-5 h-5 text-[hsl(var(--gold))]" />
        <span className="font-display text-xl font-bold text-white">ALMankal Grill</span>
      </div>
      <p className="text-sm">{ADDRESS} · {PHONE}</p>
      <p className="text-xs mt-3 text-white/50">© {new Date().getFullYear()} ALMankal Grill. All rights reserved.</p>
    </div>
  </footer>
);

const StickyCall = () => (
  <a
    href={`tel:${PHONE_TEL}`}
    className="md:hidden fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-gradient-fire shadow-glow flex items-center justify-center animate-flicker"
    aria-label="Call ALMankal Grill"
  >
    <Phone className="w-6 h-6 text-primary-foreground" />
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
