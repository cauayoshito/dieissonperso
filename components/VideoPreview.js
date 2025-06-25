import { useRouter } from "next/router";
import Image from "next/image";

export default function VideoPreview({ series }) {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {series.map((s) => (
        <div
          key={s.id}
          onClick={() => router.push("#planos")}
          className="cursor-pointer bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
        >
          <div className="relative w-full h-40">
            <Image
              src={s.thumbnail}
              alt={s.title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-2 text-center text-lg font-semibold text-white">
            {s.title}
          </h3>
        </div>
      ))}
    </div>
  );
}
