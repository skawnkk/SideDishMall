import styled from 'styled-components'
import { useState, useEffect, useImperativeHandle, forwardRef } from 'react'

const CatgoryWrapper = styled.div`
  width: ${props=> `${props.width}px`};
  padding: 0px;
  overflow: hidden;
  border: 1px solid blue;
`
const CategoryColumn = styled.div`
  display: flex;
`
const CategorySlideBlock = styled.div`
  margin: 0 auto;
  margin-bottom: 80px;
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: ${props => {
    return props.size
  }}px;
`
const Block = styled.div`
  display: flex;
`

function CategorySlide ({ width, count, duration, children }, ref) {
  const transitionDefault = `all ${duration}`
  const panelWidth = width / count //320
 

  let block = []
  for (let i = 0; i < children.length; i += count) {
    block.push(children.slice(i, i + count)) //4-8:4567 //8-12: 891011
  }
  const lastCount = block[block.length - 1].length

  const startX = - width - lastCount * panelWidth


  const [x, setX] = useState(startX) 
  const [moving, setMoving] = useState(false)
  const [blockCount, setBlockCount] = useState(1)
  const [trasitionValue, setTransitionValue] = useState(transitionDefault)

  const onMove = direction => {
    if (moving) return
    if (direction + 1) {
      setX(prevX => {
        console.log(blockCount, '왼쪽')
        switch (blockCount) {
          case block.length:
            return prevX + direction * lastCount * panelWidth
          default:
            return prevX + direction * width
        }
      })
      setBlockCount(prevCnt => {

        switch (blockCount) {
          case 1:
            return block.length
          default:
            return --prevCnt
        }
      })
    } else {
      setX(prevX => {
        console.log(blockCount, '오른쪽')
        switch (blockCount) {
          case block.length - 1:
            return prevX + direction * lastCount * panelWidth
          default:
            return prevX + direction * width
        }
      })

      setBlockCount(prevCnt => {
        switch (blockCount) {
          case block.length:
            return 1
          default:
            return ++prevCnt
        }
      })
    }

    setMoving(true)
  }

  useImperativeHandle(ref, () => ({
    slideToLeft: onMove.bind(undefined, -1),
    slideToRight: onMove.bind(undefined, +1)
  }))
  const onTransitionEnd = () => {
    setMoving(false)
    if (blockCount === 1 && x < startX -
      width * (block.length - 1) 
    ) {
      setTransitionValue('none')
      setX(x => startX)
    } else if (blockCount === block.length && x > startX) {
      setTransitionValue('none') //b a b a
      setX(
        startX -
        width * (block.length - 2) -
          lastCount * panelWidth
      ) 
    }
  }

  useEffect(() => {
    if (trasitionValue === 'none') setTransitionValue(transitionDefault)
  }, [x])

  const ulStyles = {
    transform: `translate3d(${x}px, 0, 0)`,
    transition: trasitionValue
  }
  const makeBlock = el => {
    return (
      <Block className='Block'>
        {el.map((e, idx) => (
          <CardWrapper
            className='CardWrapper'
            size={panelWidth}
            key={idx + 'a'}
          >
            {e}
          </CardWrapper>
        ))}
      </Block>
    )
  }
 
 
  return (
    <>
      <CategorySlideBlock>
        <CatgoryWrapper width={width}>
          <CategoryColumn style={ulStyles} onTransitionEnd={onTransitionEnd}>
            {[
               makeBlock(block[block.length - 2]) ,makeBlock(block[block.length - 1]),
              ...block.map(makeBlock),
              makeBlock(block[0])
            ]}
          </CategoryColumn>
        </CatgoryWrapper>
      </CategorySlideBlock>
    </>
  )
}
export default forwardRef(CategorySlide);
