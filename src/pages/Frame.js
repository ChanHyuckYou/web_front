import AuthInput from "../components/AuthInput";
import styles from "./Frame.module.css";

const Frame = () => {
    return (
        <div className={styles.div}>
            <div className={styles.appSignup}>
                <i className={styles.appNupan}>APP-nupan</i>
            </div>
            <div className={styles.child} />
            <section className={styles.authInputWrapper}>
                <AuthInput />
            </section>
        </div>
    );
};

export default Frame;
