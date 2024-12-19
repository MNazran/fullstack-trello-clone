import { Heart } from 'lucide-react'
import Link from 'next/link'
import { cn } from '../../util'
import React = require('react')

export interface IDeveloperInfoProps {
  className?: string
}

export const DeveloperInfo = ({ className }: IDeveloperInfoProps) => {
  return (
    <Link href="#" target="_blank" className={cn('text-xs group ', className)}>
      <div className="flex items-center gap-1 group-hover:underline underline-offset-4">
        Made with by Karthick Ragavendran
      </div>
    </Link>
  )
}
