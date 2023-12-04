import { LogOut } from 'lucide-react'
import { Button } from '../Button'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        width={40}
        height={40}
        src="/Title.jpg"
        className="h-10 w-10 rounded-full"
        alt=""
        style={{ objectFit: 'contain' }}
      />
      <div className="flex flex-col truncate">
        <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-100">
          Walber Araujo
        </span>
        <span className="truncate text-xs text-zinc-500 dark:text-zinc-400">
          walber.menezes@hotmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
