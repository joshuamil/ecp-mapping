import React, { useState } from 'react'
import { Grid, Cell } from 'baseui/layout-grid'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Button } from 'baseui/button'

import { Filter } from "baseui/icon";

import {LANG_EN} from '../../constants'

import style from './Search.module.css'

const Search = () => {
  const [step, setStep] = useState(1)
  const [search, setValue] = useState("")

  return (
    <>

      <div className={style.panel}>
        <fieldset>
          <legend>{LANG_EN.search_radius}</legend>
          <Button>10 MI.</Button>
          <Button>20 MI.</Button>
          <Button>50 MI.</Button>
          <Button>100 MI.</Button>
        </fieldset>
        <fieldset>
          <Button>{LANG_EN.forms.buttons.clear}</Button>
          <Button>{LANG_EN.forms.buttons.apply_filters}</Button>
        </fieldset>
      </div>

      <Grid>
        <Cell span={[4,12]}>
        <section id="find" data-step="1" className="masthead">
          <span className={style.breadcrumb}>{LANG_EN.step_one_title}</span>
          <h1>{LANG_EN.title_find_us}</h1>
          <form role="search">
            <fieldset>
              <Grid>
                <Cell span={[3,11]}>
                  <FormControl
                    caption={LANG_EN.in_my_state}>
                    <Input
                      type="search"
                      value={search}
                      onChange={event => setValue(event.currentTarget.value)}
                      placeholder={LANG_EN.forms.city_state_zip}
                      clearOnEscape
                    />
                  </FormControl>
                </Cell>
                <Cell span={[1,1]}>
                  <Button><Filter/></Button>
                </Cell>
              </Grid>
            </fieldset>
          </form>
        </section>
        </Cell>
      </Grid>
    </>
  )
}

export default Search
