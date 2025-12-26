import { useState } from "react";
import AdminHeader from "../components/admin/AdminHeader";
import DataTable from "../components/admin/DataTable";
import FormData from "../components/admin/FormData";

export default function AdminDashboard() {
  const [events, setEvents] = useState([
    { id: 1, name: "Jazz Gunung", price: 750000 },
    { id: 2, name: "Rock Fest", price: 500000 },
    { id: 3, name: "Tech Conference", price: 300000 }
  ]);

  return (
    <>
      <AdminHeader />
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormData />
        <DataTable events={events} />
      </div>
    </>
  );
}
