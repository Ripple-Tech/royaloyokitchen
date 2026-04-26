"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import { Flame, Clock, Star, ChefHat, Users, Sparkles } from "lucide-react"

// ─── Food data ────────────────────────────────────────────────────────────────
const FOOD_ITEMS = [
  { id: "lf-01", name: "Jollof Rice", category: "Local Favourites", description: "Classic Nigerian party jollof, slow-cooked over firewood with a rich tomato base and aromatic spices.", price: 3000, image: "/rice.jpg", badge: "Popular", spicy: true, rating: 4.9, prepTime: "25 min", serves: 1 },
  { id: "lf-02", name: "Fried Rice", category: "Local Favourites", description: "Golden stir-fried rice loaded with mixed vegetables, seasoned to perfection with our house blend.", price: 4000, image: "/ofadarice.jpg", badge: "Chef's Pick", spicy: false, rating: 4.8, prepTime: "20 min", serves: 1 },
  { id: "lf-03", name: "Ofada Rice with Sauce", category: "Local Favourites", description: "Locally grown unpolished ofada rice served with our signature ayamase (green pepper) sauce.", price: 7000, image: "/ofadarice.jpg", badge: "Chef's Pick", spicy: true, rating: 4.9, prepTime: "30 min", serves: 1 },
  { id: "lf-04", name: "Yam Porridge", category: "Local Favourites", description: "Hearty yam porridge simmered with palm oil, crayfish, and a blend of West African spices.", price: 5000, image: "/yam.png", spicy: false, rating: 4.7, prepTime: "35 min", serves: 1 },
  { id: "lf-05", name: "Asun Rice", category: "Local Favourites", description: "Fragrant jollof rice crowned with smoky, peppered goat meat — a bold house specialty.", price: 12000, image: "/asunrice.png", badge: "Chef's Pick", spicy: true, rating: 5.0, prepTime: "40 min", serves: 1 },
  { id: "lf-06", name: "Spaghetti Jollof", category: "Local Favourites", description: "Nigerian-style jollof spaghetti cooked in a rich tomato and pepper sauce with our special seasoning.", price: 4000, image: "/spaghetti.jpg", spicy: false, rating: 4.6, prepTime: "20 min", serves: 1 },
  { id: "gr-01", name: "Grilled Chicken", category: "Grills", description: "Whole or half chicken marinated in our house spice blend and grilled over open firewood.", price: 6000, image: "/chicken2.png", badge: "Popular", spicy: false, rating: 4.8, prepTime: "35 min", serves: 1 },
  { id: "gr-02", name: "Grilled Fish", category: "Grills", description: "Fresh Croaker or Tilapia marinated in citrus-spice blend, grilled to smoky perfection.", price: 18000, image: "/grilledfish.png", badge: "Chef's Pick", spicy: true, rating: 4.9, prepTime: "40 min", serves: 2 },
  { id: "gr-03", name: "Asun", category: "Grills", description: "Smoky, peppered goat meat — a Lagos street food classic elevated to its finest form.", price: 10000, image: "/asungrill.jpg", badge: "Popular", spicy: true, rating: 4.9, prepTime: "45 min", serves: 2 },
  { id: "gr-04", name: "Pepper Soup", category: "Grills", description: "Deeply aromatic broth bursting with native spices, tender meat, and warming pepper heat.", price: 10000, image: "/goat.png", spicy: true, rating: 4.8, prepTime: "30 min", serves: 1 },
  { id: "gr-05", name: "Suya", category: "Grills", description: "Thin-sliced beef skewers rubbed in yaji spice mix, char-grilled over hot coals.", price: 5000, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&q=80", badge: "Popular", spicy: true, rating: 4.9, prepTime: "25 min", serves: 1 },
  { id: "gr-06", name: "Catfish", category: "Grills", description: "Whole catfish seasoned with a house blend of herbs and spices, grilled to golden perfection.", price: 15000, image: "/grilledfish.png", spicy: false, rating: 4.7, prepTime: "40 min", serves: 2 },
  { id: "gr-07", name: "Nkwobi", category: "Grills", description: "Cow foot slow-cooked in a spiced palm oil and utazi leaf sauce — a true Eastern delicacy.", price: 6000, image: "/nkwobi.png", badge: "New", spicy: true, rating: 4.8, prepTime: "50 min", serves: 2 },
]

const CATEGORIES = ["All", "Local Favourites", "Grills"] as const
type Category = (typeof CATEGORIES)[number]

const BADGE_CONFIG: Record<string, { bg: string; label: string }> = {
  "Popular":     { bg: "bg-red-600",     label: "🔥 Popular" },
  "Chef's Pick": { bg: "bg-amber-600",   label: "👨‍🍳 Chef's Pick" },
  "New":         { bg: "bg-blue-600",    label: "✨ New" },
  "Spicy Special": { bg: "bg-red-800",   label: "🌶 Spicy Special" },
}

const formatNGN = (n: number) => `₦${n.toLocaleString("en-NG")}`

// ─── Food Card ────────────────────────────────────────────────────────────────
function FoodCard({
  item,
  index,
}: {
  item: (typeof FOOD_ITEMS)[number]
  index: number
}) {
  const badge = item.badge ? BADGE_CONFIG[item.badge] : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.07, ease: "easeOut" }}
      className="group relative flex flex-col bg-[#0d0d0d] overflow-hidden"
      style={{
        border: "1px solid rgba(186,117,23,0.18)",
        borderTop: "2px solid rgba(186,117,23,0.45)",
      }}
    >
      {/* ── Image via Swiper ─────────────────────────────────────────────── */}
      <div className="relative h-52 overflow-hidden flex-shrink-0 bg-[#111]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          slidesPerView={1}
          loop={false}
          autoplay={{ delay: 3500 + index * 200, disableOnInteraction: false }}
          className="h-full w-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-52">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-106 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Gradient overlay — stronger at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/10 to-transparent" />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Badge */}
        {badge && (
          <span
            className={`absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm ${badge.bg} text-white`}
          >
            {badge.label}
          </span>
        )}

        {/* Spicy flame indicator */}
        {item.spicy && (
          <div
            className="absolute z-10 flex items-center gap-1 bg-red-700/90 text-white rounded-sm px-1.5 py-0.5"
            style={{ top: badge ? "44px" : "12px", left: "12px" }}
          >
            <Flame size={9} />
            <span className="text-[8px] font-bold tracking-wide">SPICY</span>
          </div>
        )}

        {/* Rating pill */}
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 bg-black/70 backdrop-blur-sm border border-amber-600/30 px-2 py-0.5 rounded-sm">
          <Star size={9} className="fill-amber-500 text-amber-500" />
          <span className="text-[10px] font-bold text-amber-400">{item.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* ── Details ──────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        {/* Meta row */}
        <div className="flex items-center gap-3 text-gray-500">
          <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest">
            <Clock size={9} className="text-red-500/70" />
            {item.prepTime}
          </span>
          <span className="w-px h-3 bg-gray-700" />
          <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest">
            <Users size={9} className="text-amber-600/70" />
            Serves {item.serves}
          </span>
        </div>

        <h3
          className="text-lg font-cormorant italic leading-snug"
          style={{ color: "#d4a853" }}
        >
          {item.name}
        </h3>

        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* Price + Order row */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/[0.05]">
          <span className="text-base font-bold text-white tabular-nums">
            {formatNGN(item.price)}
          </span>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-black transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #d4a853 0%, #b8882e 100%)" }}
          >
            <ChefHat size={10} />
            Order
          </motion.button>
        </div>
      </div>

      {/* Hover glow edge */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: "inset 0 0 0 1px rgba(186,117,23,0.4)" }}
      />
    </motion.div>
  )
}

