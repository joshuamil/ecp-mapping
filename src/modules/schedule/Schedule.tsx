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

import style from './Schedule.module.css'

const Schedule = () => {
  const [step, setStep] = useState(1)

  return (
    <>
      <section id="profile" data-step="3" className="masthead">
        <Grid>
          <Cell span={[4,12]}>
          
            <span className={style.breadcrumb}>{LANG_EN.step_three_title}</span>
            <h1>{LANG_EN.title_schedule}</h1>
          </Cell>
          <Cell span={[4,12]}>
            <Check/>
            Scheduling appointment at
            Clarkson Eyecare - Southfield
            <a href="">{LANG_EN.forms.buttons.change}</a>
          </Cell>
        </Grid>

        <fieldset>
          <Grid>
            <Cell span={[4,12]}>
              <FormControl>
                <StatefulCalendar
                  onChange={({date}) => console.log(date)} />
              </FormControl>
            </Cell>
            <Cell span={[4,12]}>
              <h2>{LANG_EN.forms.legend_select_time}</h2>
              <Grid>
                <Cell span={[2,4]}>
                  <h3>8:30 AM</h3>
                  <p>G. Middleton O.D.</p>
                </Cell>
                <Cell span={[2,4]}>
                  <h3>8:30 AM</h3>
                  <p>G. Middleton O.D.</p>
                </Cell>
                <Cell span={[2,4]}>
                  <h3>8:30 AM</h3>
                  <p>G. Middleton O.D.</p>
                </Cell>
                <Cell span={[2,4]}>
                  <h3>8:30 AM</h3>
                  <p>G. Middleton O.D.</p>
                </Cell>
              </Grid>
            </Cell>
            <Cell span={[4,12]}>
              <Button kind={KIND.primary} $as="a" href="/confirm">{LANG_EN.forms.buttons.continue}</Button>
            </Cell>
          </Grid>
        </fieldset>
        
      </section>
    </>
  )
}

export default Schedule
