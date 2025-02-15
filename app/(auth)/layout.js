import { Inter } from 'next/font/google' 
import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import { Clerk } from '@clerk/nextjs/server'


export const metadata = {   
    title: 'Auth',
    description: 'next 14 social media app'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-purple-1`}>{children}</body>
            </html>
        </ClerkProvider>
    );
}