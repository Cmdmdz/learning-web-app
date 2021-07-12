import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './compoments/Header';
import MainFeaturedPost from './compoments/MainFeaturedPost';
import FeaturedPost from './compoments/FeaturedPost';
import Main from './compoments/Main';
import Sidebar from './compoments/Sidebar';
import Footer from './compoments/Footer';
import Tooltip from '@material-ui/core/Tooltip';

/**
* @author
* @function App
**/

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));


const mainFeaturedPost = {
  image: 'https://exl-research.s3.ap-northeast-2.amazonaws.com/pdf/imageBg.png',

};

const foo = "ไม่ต้องรอนาน ปลอดภัยหายห่วง ด้วยบริกการ รับซื้อมอเตอร์ไซค์ มือสอง แบบมืออาชีพ ซื้อจริงให้ราคาสูง ตามที่คุณต้องการ"

const sidebar = {
  title: 'เกี่ยวกับเรา',
  description:
    'จากประสบการณ์หลายปีของเรา คุณจึงมั่นใจได้ว่า เราซื้อรถของคุณแบบถูกต้องตามกฎหมาย มีเอกสารซื้อ-ขาย ชัดเจน ไม่ว่าคูณจะเป็นรถส่วนบุคคล' +
    'หรือ รถบริษัท เราก็รับซื้อ หากรถผ่อนอยู่ หรือติดไฟแนนซ์ ก็รับซื้อ พร้อมทั้งปิดบัญชีไฟแนนซ์ ให้คุณภายในวันเดียวจบ' +
    'ไม่ต้องรอนาน ปลอดภัยหายห่วง ด้วยบริกการ รับซื้อมอเตอร์ไซค์ มือสอง แบบมืออาชีพ ซื้อจริงให้ราคาสูง ตามที่คุณต้องการ ',

  social: [
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon, href: 'https://line.me/ti/p/Deg9nnhaih' },
  ],
};

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <br></br>
        <MainFeaturedPost post={mainFeaturedPost} />
        <FeaturedPost />
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="รับซื้อมอเตอร์ไซค์มือสอง" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            social={sidebar.social}
          />
        </Grid>

      </Container>
      <Tooltip title="Add" aria-label="add">

        <a className={classes.absolute}  href="https://line.me/ti/p/Deg9nnhaih"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png"  alt="เพิ่มเพื่อน" height="45" border="0" /></a>
      </Tooltip>
      <Footer title="บริการ รับซื้อ รถมอเตอร์ไซค์มือสอง สภาพ เก่า-ใหม่" description={foo} />
    </div>
  )

}

export default App