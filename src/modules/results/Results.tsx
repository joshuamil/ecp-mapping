import React, { useState } from 'react'
import { Grid, Cell } from 'baseui/layout-grid'

import {LANG_EN} from '../../constants';

import style from './Results.module.css'

const Results = () => {
  const [step, setStep] = useState(1)

  // TODO: Mocked Service
  const getLocations = () => {
    const mock = [
      {
        name: 'Pontiac',
        address_1: '22 North Telegraph Rd',
        address_2: 'Pontiac, MI 48341',
        distance: '4 miles',
        phone: '8139792929',
      },
    ]
    const results:any = [];
    mock.forEach((loc) => {
      results.push(loc.name)
    })
    return results.join('');
  }

  return (
    <>
      <Grid>
        <Cell span={12}>
          <section className="search-results" data-step="1">
            <div className="search-details">
              <span>8 {LANG_EN.results_within} <a href="#">50 miles</a></span>
              <a href="#" className="button-action-small">{LANG_EN.map_view}</a>
            </div>

            <div id="search-list-view">{getLocations()}
            </div>
          </section>
        </Cell>
      </Grid>
    </>
  )
}

export default Results
