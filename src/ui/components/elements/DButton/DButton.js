import styles from './DButton.module.scss'

const DButton = {
    Primary: function Primary({ children }) {
    return <button className={styles['--primary']}>{children}</button>
    },
    Secondary: function Secondary({ children }) {
        return <button className={styles['--secondary']}>{children}</button>
    },
    Tertiary: function Secondary({ children }) {
        return <button className={styles['--tertiary']}>{children}</button>
    }
}

export default DButton