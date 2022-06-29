import { DetailDataType } from '@/models/About'
import ReactMarkdown from 'react-markdown'
import { Collapse, Text } from '@nextui-org/react'
import { Fragment, useMemo } from 'react'
import remarkGfm from 'remark-gfm'
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
                  <ReactMarkdown children={item.content} remarkPlugins={[remarkGfm]} />
                </Collapse>
              ) : (
                <Collapse title={item.title}>
                  <ReactMarkdown children={item.content} remarkPlugins={[remarkGfm]} />
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
