  import React from 'react';
import styled from 'styled-components';
import Seo from '../components/seo'
import Triple from '../components/Triple'
import Quotes from '../components/Quotes'
import Layout from '../components/Layout'
import {theme} from '../../styles/theme'
import ImpactHeading from './ImpactHeading'
import ProductCard from './ProductCard'
import { graphql } from 'gatsby'
import CheckBox  from './Checkbox'
import ImpactBrandDescription  from './ImpactBrandDescription'
import lodash from 'lodash'

const Container = styled.div`
        /* width: 100%; */
        background-color: ${theme.colors.midnight};
        bottom:0;
        padding-bottom:10rem;
        height:auto;
    `
const BlogGrid = styled.section`
    margin: 5rem auto;
    width: 75%;
    max-width: 80rem;
    
    display: grid;
    gap:4rem;
    grid-template-columns: repeat(auto-fill, minmax(16rem,1fr));
    grid-template-rows: repeat(auto,20rem);
    background-color:${theme.colors.midnight};
    @media(max-width:${theme.breakPoint.sm}){
    margin: 5rem auto;
      width: 80%;
      gap: 1rem;
    }
`
const ProductGrid=styled(BlogGrid)`
    gap:6rem 4rem ;
   `
const catList=["beauty_and_health","lifestyle_and_apparel","home","mom_and_baby"]
const catListState=["beauty_and_health","lifestyle_and_apparel","home","mom_and_baby"]

const tagListState=["improve_mental_heatlh","tackle_oppression","improve_physical_health","reduce_CO2","reduce_waste_or_pollution","tackle_inequality_and_discrimination","improve_ocean_river_health","improve_financial_independence","improve_safety_sanitation"]
const tagList=["improve_mental_heatlh","tackle_oppression","improve_physical_health","reduce_CO2","reduce_waste_or_pollution","tackle_inequality_and_discrimination","improve_ocean_river_health","improve_financial_independence","improve_safety_sanitation"]



