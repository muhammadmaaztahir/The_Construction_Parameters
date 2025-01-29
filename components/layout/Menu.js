import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <Link href="/">Home</Link>
                    {/* <ul>
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="index-2">Home Two</Link></li>
                        <li><Link href="index-3">Home Three</Link></li>
                        <li><Link href="index-4">Home Four</Link></li>
                        <li><Link href="index-5">Home Five</Link></li>
                    </ul> */}
                </li>

                <li>
                    <Link href="#about">About</Link>
                </li>

                <li>
                    <Link href="#services">Services</Link>
                </li>

                <li>
                    <Link href="#projects">Projects</Link>
                </li>
                <li>
                    <Link href="#testimonials">Testimonials</Link>
                </li>

                {/* <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                </li> */}
                {/* <li>
                    <Link href="contact">Contact</Link>
                </li> */}
            </ul>
        </>
    )
}
