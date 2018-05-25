import React from 'react'
import '../../css/App.css'
import Flexbox from 'flexbox-react'

const Name = () => {
  return (
    <Flexbox 
      flexDirection='column' 
      alignItems='center'
      justifyContent='center'
      width='100vw'
      maxWidth='100vw'
      style={{backgroundColor:'#131515',}}
      padding='25vh 0px 25vh 0px'
    >
      <Flexbox flexDirection='column' maxWidth='800px'>
        <Flexbox 
          padding='0vw 3vw 0vw 3vw' 
          style={styles.nameContainer}
        >
          <div style={styles.titleName}> 
            McComb
          </div>
        </Flexbox>

        <Flexbox 
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          style={styles.subRow}
        >
          <Flexbox 
            alignItems='center'
            justifyContent='center'
          >
            <div style={{paddingRight: '4vw'}}>
              Graphic Design
            </div>
          </Flexbox>
          <Flexbox 
            alignItems='center'
            justifyContent='center'
          >
            <div >
              Web Design & Developer
            </div>
          </Flexbox>
          <Flexbox 
            alignItems='center'
            justifyContent='center'
          >
            <div style={{paddingLeft: '4vw'}}>
              QA Engineer
            </div>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  )
} 

const styles = {
  titleName: {
    fontFamily: 'FuturaPTBook',
    color: '#7de2d1',
    fontSize: 'calc(30px + 10vw)',
    lineHeight: 'calc(30px + 10vw)',
  },
  nameContainer: {
    padding: '0vw 3vw 0vw 3vw',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subRow: {
    overflow: 'hidden',
    fontFamily: 'Calendas_Plus',
    fontSize: 'calc(10px + .8vw)',
    lineHeight: 'calc(10px + .8vw)',
    color: '#339989',
    padding: '10px 2vw 0px 2vw',
    borderTop: '2px solid #339989'
  },
}

export default Name;