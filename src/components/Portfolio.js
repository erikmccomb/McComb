import React from 'react';
import '../css/App.css';
import Flexbox from 'flexbox-react';
import { Card, Image } from 'semantic-ui-react'
import pp from '../images/pp.jpg'
import prs from '../images/prs.jpg'
import blog from '../images/blog.jpg'

class Portfolio extends React.Component {
  render(){
    return (
      <div style={{fontFamily: 'FuturaPTBook'}}>
        <div style={styles.flexContainer}>
          <div style={styles.box}>
            <Flexbox flexDirection='column'>
              <Flexbox justifyContent='center'>
                <div style={styles.titleName}>
                  Portfolio
                </div>
              </Flexbox>        
                
              {/* image size 1480x1275 */}     
              
              <Flexbox>
                <Card.Group>

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
                          Game made with Javascript, HTML, and CSS
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

            </Flexbox>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  box: {
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: '10px',
  },
  titleName: {
    fontFamily: 'FuturaPTBook',
    fontSize: 'calc(10px + 5vw)',
    lineHeight: 'calc(10px + 5vw)',
    color: '#7de2d1',
    padding: '30px 3vw 30px 3vw',
    textAlign: 'center',
  },
}

export default Portfolio;
