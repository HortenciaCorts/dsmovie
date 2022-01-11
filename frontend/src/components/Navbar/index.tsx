import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css'

export function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovide-nav-content'>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/HortenciaCorts/">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/HortenciaCorts</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}