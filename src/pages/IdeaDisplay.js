import React from 'react'
import styled from 'styled-components';
import { FeaturedProducts } from './components'
import { theme } from '../styles/theme'
import { Display, DisplayArrowContainer,DisplayArrowBox, Arrow } from './../styles/Global.styles'
import {BlogCardAlt} from './components'
export default function IdeaDisplay({blogImage1,blogImage2}) {
    const IdeasDisplay = styled(Display)`
    flex-direction: row;
    padding:0 10% 0 0;
    
    > *{
        flex: 1 1 18rem;
    }
    > div > div {
        float:right;
        border-radius: 5px 0 0 35px;
        > div{
            transform:rotate(135deg)  
        }
    }
` 
    const BlogIntro = styled.div`
            width:80%;
            margin: 10rem auto 2rem auto;
            height: auto;
        *{
            height: auto;
            text-align: end;
            /* padding-right: 12.5%; */
        }
        h2{
            color: ${theme.colors.dusk};
        }
    `
    return (
        <>
        <BlogIntro>
            <h2>...and the powerful ideas behind them.</h2>
            <p>We explore and discuss ideas that are shaping a new economy</p>
        </BlogIntro>
        <IdeasDisplay>
             <DisplayArrowContainer>
                  <DisplayArrowBox>
                      <Arrow/>
                  </DisplayArrowBox>
              </DisplayArrowContainer>
              <BlogCardAlt padding="4rem 0 4rem 4rem"/>
              <BlogCardAlt padding="4rem 0 4rem 4rem"/>
        </IdeasDisplay>
        </>
    )
}
