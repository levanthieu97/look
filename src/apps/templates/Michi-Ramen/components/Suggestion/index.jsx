import Container from '../Container'
import nuocMam from '../../assets/mam-dau.jpg'
import baLai from '../../../../../apps/templates/Michi-Ramen/assets/ba-lai.jpeg'
import banhRe from '../../../../../apps/templates/Michi-Ramen/assets/banh-re.jpg'
import { SuggestionImageStyled, TextStyled } from 'src/apps/components/Card/styled'
import { Row } from 'src/apps/components/Row'
import { ItemStyled } from './styled'
import { useEffect, useRef } from 'react'
import { MEDIA, breakpoint } from 'src/styles/global.styled'

const suggestion = [
  {
    name: 'Nước mắm đậu phộng',
    image: nuocMam,
    description: 'Kết hợp với chả giò cá trích là nhức nách',
    price: 10000,
  },
  {
    name: 'Bánh bà lai',
    image: baLai,
    description: 'Bánh thơm béo gồm 3 lớp: là dứa, đậu xanh và trứng, chocolate',
    price: 220000,
  },
  {
    name: 'Bánh rế',
    image: banhRe,
    description: 'Được làm từ khoai lang.',
    price: 250000,
  },
]

const Suggestion = () => {
  const swiperElRef = useRef(null)

  return (
    <Container>
      <h1 className='text-white'>Bạn nên thử:</h1>
      <ItemStyled $borderRadius={25} $gap={50} $block>
        <swiper-container
          ref={swiperElRef}
          class='w-full'
          space-between='20'
          navigation='true'
          breakpoints={JSON.stringify({
            [breakpoint[MEDIA.MOBILE]]: {
              slidesPerView: 1,
            },
            [breakpoint[MEDIA.TABLET]]: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            [breakpoint[MEDIA.DESKTOP]]: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          })}
          navigation-next-el='.custom-next-button'
          navigation-prev-el='.custom-prev-button'
        >
          {suggestion.map((item, index) => (
            <swiper-slide key={`suggestion-${index}`}>
              <Row $gap={15} $flex={1}>
                <SuggestionImageStyled src={item.image} alt={item.name} loading='lazy' />
                <div>
                  <TextStyled $fontSize={26} $fontWeight={700}>
                    {item.name}
                  </TextStyled>
                  <TextStyled>{item.description}</TextStyled>
                </div>
              </Row>
            </swiper-slide>
          ))}
        </swiper-container>
        <div className='nav-btn custom-prev-button'>
          {/* <!-- https://feathericons.dev/?search=arrow-left&iconset=feather --> */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            className='main-grid-item-icon'
            fill='none'
            stroke='#fff'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          >
            <line x1='19' x2='5' y1='12' y2='12' />
            <polyline points='12 19 5 12 12 5' />
          </svg>
        </div>

        <div className='nav-btn custom-next-button'>
          {/* <!-- https://feathericons.dev/?search=arrow-right&iconset=feather --> */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            className='main-grid-item-icon'
            fill='none'
            stroke='#fff'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          >
            <line x1='5' x2='19' y1='12' y2='12' />
            <polyline points='12 5 19 12 12 19' />
          </svg>
        </div>
      </ItemStyled>
    </Container>
  )
}

export default Suggestion
