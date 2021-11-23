  import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../components'
import {theme} from '../../styles/theme'
import SearchBrands from './SearchBrands'
import { BlogGrid } from '../../styles/Global.styles.js'
import ImpactHeading from './ImpactHeading'
import ProductCard from './ProductCard'
import { graphql,Link } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import CheckBox  from './Checkbox'

// import FilterTags from './FilterTags'

const Container = styled.div`
        width: 100%;
        background-color: ${theme.colors.midnight};
        height:auto;
    `
const ProductGrid=styled(BlogGrid)`
    gap:6rem 4rem ;
   `

export default ({data:{allBrandsYaml:{nodes}}}) => {



  class FilterTags extends React.Component{
    constructor(props) {
        super(props);
        this.state= { 
                hullo:true,
                tackle_oppression:true,
                tackle_inequality:true,
                checkedList:["hullo","tackle_oppression","tackle_inequality"]
            }
        this.addChecked=this.addChecked.bind(this)
        }
    addChecked(e){
        this.setState(prev=>{
            prev[e.target.name] = !prev[e.target.name]
            const { checkedList } = prev
            if (checkedList.includes(e.target.name)){
                const index=checkedList.indexOf(e.target.name)
                checkedList.splice(index,1)
            }else{
                checkedList.push(e.target.name)
            }
            console.log(prev)
            return prev
    })}
    componentDidMount(e){

    }
    
    render(){
        return (
            <>
                <CheckBox tag="tackle_inequality" onChange={this.addChecked} checked={this.state.tackle_inequality}/>
                <CheckBox tag="tackle_oppression" onChange={this.addChecked} checked={this.state.tackle_oppression}/>
                <CheckBox tag="hullo" onChange={this.addChecked} checked={this.state.hullo}/>
                <Link to="./product">product</Link>
                <ProductGrid>
                {nodes.map((node) => {
                    const imagesNode=node.main;
                    const { impactType } = node.tags
                    console.log(impactType)
                    const intersection = this.state.checkedList.filter(element => impactType.includes(element));
                    console.log(intersection.length!==0)
                      return(intersection.length!==0&&<ProductCard 
                          ProductImages={imagesNode.productImages}
                          BrandNameLogo={getImage(imagesNode.brandNameLogo.childrenImageSharp[0])}
                          data-tag={impactType}
                      />
                      
                      )
                    
                      }
                    )
                    }
                </ProductGrid>
            </>
        )
    }
}
   
        
        return (
                <Layout>
                    <Container> 
                        <ImpactHeading/>
                        <FilterTags />
                    </Container>
                </Layout>
            )
        }



export const ProductQuery=graphql`
query Products {
    allBrandsYaml {
        nodes {
          main {
            brandNameLogo {
              childrenImageSharp {
                gatsbyImageData
              }
            }
            productImages {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
          slug
          tags {
            impactType
            productType
          }
        }
    }
  }

`