// ─── Category Tab ─────────────────────────────────────────────────────────────
function CategoryTab({
  label,
  active,
  onClick,
  count,
}: {
  label: string
  active: boolean
  onClick: () => void
  count: number
}) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300"
      style={{
        color: active ? "#d4a853" : "#4b4b4b",
        borderBottom: active ? "1px solid #d4a853" : "1px solid transparent",
      }}
    >
      {label}
      <span
        className="text-[9px] px-1.5 py-0.5 rounded-sm font-bold tabular-nums"
        style={{
          background: active ? "rgba(212,168,83,0.15)" : "rgba(255,255,255,0.04)",
          color: active ? "#d4a853" : "#3a3a3a",
          border: active ? "1px solid rgba(212,168,83,0.25)" : "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {count}
      </span>
    </button>
  )
}

// ─── MenuSection ──────────────────────────────────────────────────────────────
export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const filtered =
    activeCategory === "All"
      ? FOOD_ITEMS
      : FOOD_ITEMS.filter((f) => f.category === activeCategory)

  const countFor = (cat: Category) =>
    cat === "All" ? FOOD_ITEMS.length : FOOD_ITEMS.filter((f) => f.category === cat).length

  return (
    <section id="menu" className="py-20 md:py-32 bg-[#080808] relative overflow-hidden">
      {/* Subtle red kitchen glow — top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(192,57,43,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Gold glow — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(186,117,23,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          {/* Divider ornament */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-700/60" />
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-red-600" />
              <Sparkles size={13} className="text-amber-600" />
              <div className="w-1 h-1 rounded-full bg-red-600" />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-700/60" />
          </div>

          <p
            className="text-[10px] uppercase tracking-[0.4em] mb-3 font-medium"
            style={{ color: "#c0392b" }}
          >
            From Our Kitchen
          </p>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-cormorant italic text-white mb-4"
            style={{ textShadow: "0 2px 40px rgba(212,168,83,0.12)" }}
          >
            Signature Menu
          </h2>

          <p className="text-gray-500 text-sm tracking-wide">
            Curated by our Executive Chef &mdash; crafted with love, fired with tradition
          </p>
        </motion.div>

        {/* ── Category tabs ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex items-center justify-center gap-1 mb-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          {CATEGORIES.map((cat) => (
            <CategoryTab
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              count={countFor(cat)}
            />
          ))}
        </motion.div>

        {/* ── Grid ───────────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((item, idx) => (
              <FoodCard key={item.id} item={item} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Footer note ─────────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 text-[11px] tracking-widest uppercase mt-12"
        >
          All prices in Nigerian Naira &middot; Menu subject to seasonal availability
        </motion.p>
      </div>
    </section>
  )
}