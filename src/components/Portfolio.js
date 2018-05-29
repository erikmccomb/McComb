import React from 'react'
import Flexbox from 'flexbox-react'
import { Card, Image } from 'semantic-ui-react'
import pp from '../images/pp.jpg'
import prs from '../images/prs.jpg'
import blog from '../images/blog.jpg'

class Portfolio extends React.Component {
  render(){
    return (
      <Flexbox flexDirection='column' width='100vw' alignItems='center' justifyContent='center' paddingBottom='30px'>
        <Flexbox alignItems='center' justifyContent='center' padding='20px' style={{ fontSize: '50px', lineHeight:'50px', fontFamily: 'FuturaPTBook', color: '#7de2d1',}}>
          Portfolio
        </Flexbox>      
                
        <Card.Group centered>
          <Card>
            <a href="https://mccombpsr.netlify.com" target="_blank" rel="noopener noreferrer" style={{color:'black'}}>
              <Image src={prs} />
            </a>
            <Card.Content>
              <Card.Header>
                Rock, Paper, Scissors
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Simple Game made with Javascript
                </span>
              </Card.Meta>
            </Card.Content>
          </Card>

          <Card>
            <a href="https://erikmccombblog.netlify.com/" target="_blank" rel="noopener noreferrer" style={{color:'black'}}>
              <Image src={blog} />
            </a>
            <Card.Content>
              <Card.Header>
                Erik McComb - Blog
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  First Gatsby Project
                </span>
              </Card.Meta>
            </Card.Content>
          </Card>

          <Card>
            <a href="https://Parcelspost.netlify.com/" target="_blank" rel="noopener noreferrer" style={{color:'black'}}>
              <Image src={pp} />
            </a>
            <Card.Content>
              <Card.Header>
                Parcels & Post
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Gallery Quality Shipping - New Orleans, LA
                </span>
              </Card.Meta>
            </Card.Content>
          </Card>

        </Card.Group>
      </Flexbox>
    )
  }
}

export default Portfolio;