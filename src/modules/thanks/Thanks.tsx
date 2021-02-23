import React, { useState } from 'react'
import { Grid, Cell } from 'baseui/layout-grid'
import { Check } from "baseui/icon";

import {LANG_EN} from '../../constants';

import imgCompass from '../../assets/images/noun_Compass_2245632.svg';

import './Thanks.module.css'

const Thanks = () => {
  const [step, setStep] = useState(1)

  return (
    <>
      <section id="thanks" data-step="5" className="masthead">
        <Grid>
          <Cell span={[4,12]}>
            <span className="breadcrumb">{LANG_EN.step_five_title}</span>
            <h1>{LANG_EN.title_thanks}</h1>
          </Cell>
          <Cell span={[4,12]}>
            12:15 PM EST | Dr. Glenn Middleton O.D.
            March 17th, 2021
            Clarkson Eyecare - Southfield
          </Cell>
          <Cell span={[2,6]}>
            <Check />
            <a href="">Directions</a>
          </Cell>
          <Cell span={[2,6]}>
            <Check />
            <a href="">Add to Calendar</a>
          </Cell>
          <Cell span={[4,12]}>
            <h2>{LANG_EN.next_steps}</h2>
          </Cell>

          <Cell span={[1,1]}>
            <img src={imgCompass} />
          </Cell>
          <Cell span={[3,11]}>
            <h3>{LANG_EN.save_time_title}</h3>
            <p>{LANG_EN.save_time_text}</p>
            <a href="">{LANG_EN.forms.buttons.complete_form}</a>
          </Cell>

          <Cell span={[1,1]}>
            <img src={imgCompass} />
          </Cell>
          <Cell span={[3,11]}>
            <h3>{LANG_EN.create_account_title}</h3>
            <p>{LANG_EN.create_account_text}</p>
            <a href="">{LANG_EN.forms.buttons.create_account}</a>
          </Cell>

          <Cell span={[1,1]}>
            <img src={imgCompass} />
          </Cell>
          <Cell span={[3,11]}>
            <h3>{LANG_EN.why_us_title}</h3>
            <p>{LANG_EN.why_us_text}</p>
            <a href="">{LANG_EN.forms.buttons.learn_more}</a>
          </Cell>

          <Cell span={[4,12]}>{LANG_EN.arrival_info}</Cell>
        </Grid>
      </section>
    </>
  )
}

export default Thanks
