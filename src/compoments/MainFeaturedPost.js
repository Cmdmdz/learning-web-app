import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Markdown from './Markdown';
import './css/Font.css'
const useStyles = makeStyles((theme) => ({

  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(0, 0),
  },
  tpye: {
    // font-family: 'Mitr', sans-serif;

  }
}));

// 1 Honda เช่น Honda PcX ทุกรุ่น / Click ทุกรุ่น / Dream supercar / scoopy-i
// wave 100/110/125i ทุกรุ่น และรุ่นอื่นๆ
// 2 Yamaha เช่น Fino/mio/nouvo/spark/N-max/X-max และรุ่นอื่นๆ
// 3 ผ่อนอยู่ก็สามารถขายได้ (รับปิดไฟแนนซ์ให้ถ้าไม่ไหว)
// 4 ผ่อนไม่ไหวให้เราช่วยตัดภาระการใช้จ่าย(รถคุณช่วยได้)
const md = `

1. Honda เช่น Honda PcX ทุกรุ่น / Click ทุกรุ่น / Dream supercar / scoopy-i / wave 100/110/125i ทุกรุ่น และรุ่นอื่นๆ
2. Yamaha เช่น Fino/mio/nouvo/spark/N-max/X-max และรุ่นอื่นๆ
3. ผ่อนอยู่ก็สามารถขายได้ (รับปิดไฟแนนซ์ให้ถ้าไม่ไหว)
4. ผ่อนไม่ไหวให้เราช่วยตัดภาระการใช้จ่าย(รถคุณช่วยได้)
`

export default function MainFeaturedPost() {
  const classes = useStyles();
  return (
    <>
      <h2 style={{ fontSize: 32 }} className="fontGoogle">
        รับซื้อมอเตอร์ไซค์
      </h2>
      <Markdown className={classes.markdown} >
        {md}
      </Markdown>
      <div className={classes.heroButtons}>
        <div variant="h4" component="h3" gutterBottom >
          <p className="fontGoogle" style={{ fontSize: 22 }}>
            รับเงิดสด-ทันที {"\t"} รับซื้อถึงที่บ้านท่าน
          </p>
        </div>
      </div>
      <br></br>

    </>
  );
}

