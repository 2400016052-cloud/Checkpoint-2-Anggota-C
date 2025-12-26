export default function FormData() {
  return (
    <form className="border p-4 rounded bg-white">
      <h2 className="font-bold mb-4">Tambah Event</h2>

      {/* Nama Event */}
      <input
        type="text"
        placeholder="Nama Event"
        className="border p-2 w-full mb-3 rounded"
      />

      {/* Kategori */}
      <input
        type="text"
        placeholder="Kategori (Music, Seminar, dll)"
        className="border p-2 w-full mb-3 rounded"
      />

      {/* Tanggal */}
      <input
        type="date"
        className="border p-2 w-full mb-3 rounded"
      />

      {/* Harga */}
      <input
        type="number"
        placeholder="Harga"
        className="border p-2 w-full mb-3 rounded"
      />

      {/* Lokasi */}
      <input
        type="text"
        placeholder="Lokasi Event"
        className="border p-2 w-full mb-3 rounded"
      />

      {/* Image URL */}
      <input
        type="text"
        placeholder="Image URL (poster event)"
        className="border p-2 w-full mb-4 rounded"
      />

      <button
        type="button"
        onClick={() => console.log("Submit Event")}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Simpan
      </button>
    </form>
  );
}
