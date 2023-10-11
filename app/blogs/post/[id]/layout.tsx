import React from 'react'

function BlogPostLayout({children}:{children: React.ReactNode}) {
  return (
    <div className="relative z-30 w-full dark:text-white">{children}</div>
  )
}

export default BlogPostLayout