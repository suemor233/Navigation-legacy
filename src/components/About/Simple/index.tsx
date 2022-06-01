import UserStore from '@/store/user'

const AboutSimple: React.FC<{ userStore: UserStore }> = ({ userStore }) => {
  return (
    <>
      <div className="flex flex-col justify-around  md:text-sm">
        {userStore.ArrAboutSimple.map((item, index) => {
          return (
            <div className="flex flex-row justify-around mt-5" key={index}>
              <div className="flex-1">
                <span className="font-bold">{item[0].Aboutkey}: </span>
                <span className="ml-1">{item[0].Aboutvalue}</span>
              </div>
              <div className="flex-1 ml-10">
                <span className="font-bold">{item[1].Aboutkey}: </span>
                <span className="ml-1">{item[1].Aboutvalue}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AboutSimple
