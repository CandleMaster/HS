import React from 'react'
import styled from 'styled-components';
import { FeaturedProducts } from './components'

import { Arrow, DisplayArrowContainer,DisplayArrowBox } from './../styles/Global.styles'
import { theme } from '../styles/theme'
import {StaticImage,getImage} from 'gatsby-plugin-image'
import lodash from 'lodash'
import { Carousel } from '@trendyol-js/react-carousel';

const ProductIntro = styled.div`
    width:80%;
    position: relative;
    margin: 4rem auto 0 auto;
    display: flex;
    gap:5rem;
    flex-wrap: wrap;
    height: auto;
    div{
        align-self: flex-end;
        flex: 1 1 16rem;
        h2{
            height: auto;
            color: ${theme.colors.dusk};
        }
        p{
            font-size:1.3rem;
        }
    }
    div:last-child{
        @media(max-width:${theme.breakPoint.sm}){
            display: none;
        }
    }
    img{
        height: 13rem;
        z-index: 2;
    }
`
    
const Display = styled.div`
    margin: 5rem 0;
    height:30rem;
`

export default function ProductDisplay({featuredBrands,CarouselWidth}) {
    
    const MyCarousel= styled(Carousel)`
        position: relative;
        padding: 0 2rem;
        width: 100vw;
        height: auto;
        button{
        position: absolute;
        top:45%;
        left: 0;
        border: solid white;
        border-width: 0 4px 4px 0;
        background: transparent;
        margin:1rem;
        width: 1.35rem;
        height: 1.35rem;
        transform:rotate(-45deg);

        }
        >:first-child, >:last-child{
            background-color:${theme.colors.beige};
            height: 100%;
            width: 1rem;
            z-index: 3;
            padding: 0 2rem;
            position: absolute;
        } 
        >:first-child{
            left:0rem;
            button{
            transform:rotate(-225deg);
            }
        }
        >:last-child{
            right:1rem;
            top:0rem;
        }
`
const myCarouselItems = (featuredBrand) =>{
        const { featuredDescription, 
                  name,
                  main:{
                      brandNameLogo, 
                      productImages
              }} =featuredBrand
        return <FeaturedProducts 
                  featuredImage={getImage(productImages[0].childrenImageSharp[0])} 
                //   brand={getImage(brandNameLogo.childrenImageSharp[0])}
                  brandName={name}
                  description={featuredDescription}
                  linkTo={`/impact-brands/${lodash.kebabCase(name)}`}
                />
    
}
console.log(CarouselWidth>780 && CarouselWidth<1280)
    return (
        <>
        <ProductIntro>
            <div>
                <h2>We connect you to superheroes ...</h2>
                <p>We only promote brands that are holistically sustainable, sell high quality products and show tangible progress towards their stated mission around global issues.</p>
            </div>
            <StaticImage 
                src="../images/hp_certification_icon.png"
                objectFit="contain"
                quality={95}
                alt="Eco friendly stamp"

            />
        </ProductIntro>
        <Display>
             {CarouselWidth<=760&& <MyCarousel show={1}>{featuredBrands.map(myCarouselItems)}</MyCarousel>}
             {CarouselWidth>760 && CarouselWidth<1280 && <MyCarousel show={2}>{featuredBrands.map(myCarouselItems)}</MyCarousel>}
             {CarouselWidth>=1280&& <MyCarousel show={3.5}>{featuredBrands.map(myCarouselItems)}</MyCarousel>}
        </Display>
        </>
    )
}
 