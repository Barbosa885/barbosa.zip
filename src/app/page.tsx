import Image from "next/image";
import WinWallpaper from "../assets/WinWallpaper.jpg";
import RetroBar from "../components/RetroBar";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={WinWallpaper}
        alt="Windows XP Wallpaper"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100} // Garante a melhor qualidade possível       object-fit="cover"
      />
      <RetroBar />
    </div>
  )
}
