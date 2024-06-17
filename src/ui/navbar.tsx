import Link from "next/link"
import styles from "../app/page.module.css"

export default function Navbar() {
  return (
    <div className={styles.menu}>
      <nav>
        <Link href="/admin/colaborador">Colaborador</Link>
        <Link href="/admin/projeto">Projeto</Link>
      </nav>
    </div>
  )
}
