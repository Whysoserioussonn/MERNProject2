import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Spectrum Inc. </span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Hollywood, Spectrm Inc.  provides a trained staff ready to meet your maintenance/repair needs.</p>
                <address className="public__addr">
                    Spectrum<br />
                    50 Blanch Ave<br />
                    Hollywood, CA 90210<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Spectrum Inc.</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public