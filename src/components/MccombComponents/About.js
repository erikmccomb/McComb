import React from 'react'
import Flexbox from 'flexbox-react'
import { Image } from 'semantic-ui-react'
import me from '../../images/me.jpg'
import logo from '../../images/logo.svg'

const About = () => {
  return (
    <Flexbox 
      flexDirection='column' 
      width='100vw'
      alignItems='center'
      style={{backgroundColor:'#FFFAFB'}}
    >
      <Flexbox 
        flexDirection='row' 
        width='800px' 
        maxWidth='95vw' 
        margin='30px 0px 0px 0px'
        style={{backgroundColor:'#131515', padding:'10px', color:'#fefcfb'}}
      >
        <Flexbox 
          flexDirection='column' 
          alignContent='center' 
          justifyContent='center'
        >
          <Flexbox 
            flexDirection='column' 
            padding='0px 10px 10px 0px' 
            justifyContent='center'
          >
            <div style={{fontSize:'18px', fontFamily:'Hughs', color: '#7de2d1',}}>
              Hello,  I'm Erik McComb
            </div>
            <div style={{fontSize:'16px', fontFamily:'Monofur'}}>
              Developer, Father, Popcorn Enthousiast
            </div>
          </Flexbox>
          <Flexbox 
            flexDirection='column' 
            style={{fontSize:'14px', fontFamily:'Monofur', textAlign:'justify', paddingRight:'10px'}}
          >
            <p>
              I'm a web designer & developer based in Salt Lake City, Utah. 
              I'm experienced in the latest technologies and I know how to build 
              your site to run on any device you need to reach your audience.
            </p>
            <p>
              My passion is UI/UX design. I'll help you improve 
              customer experience by making it easier and more intuitive to use 
              your site.
            </p>
            <p>
              Click around, have some fun. Thanks for stopping by!
            </p>
          </Flexbox>
        </Flexbox>
        <div style={{minWidth:'150px'}}>
          <Image src={me}  size='huge' />
        </div>
      </Flexbox>
      <Flexbox justifyContent='center' >
        <Image className="App-logo" src={logo} size='tiny'/>
      </Flexbox>
    </Flexbox>
  )
}

const styles = {
  descriptionBox: {
    backgroundColor: '#fffafb',
    color: '#339989', 
  },
  columnContainer: {
    color: '#339989', 
  },
}

export default About;