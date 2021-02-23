import React, { useState } from 'react'
import { Grid, Cell } from 'baseui/layout-grid'
import { FormControl } from 'baseui/form-control'
import {StatefulCalendar} from 'baseui/datepicker'
import {Heading, HeadingLevel} from 'baseui/heading'
import { Button, KIND } from 'baseui/button'
import {
  Checkbox,
  LABEL_PLACEMENT
} from "baseui/checkbox";

import { Check } from "baseui/icon";

import {LANG_EN} from '../../constants';

import style from './Confirm.module.css'

const Confirm = () => {
  const [step, setStep] = useState(1)

  return (
    <>
      <section id="confirm" data-step="4" className="masthead">
        <Grid>
          <Cell span={[4,12]}>
            <span className={style.breadcrumb}>{LANG_EN.step_four_title}</span>
            <h1>{LANG_EN.title_confirm}</h1>
          </Cell>
        </Grid>

        <Grid>
          <Cell span={[3,11]}>
            <Check/>
            <h3>{LANG_EN.label_appointment_for}</h3>
            <h4>Johnny Appleseed</h4>
          </Cell>
          <Cell span={[1,1]}><a href="">{LANG_EN.forms.buttons.change}</a></Cell>
        </Grid>

        <Grid>
          <Cell span={[3,11]}>
            <Check/>
            <h3>{LANG_EN.label_location}</h3>
            <h4>Southfield</h4>
          </Cell>
          <Cell span={[1,1]}><a href="">{LANG_EN.forms.buttons.change}</a></Cell>
        </Grid>

        <Grid>
          <Cell span={[3,11]}>
            <Check/>
            <h3>{LANG_EN.label_date_and_time}</h3>
            <h4>March 17th at 12:15 PM EST</h4>
          </Cell>
          <Cell span={[1,1]}><a href="">{LANG_EN.forms.buttons.change}</a></Cell>
        </Grid>

        <fieldset>
          <Grid>
            <Cell span={[4,12]}>
              <Button kind={KIND.primary} $as="a" href="/thanks">{LANG_EN.forms.buttons.schedule}</Button>
            </Cell>
          </Grid>
        </fieldset>
        
      </section>
    </>
  )
}

export default Confirm
