import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            {/* Left side - Social/Professional Links */}
            <div className="footer-content">
                <Link href="https://github.com/mathanta">
                    <Image className='link-icon' src="/github.svg" alt="github logo" width={30} height={30} />
                </Link>
                <Link href="https://linkedin.com/in/yourprofile">
                    <Image id='linkedin' className='link-icon' src="/linkedin.svg" alt="linkedin logo" width={30} height={30} />
                </Link>
            </div>
            <div className="footer-right">
                <p>© 2025 Ethan Matta</p>
                <Link
                    href="/Resume-2025.docx"
                    download="Resume-2025.docx"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Resume
                </Link>
                <Link href="/contact">Contact</Link>
            </div>
        </footer>
    );
};


export default Footer;