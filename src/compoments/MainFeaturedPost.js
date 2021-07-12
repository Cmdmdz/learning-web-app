import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: 'auto',
    maxWidth: "auto"
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(2, 0),
  },
}));

const md = `
##เราบริการ รับซื้อ รถมอเตอร์ไซค์มือสอง สภาพ เก่า-ใหม่
1. Honda เช่น Honda i-con / phantom / air blade /click / dream / scoopy I / pcx/ wave 100/110/125 และรุ่นอื่นๆ
2. Yamaha เช่น Yamaha fino / x-1 / mio / spark / nouvo และรุ่นอื่นๆ
3. Kawasaki เช่น ksr / boss และรุ่นอื่นๆ
4. Suzuki เช่น jerato / raider / revo และรุ่นอื่นๆ
`

export default function MainFeaturedPost() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.heroContent}>

        <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
          รับซื้อมอเตอร์ไซค์
        </Typography>
        <Markdown className={classes.markdown}  >
          {md}
        </Markdown>
        <div className={classes.heroButtons}>
         
        </div>
        <br></br>
      </div>
    </>
  );
}

