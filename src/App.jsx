import GlobalStyle, { Main } from './apps/templates/Michi-Ramen/styles/global.styled'
import product from './apps/templates/Michi-Ramen/assets/product.jpg'
import hap from './apps/templates/Michi-Ramen/assets/hap.jpg'
import chien from './apps/templates/Michi-Ramen/assets/chien.jpg'
import khoMuc from './apps/templates/Michi-Ramen/assets/kho-muc.jpg'
import mucOng from './apps/templates/Michi-Ramen/assets/muc-ong.jpg'
import mucMotNang from './apps/templates/Michi-Ramen/assets/muc-mot-nang.jpg'
import Grid from './apps/templates/Michi-Ramen/components/Grid'
import Card from './apps/components/Card'
import Header from './apps/templates/Michi-Ramen/components/Header'
import Suggestion from './apps/templates/Michi-Ramen/components/Suggestion'
import {motion} from 'framer-motion'
import InitialTransition from './apps/templates/Michi-Ramen/components/InitialTransition'
import Footer from './apps/templates/Michi-Ramen/components/Footer'

const products = [
  {
    name: 'Chả giò cá Trích',
    image: product,
    description:
      'Chả giò cá trích củ sắn thơm ngon, giòn tan trong miệng với rau củ giòn giòn.',
    price: 90000,
  },
  {
    name: 'Chả cá chiên',
    image: chien,
    description:
      'Chả cá Phan Thiết thơm ngon, cá được lựa chọn là cá thu, cá chai, cá mối, cá thẳn hoặc cá rựa.',
    price: 220000,
  },
  {
    name: 'Chả cá hấp',
    image: hap,
    description:
      'Cá được lựa chọn làm chả phải là loại cá tươi, cho thêm ít mỡ lưng heo, nấm mèo, tiêu hột, hành lá. Khi chả gần chín thì sẽ quết thêm một lớp lòng đỏ trứng gà lên phía trên.',
    price: 250000,
  },
  {
    name: 'Khô Mực lá 1 nắng đảo Phú Quý',
    image: mucMotNang,
    description:
      'Mực dược câu tại các đảo Phú Quý. Sản phẩm được hút ép chân không tiện lợi cho việc bảo quản, vận chuyển trong nước hoặc mang đi nước ngoài.',
    price: 24.99,
  },
  {
    name: 'Khô mực (size: 50-55/con)',
    image: khoMuc,
    description:
      'Mực ống được xẻ thịt trực tiếp lúc còn tươi sống, phơi qua 5-7 buổi nắng nên con mực đảm bảo hoàn toàn khô ráo, thịt ngọt lịm và độ dai vừa phải, khi nướng mực rất thơm.',
    price: 11.99,
  },
  {
    name: 'Mực ống tươi',
    image: mucOng,
    description:
      'Tươi sống, không ngâm qua hóa chất bảo quản, được sơ chế và cấp đông nhằm lưu lại độ tươi gần như tuyết đối.',
    price: 8.99,
  },
]

const App = () => {
  return (
    <motion.div exit={{ opacity: 0}}>
      <InitialTransition />
      <Main>
        <GlobalStyle />
        <Header/>
        <Grid>
          {products.map((product, index) => {
            return (
              <Card
                key={`product-${index}`}
                imageSrc={product.image}
                title={product.name}
                content={product.description}
                hightLightContent={product.price}
              />
            )
          })}
        </Grid>
        <Suggestion/>
        <Footer/>
      </Main>
    </motion.div>
  )
}

export default App
