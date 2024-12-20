import Link from 'next/link'

import { DeveloperInfo } from './DeveloperInfo'
import { cn } from '../../util'

export interface IBrandProps {}

export const Brand = () => {
  return (
    <div>
      <Link href="/" className={cn('hover:underline underline-offset-4')}>
        <div className="text-2xl font-bold">Trello Clone</div>
      </Link>
      <DeveloperInfo />
    </div>
  )
}
