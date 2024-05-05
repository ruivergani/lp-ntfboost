import {Inter, Poppins} from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

// Declare all fonts
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Landing Page NFTBoost',
  description: 'Project created to practice NextJS, Shadcn/ui, and TailwindCSS library.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
