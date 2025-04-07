'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  // Sadece istemci tarafında render edildiğinden emin oluyoruz
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Server tarafında veya ilk render sırasında tema uygulamadan sadece içeriği göster
    return <>{children}</>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
