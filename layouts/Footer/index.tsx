import { Button, Col, Row } from "react-bootstrap";
import { memo } from "react";

function Footer(): React.ReactElement {
  return (
    <footer className="my-3 p-3 rounded-3">
      <Row>
        <Col sm={6}>
          <h5 className="text-center mb-3">درباره ما</h5>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
            است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </Col>
        <Col sm={6}>
          <h5 className="text-center mb-3">آدرس و تلفن‌های تماس</h5>
          <address className="mb-4">
            ایران، تهران، سعادت آباد، بلوار دریا، بلوار نبی اکرم، خیابان شهید محمد قیصری (۳۲ غربی)،
            پلاک ۹۷
          </address>
          <Row className="text-start">
            <Col md={6}>۰۲۱۸۷۶۵۴۳۲ (۹۸+)</Col>
            <Col md={6}>۰۹۱۲۳۴۵۶۷۸۹ (۹۸+)</Col>
          </Row>
        </Col>
      </Row>
      <h4 className="text-center mt-5 mb-3">دانلود برنامه</h4>
      <Row className="text-center mb-4">
        <Col xs={6} md={3}>
          <Button className="my-2" variant="success">
            گوگل پلی
          </Button>
        </Col>
        <Col xs={6} md={3}>
          <Button className="my-2" variant="success">
            مایکت
          </Button>
        </Col>
        <Col xs={6} md={3}>
          <Button className="my-2" variant="success">
            بازار
          </Button>
        </Col>
        <Col xs={6} md={3}>
          <Button className="my-2" variant="success">
            اپل استور
          </Button>
        </Col>
      </Row>
      <p className="text-center mb-0">کلیه حقوق این سایت متعلق به بیت‌پین است.</p>
    </footer>
  );
}

export default memo(Footer);
