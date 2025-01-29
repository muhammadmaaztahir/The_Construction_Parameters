import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/elitecons.css"
import "public/assets/css/elitecons-responsive.css"
import Head from "next/head"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { yantramanav } from '@/lib/font'
export const metadata = {
    title: 'The Construction Parameters | Construction Company',
    description: 'A Construction Company',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${yantramanav.variable}`}>
            <Head>
                <link rel="icon" href="/icon.ico" />
                <link rel="apple-touch-icon" href="/icon.ico" />
            </Head>
            <body>{children}</body>
        </html>
    )
}
