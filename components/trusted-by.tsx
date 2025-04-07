import Image from "next/image"

export default function TrustedBy() {
  return (
    <div>
      <h2 className="text-center text-2xl font-medium text-gray-600 mb-10">
        Türkiye'nin önde gelen restoranları tarafından tercih edildi
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-12 hover:opacity-100 transition-opacity">
            <Image
              src={`/images/partner-${i}.png`}
              alt={`Partner ${i}`}
              width={120}
              height={48}
              className="h-full w-auto grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

