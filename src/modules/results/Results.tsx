import React, { useState } from 'react'
import { Grid, Cell } from 'baseui/layout-grid'
import { Button, KIND } from 'baseui/button'
import { Show } from "baseui/icon";

import {LANG_EN} from '../../constants';

import style from './Results.module.css'
import Location from '../location/Location';

const Results = () => {
  const [step, setStep] = useState(1)

  // TODO: Mocked Service
  const getLocations = () => {
    const mock = [
      {
        name: 'Pontiac',
        address_1: '22 North Telegraph RD',
        address_2: 'Pontiac, MI 48341',
        distance: '4 miles',
        phone: '8139792929',
      },
      {
        name: 'Deerborne',
        address_1: '982 Evergreen TRC',
        address_2: 'Deerborne, MI 48333',
        distance: '24 miles',
        phone: '8139792897',
      },
    ]
    return mock;
  }

  const res = getLocations()

  return (
    <>
      <section className="search-results" data-step="1">
      <Grid>
        <Cell span={[2,6]}>8 {LANG_EN.results_within} <a href="#">50 miles</a></Cell>
        <Cell span={[2,6]}>
          <Show />
          <a href="#" className="button-action-small">{LANG_EN.map_view}</a>
        </Cell>
      </Grid>
      <Grid>
        <Cell span={[4,12]}>
          {res.map(loc => (
            <Location locationData = {loc} />
          ))}
        </Cell>
      </Grid>
      </section>
      <Grid>
        <Cell span={[4,12]}>
          <Button kind={KIND.secondary}>Load More</Button>
        </Cell>
      </Grid>
    </>
  )
}

export default Results
