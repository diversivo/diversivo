import React from 'react'
import { Link } from "gatsby"

const SeccionQueHacemos = () => (
    <div className="container bg-white">
        <div className="content" style={{
            padding: `10rem 0 6rem 0`,
        }}>
            <div className="flex-cc" style={{
                textAlign: `center`,
            }}>
                <pre style={{
                    color: `#A8A8A8`,
                    fontSize: `1.25rem`,
                }}>
                    TE PODEMOS AYUDAR EN
                </pre>
                <h1 className="seccionQueHacemos__title">
                    Desarrollo de Software,<br></br>Branding y Marketing Digital.
                </h1>
                <Link className="content__link" to="/que-hacemos/">QUE HACEMOS</Link>
            </div>
        </div>
    </div>
)

export default SeccionQueHacemos