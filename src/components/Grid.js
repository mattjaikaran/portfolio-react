import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
// import tileData from './tileData'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 600,
  },
}))

const tileData = [
   {
     img: 'http://www.vesperaofficial.com/wp-content/uploads/2019/09/Vespera-Blur-New-Lo.jpg',
     title: 'Vespera',
     cols: 6,
   },
   {
     img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/avon-now-logo.svg?alt=media&token=9fc576e1-a7a4-4e25-a7fe-a80dc3781c0f',
     title: 'Avon',
     cols: 6,
   },
   {
     img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/city-casting.png?alt=media&token=51ad1377-48ce-4753-a121-c22455cf6e50',
     title: 'City',
     cols: 8,
   },
   {
     img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/city-casting.png?alt=media&token=51ad1377-48ce-4753-a121-c22455cf6e50',
     title: 'City',
     cols: 4,
   },
   {
     img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/avon-now-logo.svg?alt=media&token=9fc576e1-a7a4-4e25-a7fe-a80dc3781c0f',
     title: 'Avon',
     cols: 12,
   },
]
export default function Grid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={12}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
