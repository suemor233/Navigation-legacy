
import { AboutType } from '@/models/InformationConfigType';
import UserStore from '@/store/user';
import { Collapse, Text } from '@nextui-org/react'
import { Fragment, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

const AboutDetail: React.FC<{ aboutData: AboutType[] }> = ({ aboutData }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })
  const ArrProgress = useMemo(() => {
    aboutData = aboutData.filter(item => item.detailFlag === true)
    return aboutData
  }, [aboutData])

 return (
   <>    
     <Collapse.Group css={{ paddingLeft: '0px', marginTop: '2em' }}>
          {ArrProgress.map((item, index) => {
            return (
              <Fragment key={index}>
                
                {index === 0 || isMobile ? (
                  <Collapse title={item.key} expanded>
                    <Text dangerouslySetInnerHTML={{ __html: item.value }}></Text>
                  </Collapse>
                ) : (
                  <Collapse title={item.key} >
                    <Text dangerouslySetInnerHTML={{ __html: item.value }}></Text>
                  </Collapse>
                )}
              </Fragment>
            )
          })}
        </Collapse.Group>
   </> 
 ); 
}; 

export default AboutDetail;