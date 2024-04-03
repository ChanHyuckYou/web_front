import styles from "../css/Sign/AuthInput.css"

const AuthInput = () => {
    return (
        <div className={styles.authInput}>
            <i className={styles.nicknameInput}>회원가입</i>
            <div className={styles.okButton}>
                <form className={styles.emailInput}>
                    <div className={styles.passwordInput}>
                        <div className={styles.confirmPasswordInput}>
                            <i className={styles.id}>ID</i>
                        </div>
                        <div className={styles.nicknameConfirmation}>
                            <input className={styles.inputid} type="text" />
                        </div>
                        <button className={styles.nickok}>
                            <div className={styles.nickokChild} />
                            <i className={styles.idok}>ID 중복확인</i>
                        </button>
                    </div>
                    <div className={styles.passwordInput1}>
                        <div className={styles.frameParent}>
                            <input
                                className={styles.frameChild}
                                placeholder="비밀번호"
                                type="text"
                            />
                            <div className={styles.inputconfpwd} />
                        </div>
                    </div>
                    <div className={styles.passwordInput2}>
                        <div className={styles.frameGroup}>
                            <input
                                className={styles.frameItem}
                                placeholder="비밀번호 확인"
                                type="text"
                            />
                            <div className={styles.pwdconff} />
                        </div>
                    </div>
                    <div className={styles.passwordInput3}>
                        <div className={styles.emailWrapper}>
                            <i className={styles.email}>이메일</i>
                        </div>
                        <div className={styles.inputpwdWrapper}>
                            <div className={styles.inputpwd} />
                        </div>
                        <button className={styles.confrimpwd2}>
                            <div className={styles.confrimpwd2Child} />
                            <i className={styles.emailauthen}>인증번호 발송</i>
                        </button>
                    </div>
                    <div className={styles.passwordInput4}>
                        <div className={styles.frameContainer}>
                            <input
                                className={styles.frameInner}
                                placeholder="인증번호"
                                type="text"
                            />
                            <div className={styles.pwdcf} />
                        </div>
                    </div>
                    <div className={styles.nextBtnLabel}>
                        <button className={styles.nextform}>
                            <div className={styles.nextformChild} />
                            <i className={styles.nexybtn}>다음으로</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthInput;
