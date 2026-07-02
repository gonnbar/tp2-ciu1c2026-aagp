export default function Loading() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-4
        p-10
      "
    >
      <div
        className="
          h-10
          w-10
          animate-spin
          rounded-full
          border-4
          border-violet-300
          border-t-violet-700
        "
      />

      <p className="text-gray-500">Cargando...</p>
    </div>
  );
}
