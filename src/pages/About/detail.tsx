import { DetailDataType } from '@/models/About'
import { AboutType } from '@/models/InformationConfigType'
import { Collapse, Text } from '@nextui-org/react'
import { Fragment, useMemo } from 'react'
import { useMediaQuery } from 'react-responsive'

const AboutDetail: React.FC<{ detail: DetailDataType[] }> = ({ detail }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  return (
    <>
      <Collapse.Group css={{ paddingLeft: '0px', marginTop: '2em' }}>
        {detail.map((item, index) => {
          return (
            <Fragment key={index}>
              {index === 0 || isMobile ? (
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
  )
}

export default AboutDetail
