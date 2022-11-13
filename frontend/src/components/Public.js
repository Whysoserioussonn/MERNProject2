import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1> You've Reached the Maintenance/Repair Shop for <span className="nowrap">Spectrum Inc. </span></h1>
            </header>
            <main className="public__main">
                <p>Please Login in at the bottom where it says Employee Login.</p>
                <address className="public__addr">
                    Fill Out Repair Note on Next Page<br />
                    After Loggin in<br />
                    Any Questions/Concerns<br />
                    Ask for Tito, Head Maintenance <br />
                    <a href="tel:+15555555555">Call (555) 867-5309</a>
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