import styles from './DDragdrop.module.scss'


const DDragdrop = {
    Area: function Area({ children, legend }) {
        return <div className={styles['__area']}>
            <div className={styles['__area__legend']}>{legend}</div>
            {children}
        </div>
    },
    Item: function Item({ children }) {
        return <div className={styles['__item']} draggable="true">
            {children}
            <div className={styles['__actions']}>
                <button className={styles['__edit']}></button>
                <button className={styles['__delete']}></button>
            </div>
        </div>
    },
    Operator: function Operator({ value }) {
        return <div className={styles[`__operator--${value}`]}>{value}</div>
    },
    Field: function Field({ placeholder }) {
        return <input type="text" className={styles['__field']} placeholder={placeholder} />
    },
    Group: function Group({ children, legend }) {
        return <div className={styles['__group']}>
            <div className={styles['__group__legend']}>{legend}</div>
            {children}
        </div>
    },
}

export default DDragdrop