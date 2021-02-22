import React, { useState } from 'react'
import { Grid, Cell } from 'baseui/layout-grid'

import {LANG_EN} from '../../constants';

import style from './Search.module.css'

const Search = () => {
  const [step, setStep] = useState(1)

  return (
    <>
      <Grid>
        <Cell span={12}>
        <section id="find" data-step="1" className="masthead">
          <span className={style.breadcrumb}>{LANG_EN.step_one_title}</span>
          <h1>{LANG_EN.title_find_us}</h1>
          <form role="search">
            <fieldset>
              <label htmlFor="search">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder={LANG_EN.forms.city_state_zip}
                />
                <button type="button" id="go"><i className="icon icon-large icon-down-alt"></i></button>
                <div className={style.panel}>
                  <fieldset>
                    <legend>{LANG_EN.search_radius}</legend>
                    <button id="radius1" value="10">10 MI.</button>
                    <button id="radius2" value="20">20 MI.</button>
                    <button id="radius3" value="50">50 MI.</button>
                    <button id="radius4" value="100">100 MI.</button>
                  </fieldset>
                  <fieldset>
                    <button>{LANG_EN.forms.buttons.clear}</button>
                    <button>{LANG_EN.forms.buttons.apply_filters}</button>
                  </fieldset>
                </div>
                <div className={style.help}><i className="icon icon-help"></i> {LANG_EN.in_my_state}</div>
              </label>
            </fieldset>
          </form>
        </section>
        </Cell>
      </Grid>
    </>
  )
}

export default Search
