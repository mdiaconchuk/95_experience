import Image from 'next/image'
import { AppType } from '@/types/types'
import { AppContext } from '@/context/AppContext'
import { useContext } from 'react'

interface AppItemProps {
  app: AppType,
  index: number
} 

function AppList({ app }: AppItemProps) {
  const context = useContext(AppContext);
  if(!context) return null;
  const { openApp } = context;
  
  return (
    <div className="flex flex-col items-center justify-start w-20 gap-1 p-2 cursor-pointer group"
      onDoubleClick={() => openApp(app)}>
      <Image
        src={`/assets/icons/${app.icon}.png`}
        alt={app.name}
        width={32}
        height={32}
      />
      <span className="px-1 text-xs text-center text-white border border-transparent select-none line-clamp-2 group-hover:bg-win-blue group-hover:border-white group-hover:border-dotted">
        {app.name}
      </span>
    </div>
  )
}

export default AppList