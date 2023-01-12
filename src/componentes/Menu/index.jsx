import styles from './Menu.module.scss';
import icones from './icons.json';
import Icone from './Icones';

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {icones.map(icone => (<Icone key={icone.id} icone={icone} style={styles} />))}
            </ul>
        </nav>
    )
}
