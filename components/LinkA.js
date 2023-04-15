import styles from './LinkA.module.scss';
import Link from "next/link";

const LinkA = ({href, text}) => {
    return (
        <Link className={styles.link} href={href}>{text}</Link>
    );
};

export default LinkA;