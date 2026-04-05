import '@/assets/scss/globals.scss'
import Navigation from "@/global_components/Navigation"
import Footer from "@/global_components/Footer"
import AuthProvider from './context/AuthProvider'

import { Toaster } from 'sonner'

export const metadata = {
  title: 'Mindmap Flow',
  description: 'Học tập hiệu quả với bản đồ tư duy',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className='font-custom'>
            <body>
                <AuthProvider>
                    <Navigation />
                    {children}
                    <Footer />
                </AuthProvider>

                <Toaster richColors position="top-right" />
            </body>
        </html>
    )
}