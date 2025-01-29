import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/elitecons.css"
import "public/assets/css/elitecons-responsive.css"



import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import {yantramanav} from '@/lib/font'
export const metadata = {
    title: 'Elitecons',
    description: 'React Next Js Construction Template',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${ yantramanav.variable }`}>
            <body>{children}</body>
        </html>
    )
}
