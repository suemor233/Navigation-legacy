
import { AboutType } from '@/models/InformationConfigType'
import { useMemo } from 'react'

const AboutSimple: React.FC<{ aboutData: AboutType[] }> = ({ aboutData }) => {
  const ArrProgress = useMemo(() => {
    aboutData = aboutData.filter(item => item.detailFlag === false)
    const _arr: Array<AboutType[]> = []
    aboutData.forEach((item, index) => {
      if (index % 2 === 0) {
        _arr.push([item])
      } else {
        _arr[_arr.length - 1].push(item)
      }
    })
    return _arr
  }, [aboutData])

  return (
    <>
      <div className="flex flex-col justify-around  md:text-sm">
        {ArrProgress.map((item, index) => {
          return (
            <div className="flex flex-row justify-around mt-5" key={index}>
              <div className="flex-1">
                <span className="font-bold">{item[0].key}: </span>
                <span className="ml-1">{item[0].value}</span>
              </div>

              {item[1] && (
                <div className="flex-1 ml-10">
                  <span className="font-bold">{item[1].key}: </span>
                  <span className="ml-1">{item[1].value}</span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AboutSimple
