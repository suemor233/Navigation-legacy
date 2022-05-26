const CardContent: React.FC<React.PropsWithChildren<{}>> = ({ children }: React.PropsWithChildren<{}>): JSX.Element => {
  return (
    <>
      <div
        className="flex relative flex-col md:flex-row bg-white shadow-2xl rounded-2xl transition-transform duration-400 transform  hover:scale-101"
        style={{ height: '40em', width: '70em' }}
      >
        {children}
      </div>
    </>
  )
}
export default CardContent
