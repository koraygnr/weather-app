import React from "react";
import styles from "./Footer.module.css"
import github from "../../assets/github.svg"

function Footer() {

    return (
        <div className="col mt-3 text-end">
            <a href="https://github.com/koraygnr" className={styles.footer}><img className={styles.githubIcon} src={github} alt="" /></a>
        </div>
    )
}

export default Footer