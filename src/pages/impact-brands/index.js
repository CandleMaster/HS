  import React from 'react';
import styled from 'styled-components';
import { Layout,Quotes,Triple } from '../components'
import {theme} from '../../styles/theme'
import ImpactHeading from './ImpactHeading'
import ProductCard from './ProductCard'
import { graphql,Link } from 'gatsby'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import CheckBox  from './Checkbox'
import lodash from 'lodash'

const Container = styled.div`
        width: 100%;
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
    background-color:${theme.colors.midnight};
`
const ProductGrid=styled(BlogGrid)`
    gap:6rem 4rem ;
   `
const catList=["beauty_and_health","lifestyle_and_apparel","home","mom_and_baby"]
const catListState=["beauty_and_health","lifestyle_and_apparel","home","mom_and_baby"]

const tagListState=["improve_mental_heatlh","tackle_oppression","improve_physical_health","reduce_CO2","reduce_waste_or_pollution","tackle_inequality_and_discrimination","reduce_waste_or_pollution","improve_ocean_river_health","improve_financial_independence","improve_safety_sanitation"]
const tagList=["improve_mental_heatlh","tackle_oppression","improve_physical_health","reduce_CO2","reduce_waste_or_pollution","tackle_inequality_and_discrimination","reduce_waste_or_pollution","improve_ocean_river_health","improve_financial_independence","improve_safety_sanitation"]
const TripleBrandSearch=styled(Triple)`
    margin-top:-26rem !important;
`
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
  * >h2{
    color:white;
  }
`
const ImpactTypeBox=styled.div`
  flex:2 1 25rem;
  display:flex;
`
const IndustryTypeBox=styled.div`
  flex:1 1 25rem
`
const TypeHeading=styled.h2`
    color:white;
`
export default ({data:{allBrandsYaml:{nodes}}}) => {
  class FilterTags extends React.Component{
    constructor(props) {
        super(props);
        this.state= { 
                improve_mental_heatlh:true,
                tackle_oppression:true,
                tackle_inequality_and_discrimination:true,
                improve_physical_health:true,
                reduce_CO2:true,
                reduce_waste_or_pollution:true,
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

            
            console.log(prev)
            console.log(catList.includes(e.target.name))
            return prev
          })}
    componentDidMount(e){}
    
    render(){
      return (
        <>
          <FilterContainer>
              <FilterByType>
                <IndustryTypeBox>
                  <TypeHeading>Industry</TypeHeading>
                  {catList.map((cat,index)=>{return<CheckBox 
                      boxType="checkbox" 
                      key={index} 
                      tag={cat}
                      tagDisplayed={cat}
                      onChange={this.addChecked} 
                      checked={this.state[cat]}
                      tagDisplayed={lodash.lowerCase(cat)}
                      borderRadius="2px"
                      />
                  } )}
                </IndustryTypeBox>
                <div>
                  <TypeHeading>Impact Type</TypeHeading>
                <ImpactTypeBox>
                <div>
                {tagList.map((tag,index)=>{
                  if (index < 5){
         return(<CheckBox 
                      boxType="checkbox" 
                      key={index} 
                      tag={tag} 
                      onChange={this.addChecked} 
                      checked={this.state[tag]}
                      tagDisplayed={lodash.lowerCase(tag)}
                      borderRadius="2px"
                      />
                  
         )
                  }} )}
                </div>
                <div>
                {tagList.map((tag,index)=>{
                  if (index >= 5){
         return(<CheckBox 
                      boxType="checkbox" 
                      key={index} 
                      tag={tag} 
                      onChange={this.addChecked} 
                      checked={this.state[tag]}
                      tagDisplayed={lodash.lowerCase(tag)}
                      borderRadius="2px"
                      />
                  
         )
                  }} )}
                </div>
              
                </ImpactTypeBox>
                </div>
              </FilterByType>
                        </FilterContainer>
                <ProductGrid>
                {nodes.map((node) => {
                    const imagesNode=node.main;
                    const { impactType, productType } = node.tags
                    const intersection = this.state.checkedList.filter(element => impactType.includes(element));
                    const intersection2 = this.state.checkedCat.filter(element => productType.includes(element));
                      return(intersection.length!==0&&intersection2.length!==0&&<ProductCard 
                          key={node.id}
                          ProductImages={imagesNode.productImages}
                          BrandNameLogo={getImage(imagesNode.brandNameLogo.childrenImageSharp[0])}
                          data-tag={impactType}
                          LinkTo={`/impact-brands/${lodash.kebabCase(node.name)}`}
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
                    <Container> 
                        <ImpactHeading/>
                          <FilterTags />
                          <Quotes 
                              quoteHeading="What is an impact brand?" 
                              headingColor="white !important" 
                              quote="Impact brands are sustainable companies that create a positive impact on the world by tackling its critical problems like poverty, pollution and oppression." />
                          <Triple 
                              tripleHeading="none !important"
                              tripleMargin="-5rem 0"
                          />
                    </Container>
                </Layout>
            )
        }



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
                gatsbyImageData
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
  }

`
