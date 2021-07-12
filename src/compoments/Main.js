import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(2, 0),
  },
}));

const content = `
# รายละเอียด
#### ติดต่อ [Facebook](https://web.facebook.com/natee.rung.16) หรือ โทรติดต่อ 093-094-539

## รับซื้อมอเตอร์ไซค์มือสองถึงที่ให้ราคาสูง
- เราจะไปให้บริการถึงหน้าบ้านของคุณ ทั้งในกรุงเทพ และปริมณฑล ลูกค้าสามารถติดต่อสอบถามได้ตลอด24 ชั่วโมง และเรายังสามารถประเมินราคาให้ฟรี ไม่คิดค่าใช้จ่ายใดๆ อีกด้วย
- รับซื้อบิ๊กไบค์ รับได้ทุกอย่างไม่ว่าจะเป็น Honda Yamaha Suzuki และอีกมากมาย
- สบายใจหายห่วง เพราะเรารับรับซื้อรถติดไฟแนนซ์พร้อมกับรับปิดบัญชีไฟแนนซ์ในคราวเดียว ใครไม่รับ เรารับเอง
- อย่าปล่อยรถที่ไม่ได้ถูกใช้งานอย่างเต็มที่ เป็นภาระของคุณอีกต่อไป โทรหาเรา ก่อนที่จะเสียค่าเสื่อมมากกว่านี้

## อยากเช็คราคาขายรถมอเตอร์ไซค์ต้องทำยังไง

1.  ถ่ายรูปรถมอเตอร์ไซค์ของท่านเห็นสภาพรอบคัน ถ้ามีตำหนิรอยล้มหรือแตก ถ่ายให้ด้วยครับ
2.  ถ่ายเลขไมล์ที่รถวิ่งมาทั้งหมดว่าวิ่งไปกี่กิโล พร้อมแจ้งสภาพเครื่องยนต์ของท่าน
3.  แจ้งสถานที่ดูรถว่ารถอยู่ที่ไหน พร้อมราคาที่ต้องการขายมาได้เลยครับ

## ส่งรายละเอียดมาได้ที่ช่องทางดังต่อไปนี้
- โทร. [093-094-539](/) K. Natee
- [Line](https://line.me/ti/p/Deg9nnhaih)
- [Facebook](https://web.facebook.com/natee.rung.16)

## พื้นที่ให้บริการรับซื้อมอเตอร์ไซค์
 ทั่วกรุงเทพฯ ชลบุรี ฉะเชิงเทรา ระยอง  ปทุมธานี สมุทรปราการ สมุทรสาคร สมุทรสงคราม นครปฐม นนทบุรี อยุธยา นครนายก
หรือถ้าท่านอยู่นอกเหนือจากนี้ลองโทรมาปรึกษาได้ครับ


`;



export default function Main(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />

        <Markdown className={classes.markdown}  >
          {content}
        </Markdown>
    
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
