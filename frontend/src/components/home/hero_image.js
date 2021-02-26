import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export default function HeroImage({ img1, img2 }) {
  return img1 && img2 ? 
  (
    <div>
      <GridList cellHeight='auto'>
        <GridListTile key='Img1' rows={2.5}>
          <img src={img1} alt='Img1' />
        </GridListTile>
        <GridListTile key='Img2' rows={2.5}>
          <img src={img2} alt='Img2' />
        </GridListTile>
      </GridList>
    </div>
  ) : 
  (
    <GridList cellHeight={380} cols={1}>
      <img src={img1} alt='Img1' style={{ objectFit: 'cover' }}/>
    </GridList>
  )
}
