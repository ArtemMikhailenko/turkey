import Link from 'next/link'
import { FC } from 'react'
import { FaChevronRight } from 'react-icons/fa'

interface Crumb { label: string; href?: string }
interface BreadcrumbsProps { crumbs: Crumb[] }

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ crumbs }) => (
  <nav className="text-sm text-gray-500 flex items-center space-x-1 mb-4">
    {crumbs.map((c, i) => (
      <span key={i} className="flex items-center">
        {c.href ? (
          <Link href={c.href} className="hover:underline">{c.label}</Link>
        ) : (
          <span className="font-medium text-gray-800">{c.label}</span>
        )}
        {i < crumbs.length - 1 && (
          <FaChevronRight className="mx-2 text-xs" />
        )}
      </span>
    ))}
  </nav>
)
