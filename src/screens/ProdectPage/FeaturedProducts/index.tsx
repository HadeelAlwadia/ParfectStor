<<<<<<< HEAD
import Typography from '@mui/material/Typography'
import React from 'react'
import { Card } from '../../../components/Card/Types'

import { BoldLine, FeaturedProductsContiner, ProdectesContainer, TitleContiner } from '../ProdectPage.styled'
import SliderProduct from './sliderProduct'





export default function FeaturedProducts() {
    return (
        <FeaturedProductsContiner  >
            
         <ProdectesContainer>
            <TitleContiner  >
            <Typography variant='h2' fontSize='30px'   sx={{textAlign:'center',padding:'20px'}}>Featured Products</Typography>
             <BoldLine></BoldLine>
            </TitleContiner>
            <SliderProduct/>
         </ProdectesContainer>  
        </FeaturedProductsContiner>
    )}

