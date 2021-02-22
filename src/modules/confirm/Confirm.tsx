import React, { useState } from 'react'
import { Grid, Cell } from 'baseui/layout-grid'

import {LANG_EN} from '../../constants';

import style from './Confirm.module.css'

const Confirm = () => {
  const [step, setStep] = useState(1)

  return (
    <>
      <Grid>
        <Cell span={12}>
        
        </Cell>
      </Grid>
    </>
  )
}

export default Confirm
