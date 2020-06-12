import { css } from '@emotion/core'

export const cover = (revealed?: boolean) =>
  css(
    {
      position: 'absolute',
      background: 'black',
      color: 'black',
      border: 'none',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      display: 'none',
    },
    !revealed && {
      display: 'block',
    },
  )

export const cell = css({
  border: '1px solid white',
  width: 30,
  height: 30,
  position: 'relative',
  cursor: 'pointer',
  lineHeight: '30px',
})
