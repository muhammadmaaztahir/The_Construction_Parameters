'use client'
import Layout from "@/components/layout/Layout"

export default function Home() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Terms and Conditions">
                <section className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <h3
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        marginBottom: '2rem',
                                    }}
                                    className="error-page__tagline"
                                >
                                    Terms and Conditions
                                </h3>
                                <div
                                    style={{
                                        textAlign: 'start',
                                        lineHeight: '1.8',
                                        marginBottom: '2rem',
                                    }}
                                    className="error-page__inner"
                                >
                                    <p>
                                        Welcome to <strong>The Construction Parameters</strong>.
                                        These terms and conditions outline the rules and regulations
                                        for the use of our website and services.<br />
                                        By accessing or using our Website, you accept these terms and
                                        conditions in full. If you disagree with any part of these
                                        terms, please do not use our Website or services.
                                    </p>

                                    <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                                        1. Use of the Website
                                    </h2>
                                    <p>
                                        You agree to use the Website only for lawful purposes and in a
                                        way that does not infringe on the rights of others or restrict
                                        or inhibit their use and enjoyment of the Website. Prohibited
                                        behavior includes harassing or causing distress or
                                        inconvenience to any other user and transmitting obscene or
                                        offensive content.
                                    </p>

                                    <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                                        2. Intellectual Property
                                    </h2>
                                    <p>
                                        The content on this Website, including but not limited to text,
                                        graphics, images, logos, and software, is the property of{' '}
                                        <strong>The Construction Parameters</strong> and is protected
                                        by applicable copyright, trademark, and intellectual property
                                        laws. You may not reproduce, distribute, or create derivative
                                        works without prior written consent from us.
                                    </p>

                                    <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                                        3. User-Generated Content
                                    </h2>
                                    <p>
                                        When you submit content to our Website, including but not
                                        limited to reviews, comments, or other material, you grant us a
                                        non-exclusive, royalty-free, perpetual, and worldwide license
                                        to use, reproduce, modify, and distribute the content for any
                                        purpose related to our business.
                                    </p>

                                    <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                                        4. Disclaimer of Warranties
                                    </h2>
                                    <p>
                                        Our Website and services are provided on an "as is" and "as
                                        available" basis. We do not warrant that the Website will be
                                        error-free, uninterrupted, or free of viruses or other harmful
                                        components. Use of the Website is at your own risk.
                                    </p>

                                    <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                                        5. Limitation of Liability
                                    </h2>
                                    <p>
                                        <strong>The Construction Parameters</strong> shall not be held
                                        liable for any direct, indirect, incidental, or consequential
                                        damages arising out of or related to the use or inability to
                                        use our Website or services. This includes loss of data,
                                        profits, or business opportunities.
                                    </p>

                                    <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                                        6. Indemnification
                                    </h2>
                                    <p>
                                        You agree to indemnify and hold harmless{' '}
                                        <strong>The Construction Parameters</strong> and its employees,
                                        contractors, and affiliates from any claims, damages, or
                                        expenses (including legal fees) arising from your use of the
                                        Website or violation of these terms.
                                    </p>

                                    <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                                        7. Third-Party Links
                                    </h2>
                                    <p>
                                        Our Website may contain links to third-party websites. These
                                        links are provided for your convenience and do not signify our
                                        endorsement of the content. We have no control over the content
                                        or privacy practices of these external sites and accept no
                                        responsibility for them.
                                    </p>

                                    <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                                        8. Termination
                                    </h2>
                                    <p>
                                        We reserve the right to terminate or suspend your access to our
                                        Website at any time, without prior notice, for any reason,
                                        including if you breach these terms and conditions.
                                    </p>

                                    <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                                        9. Changes to Terms
                                    </h2>
                                    <p>
                                        We may revise these terms and conditions from time to time.
                                        When we do, we will post the updated terms on this page with an
                                        updated "Effective Date." Continued use of the Website after
                                        changes constitutes your acceptance of the new terms.
                                    </p>

                                    <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                                        10. Governing Law
                                    </h2>
                                    <p>
                                        These terms and conditions are governed by and construed in
                                        accordance with the laws of [Your Jurisdiction], and you
                                        irrevocably submit to the exclusive jurisdiction of the courts
                                        in that location.
                                    </p>

                                    <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                                        11. Contact Us
                                    </h2>
                                    <p>If you have any questions or concerns regarding these terms and conditions, please contact us:</p>
                                    <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                                        <li>
                                            <strong>Email:</strong>{' '}
                                            <a href="mailto:thesmartsolutions72@gmail.com">
                                                thesmartsolutions72@gmail.com
                                            </a>
                                        </li>
                                        <li>
                                            <strong>Phone:</strong>{' '}
                                            <a href="tel:+923365491349">(+92) 336 5491 349</a>
                                        </li>
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
