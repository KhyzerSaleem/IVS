import Image from "next/image";

export default function LogoCompanies() {
  return (
    <section>
      <div className="w-full py-10 bg-[#052C4F]">
        <div className="container mx-auto flex md:justify-around   flex-wrap justify-center gap-6 px-4">
          {["1.jpg", "2.jpg", "3.jpg", "4.png", "5.jpg"].map((img, i) => (
            <div
              key={i}
              className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] md:w-[125px] md:h-[125px] relative shadow-lg shadow-gray-900"
            >
              <Image
                src={`/assets/Logos/${img}`}
                alt={`Client ${i + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