const FilterContainer=styled.div`
  background-color:rgb(255,255,255,.12);
  height: auto;
  border-radius:5rem 5rem 0 5rem;
`
const FilterByType =styled.div`
  padding:4rem 0;
  width:70%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  * >h2{
    color:white;
  }
`
const IndustryTypeBox=styled.div`
  padding:0 1rem 1.5rem 0;
  flex:1 1 15rem;
width:auto;
  min-width: 15rem;
`
const ImpactTypeBox=styled.div`
width:auto;
  flex:1 1 35rem;

  flex-wrap: wrap;
`
const ImpactSubBox=styled.div`
width:auto;
  flex: 1 1 17rem;
`
const TypeHeading=styled.h2`
    color:white;
`
const ImpactMidBox= styled.div`
  display:flex;
  flex-wrap: wrap;
`
const BrandHeading = ({data:
                {allBrandsYaml:
                  {nodes},
                markdownYaml:{text}}
                }) => {
  class FilterTags extends React.Component{ 
    constructor(props) {
        super(props);
        this.state= { 
                improve_mental_heatlh:true,
                tackle_oppression:true,
                improve_physical_health:true,
                reduce_CO2:true,
                tackle_inequality_and_discrimination:true,
                reduce_waste_or_pollution:true,
                improve_ocean_river_health:true,
                improve_financial_independence:true,
                improve_safety_sanitation:true,                
                beauty_and_health:true,
                lifestyle_and_apparel:true,
                mom_and_baby:true,
                home:true,
                checkedList:tagListState,
                checkedCat:catListState
            }
        this.addChecked=this.addChecked.bind(this)
        }
    addChecked(e){
        this.setState(prev=>{
            prev[e.target.name] = !prev[e.target.name]
            const { checkedList,checkedCat } = prev
            
            //toggle tag and add/remove from list
            function addRemoveItems(list){
              if (list.includes(e.target.name)){
                const index=list.indexOf(e.target.name)
                list.splice(index,1)
              }else{
                list.push(e.target.name)
              }
            }

            addRemoveItems(checkedList)
            addRemoveItems(checkedCat)

            return prev
          })}
        // clearItems(e){
        //   this.setState(prevs=>{
        //       const clickedTags=Object.keys(prevs)
        //       clickedTags.map(tags =>{
        //         if (tags==checkedList || tags==checkedCat ){
        //           continue
        //         }else{
        //           prev[tags]=!prev[tags]
        //       }})
                

        //   })}
    componentDidMount(e){}
    
    render(){
      return (
        <>
          <FilterContainer>
              <FilterByType>
                <IndustryTypeBox>
                    <TypeHeading>Industry</TypeHeading>
                    {catList.map((cat,index)=>(<CheckBox 
                        boxType="checkbox" 
                        key={cat} 
                        tag={cat}
                        onChange={this.addChecked} 
                        checked={this.state[cat]}
                        tagDisplayed={lodash.lowerCase(cat)}
                        borderRadius="2px"
                        />
                    ) )}
                </IndustryTypeBox>
                <ImpactTypeBox>
                    <TypeHeading>Impact Type</TypeHeading>
                    <ImpactMidBox>
                        <ImpactSubBox>
                        {tagList.map((tag,index)=>(index < 5 &&<CheckBox 
                              boxType="checkbox" 
                              key={index} 
                              tag={tag} 
                              onChange={this.addChecked} 
                              checked={this.state[tag]}
                              tagDisplayed={lodash.lowerCase(tag)}
                              borderRadius="2px"
                              />)
                          )}
                        </ImpactSubBox>
                        <ImpactSubBox>
                        {tagList.map((tag,index)=>(index >= 5 &&<CheckBox 
                              boxType="checkbox" 
                              key={index} 
                              tag={tag} 
                              onChange={this.addChecked} 
                              checked={this.state[tag]}
                              tagDisplayed={lodash.lowerCase(tag)}
                              borderRadius="2px"
                              />
                ) )}
                        </ImpactSubBox>
              
                </ImpactMidBox>
                </ImpactTypeBox>
              </FilterByType>
                        </FilterContainer>
                <ProductGrid>
                {nodes.map((node) => {
                    const {main:{productImages},
                            tags:{
                              impactType, 
                              productType
                              },
                           name,
                           id
                           }=node;
                    const intersection = this.state.checkedList.filter(element => impactType.includes(element));
                      return(intersection.length!==0&&this.state.checkedCat.includes(productType)&&<ProductCard 
                          key={id}
                          ProductImages={productImages}
                          // BrandNameLogo={getImage(imagesNode.brandNameLogo.childrenImageSharp[0])}
                          brandName={name}
                          data-tag={impactType}
                          LinkTo={`/impact-brands/${lodash.kebabCase(name)}`}
                      />
                      )}
                    )}
                </ProductGrid>
            </>
        )
    }
}
        return (
                <Layout>
                <Seo/>
                    <Container> 
                        <ImpactHeading/>
                          <FilterTags />
                          <Quotes 
                              quoteHeading="What is an impact brand?" 
                              headingColor="white" 
                              quote="Impact brands are sustainable companies that create a positive impact on the world by tackling its critical problems like poverty, pollution and oppression." />
                          <Triple 
                              tripleHeading="none !important"
                              tripleMargin="-5rem 0"
                          />
                          <ImpactBrandDescription BrandIndexText={text}></ImpactBrandDescription>
                    </Container>
                </Layout>
            )
        }

export default BrandHeading

export const ProductQuery=graphql`
query Products{
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
                gatsbyImageData(width: 400)
              }
            }
          }
          name
          tags {
            impactType
            productType
          }
          id
        }
    }
    markdownYaml(title: {eq: "brandIndex"}) {
      text
    }

  }

`
// intersection.length!==0&&intersection2.length!==0