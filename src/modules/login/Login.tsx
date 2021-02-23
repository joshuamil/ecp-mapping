import React, { useState } from 'react'
import { Grid, Cell } from 'baseui/layout-grid'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Button } from 'baseui/button'

import {LANG_EN} from '../../constants'

import style from './Login.module.css'

const Login = () => {
  const [step, setStep] = useState(1)

  return (
    <>
      <Grid>
        <Cell span={[4,12]}>
        <section id="find" data-step="1" className="masthead">
          <span className={style.breadcrumb}>{LANG_EN.step_one_title}</span>
          <h1>{LANG_EN.title_login}</h1>
          <form role="search">
            <fieldset>
              <Grid>
                <Cell span={[4,12]}>
                  <FormControl>
                    <Input
                      placeholder={LANG_EN.forms.email_address}
                    />
                  </FormControl>
                </Cell>
                <Cell span={[4,12]}>
                  <FormControl>
                    <Input
                      placeholder={LANG_EN.forms.password}
                    />
                  </FormControl>
                </Cell>
                <Cell span={[4,12]}>
                  <a href="/forgot">Forgot your password?</a>
                </Cell>
                <Cell span={[4,12]}>
                  <Button>Log In</Button>
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

export default Login
