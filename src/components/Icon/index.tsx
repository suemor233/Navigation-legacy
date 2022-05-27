import styles from './index.module.scss'

const Icon: React.FC<{id:string}> = ({id}):JSX.Element => {
  return (
    <>
      <svg className={styles['icon-my']}>
        <use href={`#${id}`} />
      </svg>
    </>
  )
}

export default Icon