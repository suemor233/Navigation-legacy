import styles from './index.module.scss'
const CardContent: React.FC<React.PropsWithChildren<{}>> = ({ children }: React.PropsWithChildren<{}>): JSX.Element => {
  return (
    <>
      <div
        className={
          styles['card'] +
          ' flex md:flex-col flex-row bg-white rounded-2xl transition-all duration-400 transform animate__animated animate__rollIn '
        }
      >
        {children}
      </div>
    </>
  )
}
export default CardContent
