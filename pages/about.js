import styles from '../styles/About.module.css'
// import Image is a component that Next.js makes called Image, that takes images out of the public folder
import Image from 'next/image'

const About = () => {
    return (
        <div>
            <h1>
                All About me
            </h1>  
            <p className={styles.textWhite}>
                Something else about me. I think therefore I am. I made this app in Next.js!
            </p>
            <br />
            <p className={styles.textWhite}>
                A second p-tag
            </p>
            {/* How to load an image locally */}
            <Image
                src='/vercel.svg'
                alt='logo'
                width={300}
                height={300}
            />

            {/* load an image hosted on another domain */}
            {/* to make this work, whitelist the domain in next.config.js */}
            <Image
                src='https://placekitten.com/400/500'
                alt='portfolio cat'
                width={400}
                height={500}
            />
        </div>
    );
};

export default About;