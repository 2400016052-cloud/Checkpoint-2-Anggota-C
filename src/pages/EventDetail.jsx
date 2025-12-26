import { useParams, Link } from "react-router-dom";
import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";

import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

/* Dummy data — Checkpoint 2 */
const events = [
  {
    id: 1,
    name: "Jazz Gunung 2025",
    category: "Music",
    date: "2025-08-12",
    price: 750000,
    location: "Bromo Amphitheater",
    description:
      "Konser jazz etnik di ketinggian 2000 mdpl dengan suasana alam terbuka.",
    image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
  },
  {
    id: 2,
    name: "Tech Conference",
    category: "Seminar",
    date: "2025-09-01",
    price: 500000,
    location: "Jakarta Convention Center",
    description:
      "Konferensi teknologi nasional membahas tren dan inovasi terbaru.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  },
  {
    id: 3,
    name: "Indie Music Fest",
    category: "Music",
    date: "2025-10-15",
    price: 300000,
    location: "Bandung Creative Hub",
    description:
      "Festival musik indie dengan berbagai musisi lokal dan nasional.",
    image: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg",
  },
];

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return <p className="p-10 text-center">Event tidak ditemukan</p>;
  }

  const handleBuy = () => {
    console.log("Beli Tiket:", event.name);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <Card className="overflow-hidden">

          {/* IMAGE — FULL BLEED (sesuai card.jsx kamu) */}
          <div className="-mt-6">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-[420px] object-cover rounded-t-xl"
            />
          </div>

          {/* CONTENT */}
          <CardContent className="space-y-4">
            <Badge variant="secondary" className="w-fit">
              {event.category}
            </Badge>

            <h1 className="text-3xl font-bold">
              {event.name}
            </h1>

            <div className="text-gray-600 space-y-1">
              <p>📍 {event.location}</p>
              <p>
                📅{" "}
                {new Date(event.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <p className="text-xl font-bold text-green-600">
              Rp {event.price.toLocaleString("id-ID")}
            </p>

            <p className="text-gray-700 leading-relaxed">
              {event.description}
            </p>

            {/* ACTION */}
            <div className="flex gap-3 pt-4">
              <Button className="flex-1" onClick={handleBuy}>
                Beli Tiket
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </>
  );
}
