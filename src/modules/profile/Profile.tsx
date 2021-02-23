import React, { useState } from 'react'
import { Grid, Cell } from 'baseui/layout-grid'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { PhoneInput } from 'baseui/phone-input'
import { DatePicker } from 'baseui/datepicker'
import { Button, KIND } from 'baseui/button'
import {
  Checkbox,
  LABEL_PLACEMENT
} from "baseui/checkbox";

import { Check } from "baseui/icon";

import {LANG_EN} from '../../constants';

import style from './Profile.module.css'

const Profile = () => {
  const [step, setStep] = useState(1)
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <section id="profile" data-step="2" className="masthead">
        <Grid>
          <Cell span={[4,12]}>
          
            <span className={style.breadcrumb}>{LANG_EN.step_two_title}</span>
            <h1>{LANG_EN.title_profile}</h1>
          </Cell>
          <Cell span={[4,12]}>
            <Check/>
            Scheduling appointment at
            Clarkson Eyecare - Southfield
            <a href="">{LANG_EN.forms.buttons.change}</a>
          </Cell>
        </Grid>

        <fieldset>
          <legend>{LANG_EN.forms.legend_contact_info}</legend>
          <Grid>
            <Cell span={12}>
              <FormControl>
                <Input
                  placeholder={LANG_EN.forms.first_name} />
              </FormControl>
            </Cell>
            <Cell span={12}>
              <FormControl>
                <Input
                  placeholder={LANG_EN.forms.last_name} />
              </FormControl>
            </Cell>
            <Cell span={12}>
              <FormControl>
                <PhoneInput
                  placeholder={LANG_EN.forms.phone_number} />
              </FormControl>
            </Cell>
            <Cell span={12}>
              <FormControl>
                <Input
                  type="email"
                  placeholder={LANG_EN.forms.email_address} />
              </FormControl>
            </Cell>
            <Cell span={12}>
              <FormControl>
                <DatePicker
                  placeholder={LANG_EN.forms.date_of_birth} />
              </FormControl>
            </Cell>
          </Grid>
        </fieldset>

        <fieldset>
          <legend>{LANG_EN.forms.legend_use_insurance}</legend>
          <Grid>
            <Cell span={[2,6]}>
              <Button kind={KIND.secondary}>{LANG_EN.forms.buttons.yes}</Button>
            </Cell>
            <Cell span={[2,6]}>
              <Button kind={KIND.primary}>{LANG_EN.forms.buttons.no}</Button>
            </Cell>
          </Grid>
        </fieldset>

        <fieldset>
          <Grid>
            <Cell span={12}>
              <FormControl>
                <Input
                  placeholder={LANG_EN.forms.policy_holder} />
              </FormControl>
            </Cell>
            <Cell span={12}>
              <FormControl>
                <Input
                  placeholder={LANG_EN.forms.insurance_provider} />
              </FormControl>
            </Cell>
            <Cell span={12}>
              <FormControl>
                <Input
                  placeholder={LANG_EN.forms.group_number} />
              </FormControl>
            </Cell>
            <Cell span={12}>
              <FormControl>
                <Input
                  placeholder={LANG_EN.forms.policy_number} />
              </FormControl>
            </Cell>
          </Grid>
        </fieldset>

        <Grid>
          <Cell span={12}>
            <FormControl>
              <Checkbox 
                checked={checked}
                onChange={e => setChecked(!checked)}
                labelPlacement={LABEL_PLACEMENT.right}>
                {LANG_EN.forms.acknowledge}
              </Checkbox>
            </FormControl>
            <Button kind={KIND.primary} $as="a" href="/schedule">{LANG_EN.forms.buttons.continue}</Button>
          </Cell>
        </Grid>
      </section>
    </>
  )
}

export default Profile
