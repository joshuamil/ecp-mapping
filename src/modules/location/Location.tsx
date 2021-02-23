import React, { useState } from 'react'
import { Grid, Cell } from 'baseui/layout-grid'
import {
  Card,
  StyledBody,
  StyledAction
} from "baseui/card";
import { Button } from 'baseui/button'
import { Check, Search } from 'baseui/icon'

import {LANG_EN} from '../../constants';

import style from './Location.module.css'

const Location = (props:any) => {
  const [step, setStep] = useState(1)

  const locs = props.locationData

  return (
    <>
      <Grid>
        <Cell span={12}>
          <Card 
            title={locs.name}
            overrides={{Root: {style: {margin: '0 0 1rem'}}}}
            >
            <StyledBody>
              <address>{locs.address_1}<br/>{locs.address_2}</address>

              <Grid>
                <Cell span={[2,6]}><Check /> {locs.distance}</Cell>
                <Cell span={[2,6]}><a href="#"><Search /> {LANG_EN.directions}</a></Cell>
              </Grid>

              <a href="tel://${this.locs.phone}">{locs.phone}</a>
            </StyledBody>
            <StyledAction>
              <Button $as="a" href="/profile">{LANG_EN.schedule_appointment}</Button>
            </StyledAction>
          </Card>
        </Cell>
      </Grid>
    </>
  )
}

export default Location


