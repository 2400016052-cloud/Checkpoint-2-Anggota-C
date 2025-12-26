import { useState } from "react";
import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";
import HeroSection from "../components/public/HeroSection";
import EventCard from "../components/public/EventCard";

import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const allEvents = [
  {
    id: 1,
    name: "Jazz Gunung 2025",
    category: "Music",
    date: "2025-08-12",
    price: 750000,
    location: "Bromo Amphitheater",
    image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
  },
  {
    id: 2,
    name: "Tech Conference",
    category: "Seminar",
    date: "2025-09-01",
    price: 500000,
    location: "Jakarta Convention Center",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  },
  {
    id: 3,
    name: "Indie Music Fest",
    category: "Music",
    date: "2025-10-15",
    price: 300000,
    location: "Bandung Creative Hub",
    image: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // 🔍 LOGIC FILTER
  const filteredEvents = allEvents.filter((event) => {
    const matchSearch = event.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" || event.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <>
      <Navbar />
      <HeroSection />

      {/* SEARCH & FILTER */}
      <div className="max-w-7xl mx-auto p-6 flex justify-center gap-4 flex-col md:flex-row">
        <Input
          placeholder="Cari event..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="md:w-1/2"
        />

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="md:w-60">
            <SelectValue placeholder="Pilih kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Kategori</SelectItem>
            <SelectItem value="Music">Music</SelectItem>
            <SelectItem value="Seminar">Seminar</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* EVENT LIST */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Event tidak ditemukan
          </p>
        )}
      </div>

      <Footer />
    </>
  );
}
