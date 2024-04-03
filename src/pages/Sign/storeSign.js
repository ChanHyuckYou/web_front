import styles from "../../css/frame.css"

const Frame = () => {
    return (
        <div className={styles.div}>
            <div className={styles.div1} />
            <div className={styles.div2} />
            <div className={styles.div3} />
            <div className={styles.div4} />
            <i className={styles.i}>이름</i>
            <i className={styles.i1}>전화번호</i>
            <i className={styles.i2}>가게이름</i>
            <i className={styles.i3}>가게주소</i>
            <div className={styles.div5} />
            <i className={styles.i4}>지점</i>
            <div className={styles.div6}>
                <div className={styles.child} />
                <i className={styles.i5}>회원가입 신청</i>
            </div>
            <i className={styles.appNupan}>APP-nupan</i>
            <i className={styles.i6}>회원가입</i>
            <div className={styles.item} />
        </div>
    );
};

export default Frame;
