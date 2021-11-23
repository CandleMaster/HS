import React from 'react'
import styled from 'styled-components';
import { FeaturedProducts } from './components'
import { Display, Arrow, DisplayArrowContainer,DisplayArrowBox } from './../styles/Global.styles'
import { theme } from '../styles/theme'
import {StaticImage} from 'gatsby-plugin-image'
export default function ProductDisplay({product1,product2,product3}) {
const ProductIntro = styled.div`
    width:80%;
    margin: 4rem auto 0 auto;
    display: flex;
    gap:6rem;
    flex-wrap: wrap;
        div{
            h2{
                height: auto;
                color: ${theme.colors.dusk};
            }
            align-self: flex-end;
            flex: 1 1 15rem;
            p{
                font-size:1.3rem;
            }
        }
    height: auto;
`

    return (
        <>
        <ProductIntro>
            <div>
                <h2>We connect you to superheroes ...</h2>
                <p>We only promote brands that are holistically sustainable, sell high quality products and show tangible progress towars their state mission around global issues</p>
            </div>
            <StaticImage 
            src="../images/logo/triple impact diagram.png"
            objectFit="contain" 
            style={{height:'8rem',width:'8rem',margin:'2rem'}} 
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Eco friendly stamp"

            />
        </ProductIntro>
        <Display>
            <DisplayArrowContainer>
                  <DisplayArrowBox>
                      <Arrow/>
                  </DisplayArrowBox>
              </DisplayArrowContainer>
              <FeaturedProducts featuredImage={product1} description="goobiligob"></FeaturedProducts>
              <FeaturedProducts featuredImage={product2} description="goobiligob"></FeaturedProducts>
              <FeaturedProducts featuredImage={product3} description="goobiligob"></FeaturedProducts>
        </Display>
        </>
    )
}
 