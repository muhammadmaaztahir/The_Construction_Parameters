'use client'
import Layout from "@/components/layout/Layout"

export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Privacy Policy">
                <section className="error-page" style={{ padding: "50px 0" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '30px' }} className="error-page__tagline">
                                    Privacy Policy
                                </h3>
                                <div style={{ textAlign: 'start', lineHeight: '1.8', marginBottom: '20px' }} className="error-page__inner">
                                    <p>
                                        At <strong>The Construction Parameters</strong>, we value and respect your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website, and when you engage with our services.<br />
                                        By accessing or using our Website, you consent to the collection and use of your personal data in accordance with this Privacy Policy. If you do not agree with our practices, please refrain from using our Website.
                                    </p>

                                    <h2 style={{ marginTop: '40px', marginBottom: '15px' }}>1. Information We Collect</h2>
                                    <p>We collect information that you provide directly to us when you use our services, make inquiries, or interact with our Website. This includes:</p>
                                    <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                                        <li><strong>Personal Information:</strong> Your name, email address, phone number, mailing address, and any other information you provide to us through forms or when you reach out for services.</li>
                                        <li><strong>Service-Related Information:</strong> Details of the services you inquire about or request, such as the type of construction/renovation services, specifications, and project-related data.</li>
                                        <li><strong>Technical Information:</strong> Data about your device, IP address, browser type, operating system, and other technical details gathered automatically when you visit our Website.</li>
                                    </ul>

                                    <h2 style={{ marginTop: '40px', marginBottom: '15px' }}>2. How We Use Your Information</h2>
                                    <p>We use the information we collect for the following purposes:</p>
                                    <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                                        <li><strong>Providing Services:</strong> To process your requests, manage projects, and provide customer support.</li>
                                        <li><strong>Communication:</strong> To respond to your inquiries, provide you with quotes or updates on services, and send promotional content or newsletters if you have opted in.</li>
                                        <li><strong>Website Improvement:</strong> To analyze user behavior on our Website to improve the content and functionality, and enhance your user experience.</li>
                                        <li><strong>Legal and Compliance:</strong> To comply with legal obligations or to resolve disputes.</li>
                                    </ul>

                                    <h2 style={{ marginTop: '40px', marginBottom: '15px' }}>3. Sharing Your Information</h2>
                                    <p>We do not sell, rent, or share your personal information with third parties for their marketing purposes. However, we may share your information with trusted service providers who assist us in operating our Website and delivering services, such as:</p>
                                    <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                                        <li><strong>Payment Processors:</strong> For billing and payment purposes.</li>
                                        <li><strong>Service Providers:</strong> For project management, construction services, and technical support.</li>
                                        <li><strong>Legal Authorities:</strong> If required by law, to comply with legal processes or to protect our rights.</li>
                                    </ul>
                                    <p>We ensure that these service providers are obligated to protect your information and use it only for the purposes we specify.</p>

                                    <h2 style={{ marginTop: '40px', marginBottom: '15px' }}>4. Data Security</h2>
                                    <p>We take reasonable precautions to protect your personal information from unauthorized access, loss, or alteration. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.</p>

                                    <h2 style={{ marginTop: '40px', marginBottom: '15px' }}>5. Your Rights and Choices</h2>
                                    <p>You have the right to:</p>
                                    <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                                        <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                                        <li><strong>Correction:</strong> Request that we correct or update any inaccurate or incomplete data.</li>
                                        <li><strong>Deletion:</strong> Request that we delete your personal information, subject to certain exceptions.</li>
                                        <li><strong>Opt-Out:</strong> If you no longer wish to receive marketing emails or communications, you can opt-out by clicking the "unsubscribe" link in the email or contacting us directly.</li>
                                    </ul>
                                    <p>To exercise any of these rights, please contact us using the details provided below.</p>

                                    <h2 style={{ marginTop: '40px', marginBottom: '15px' }}>6. Cookies</h2>
                                    <p>We use cookies and similar technologies to enhance your experience on our Website. Cookies are small files stored on your device that help us analyze traffic, remember your preferences, and improve your user experience. You can control or disable cookies through your browser settings.</p>

                                    <h2 style={{ marginTop: '40px', marginBottom: '15px' }}>7. Third-Party Links</h2>
                                    <p>Our Website may contain links to third-party websites. We are not responsible for the content, privacy practices, or security of these websites. We encourage you to review their privacy policies before providing any personal information.</p>

                                    <h2 style={{ marginTop: '40px', marginBottom: '15px' }}>8. Children’s Privacy</h2>
                                    <p>Our Website and services are not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</p>

                                    <h2 style={{ marginTop: '40px', marginBottom: '15px' }}>9. Changes to This Privacy Policy</h2>
                                    <p>We may update this Privacy Policy from time to time. When we do, we will post the revised policy on this page with an updated "Effective Date." We encourage you to review this page periodically to stay informed about how we are protecting your information.</p>

                                    <h2 style={{ marginTop: '40px', marginBottom: '15px' }}>10. Contact Us</h2>
                                    <p>If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us:</p>
                                    <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                                        <li><strong>Email:</strong> <a href="mailto:thesmartsolutions72@gmail.com">thesmartsolutions72@gmail.com</a></li>
                                        <li><strong>Phone:</strong> <a href="tel:+923365491349">(+92) 336 5491 349</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
