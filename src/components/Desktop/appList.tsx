import React from 'react'
import Image from 'next/image'
import { AppType } from '@/types/types'

interface AppItemProps {
  index: number
  name: string
  icon: string
  type?: AppType
} 

function AppList({ index, name, icon, type }: AppItemProps) {
  return (
    <div className="flex flex-col items-center justify-start w-20 gap-1 p-2 cursor-pointer group">
      <Image
        src={`/assets/icons/${icon}.png`}
        alt={name}
        width={32}
        height={32}
      />
      <span className="px-1 text-xs text-center text-white border border-transparent select-none line-clamp-2 group-hover:bg-win-blue group-hover:border-white group-hover:border-dotted">
        {name}
      </span>
    </div>
  )
}

export default AppList