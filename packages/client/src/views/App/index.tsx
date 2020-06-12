/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { FlexBox, Container } from '../../components'
import { useGenerateGrid, useClearOfMinesMutation } from '../../hooks'
import { Matrix } from './matrix'
import { container } from './styles'

export interface ICell {
  value: number
  revealed: boolean
}

export const App: React.FC = () => {
  const { loading, data, error } = useGenerateGrid(15, 15)
  const [clearOfMines, { data: clearData }] = useClearOfMinesMutation()
  const memoizedState = React.useMemo(() => {
    if (clearData) return clearData?.clearOfMines

    return data?.generateGrid
  }, [data, clearData])

  const handleOnClick = (row: number, column: number) => {
    clearOfMines({
      variables: { row, column },
    })
  }

  if (error) {
    return <div>Loading</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  return (
    <Container center css={container}>
      <FlexBox column="true" align="center" justify="center">
        <Matrix state={memoizedState} handleOnClick={handleOnClick} />
      </FlexBox>
    </Container>
  )
}
