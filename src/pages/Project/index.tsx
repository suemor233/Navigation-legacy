import styles from './index.module.scss'
const Project: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 transition-all items-center h-full overflow-y-auto">
        <div className={styles.wrapper + ' flex flex-col '}>
          <div className="relative">
            <img
              className={styles.imgCard}
              src="https://cdn.jsdelivr.net/gh/suemor233/static@main/img/image2.jpg"
              alt="启始页"
            />
            <div className={styles.link}>
              <a className={styles.details} href="https://paul.ren/project/tools">
                详情
              </a>
            </div>
          </div>
          <div>
            <p className="text-center mt-1 lg:mt-0.5 text-xl font-sans">suemor 启始页</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
