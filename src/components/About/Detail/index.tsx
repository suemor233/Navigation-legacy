import UserStore from '@/store/user';
import { Collapse, Text } from '@nextui-org/react'
import { Fragment } from 'react';

const AboutDetail: React.FC<{ userStore: UserStore }> = ({ userStore }) => {
 return (
   <>    
     <Collapse.Group css={{ paddingLeft: '0px', marginTop: '2em' }}>
          {userStore.user.about.details.map((item, index) => {
            return (
              <Fragment key={index}>
                {index === 0 ? (
                  <Collapse title={item.title} expanded>
                    <Text dangerouslySetInnerHTML={{ __html: item.content }}></Text>
                  </Collapse>
                ) : (
                  <Collapse title={item.title}>
                    <Text dangerouslySetInnerHTML={{ __html: item.content }}></Text>
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