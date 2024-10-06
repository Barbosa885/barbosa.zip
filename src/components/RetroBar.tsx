'use client'
import { useState } from 'react'
import Image from 'next/image'
import WinIcon from '../assets/icons/icons8-windows-xp-96.svg'

export default function RetroBar() {
  const [startMenuOpen, setStartMenuOpen] = useState(false)

  return (
    <div className="fixed bottom-0 bg-retroGray h-12 w-full border-t border-gray-400 flex items-center text-sm">
      <div className="flex items-center">
        <button className="px-2" onClick={() => setStartMenuOpen(!startMenuOpen)} >
          <Image 
            src={WinIcon}
            height={46}
            width={46}
            alt="Windows Menu icon"
          />
        </button>
        <span>Start</span>
      </div>
    </div>
  );
}