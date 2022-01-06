import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import ProductCard from './ProductCard'
import CheckBox  from './Checkbox'
import lodash from 'lodash'
import {theme} from '../../styles/theme'


const BlogGrid = styled.section`
    margin: 8em auto 5rem auto;
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

const FilterContainer=styled.div`
  background-color:rgb(255,255,255,.12);
  height: auto;
  border-radius:5rem 5rem 0 5rem;
`
const FilterByType =styled.div`
  padding:4rem 0;
  width:75%;
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
  width:16rem;

`
const ImpactTypeBox=styled.div`
width:auto;
  flex:1 1 30rem;
  flex-wrap: wrap;
`
const ImpactSubBox=styled.div`
width:auto;
display: flex;
flex-direction: column;
flex-wrap: wrap;
width:19rem;
max-height:12rem;
@media(max-width:728px){
max-height:25rem;

}
`
const TypeHeading=styled.h2`
    color:white;
`
const ImpactMidBox= styled.div`
  display:flex;
  flex-wrap: wrap;
`
export default function FilterTags({ productNodes }) {
    const industryList=["beauty_and_health","lifestyle_and_apparel","home","mom_and_baby"]
    const impactList=["improve_mental_heatlh","tackle_oppression","improve_physical_health","reduce_CO2","reduce_waste_or_pollution","tackle_inequality_and_discrimination","improve_ocean_river_health","improve_financial_independence","improve_safety_sanitation"]

    const [ checkedIndustry, setCheckedIndustry ]= useState(
        new Array(industryList.length).fill(true)
    )
    const [ checkedImpact, setCheckedImpact ]= useState(
        new Array(impactList.length).fill(true)
    )
    const [filteredIndustry, setFilteredIndustry] = useState(industryList)
    const [filteredImpact, setFilteredImpact] = useState(impactList)
    const [selectAll, setSelectAll ] = useState(true)
    
    const handleSelectAll = () =>{
      setSelectAll(prev => !prev)
      if (selectAll===false){
        setFilteredIndustry(industryList)
        setFilteredImpact(impactList)
        setCheckedIndustry(checkedIndustry.map(item=> true))
        setCheckedImpact(checkedImpact.map(item=> true))
      } else {
        setFilteredIndustry([])
        setFilteredImpact([])
        setCheckedIndustry(checkedIndustry.map(item=>false))
        setCheckedImpact(checkedImpact.map(item=>false))
      }
    }
    function addRemoveItems (e, list1){
      if(list1.includes(e.target.name)){
        return(list1.filter(prevItem => prevItem !== e.target.name))
      }else{
        return([...list1, e.target.name])
    }}


    const handleCheckedIndustry = (position) => (e) =>{
        const updatedCheckedIndustry = checkedIndustry.map((item, index)=>index===position? !item:item)
        setCheckedIndustry(updatedCheckedIndustry)
        setFilteredIndustry(prev => {return(addRemoveItems(e, prev))})

    }
    const handleCheckedImpact = (position) => (e) =>{
        const updatedCheckedImpact = checkedImpact.map((item, index)=>index === position?!item:item)
        setCheckedImpact(updatedCheckedImpact)
        setFilteredImpact(prev => {return(addRemoveItems(e, prev))})

    }
    
    return (
        <>
              <FilterContainer>
                  <FilterByType>
    
                    <IndustryTypeBox>
                        <TypeHeading>Industry</TypeHeading>
                        {industryList.map((cat,index)=>(<CheckBox 
                            key={cat} 
                            tag={cat}
                            value={cat}
                            onChange={handleCheckedIndustry(index)} 
                            checked={checkedIndustry[index]}
                            tagDisplayed={lodash.lowerCase(cat).replace('and','&')}
                            />
                        ) )}
                    </IndustryTypeBox>
                    <ImpactTypeBox>
                        <TypeHeading>Impact Type</TypeHeading>
                            <ImpactSubBox>
                            {impactList.map((tag,index)=>(<CheckBox 
                                  key={tag} 
                                  value={tag}
                                  tag={tag} 
                                  onChange={handleCheckedImpact(index)} 
                                  checked={checkedImpact[index]}
                                  tagDisplayed={lodash.lowerCase(tag).replace('and','&').replace('co 2','CO2')}
                                  />)
                              )}
                              <CheckBox 
                            value="select_all"
                            tag="select_all"
                            onChange={()=>handleSelectAll()} 
                            checked={selectAll}
                            tagDisplayed="select all"
                                  />
                            </ImpactSubBox>
                    </ImpactTypeBox>
                  </FilterByType>
                  </FilterContainer>
                    <ProductGrid>
                    {productNodes? productNodes.map((node) => {
                        const {main:{productImages},
                                tags:{
                                  impactType, 
                                  productType
                                  },
                               name,
                               id
                               }=node;
                        const impactResult = filteredImpact.filter(impact => impactType.includes(impact));
                          return( impactResult.length !== 0 && filteredIndustry.includes(productType) && <ProductCard 
                              key={id}
                              ProductImages={productImages}
                              brandName={name}
                              data-tag={impactType}
                              LinkTo={`/impact-brands/${lodash.kebabCase(name)}`}
                          />
                          )}
                        ):""}
                    </ProductGrid>
        </>
    )
}
