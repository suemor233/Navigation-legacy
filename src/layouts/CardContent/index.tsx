import styles from './index.module.scss'
const CardContent: React.FC<React.PropsWithChildren<{}>> = ({ children }: React.PropsWithChildren<{}>): JSX.Element => {
  return (
    <>
      <div
        className={
          styles['card'] +
          ' flex relative flex-col md:flex-row bg-white card rounded-2xl transition-transform duration-400 transform '
        }
        style={{ height: '40em', width: '70em' }}
      >
        {children}
      </div>
    </>
  )
}
export default CardContent
