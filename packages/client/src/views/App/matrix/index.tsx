/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { v4 as uuid } from 'uuid'
import { FlexBox } from '../../../components'
import { ICell } from '../index'
import { cell, cover } from './styles'

interface IMatrixProps {
  state: []
  handleOnClick: (row: number, column: number) => void
}

export const Matrix: React.FC<IMatrixProps> = React.memo<IMatrixProps>(
  ({ state, handleOnClick }) => {
    return (
      <React.Fragment>
        {state.map((arr: [ICell], i: number) => (
          <FlexBox key={uuid()}>
            {arr.map((obj: ICell, j: number) => (
              <div key={uuid()} css={cell} onClick={() => handleOnClick(i, j)}>
                {obj.value === 9 ? (
                  <div style={{ color: 'red' }}>*</div>
                ) : (
                  obj.value
                )}
                <div css={cover(obj.revealed)}></div>
              </div>
            ))}
          </FlexBox>
        ))}
      </React.Fragment>
    )
  },
)
