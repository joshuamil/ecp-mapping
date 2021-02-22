export type Hours = {
  open: string
  close: string
  break: string
}

export type HoursOfOperation = {
  sunday: Hours
  monday: Hours
  tuesday: Hours
  wednesday: Hours
  thursday: Hours
  friday: Hours
  saturday: Hours
}

export type Location = {
  id: number
  company: string
  address1: string
  address2: string
  city: string
  state: string
  country: string
  country_iso2: string
  postcode: string
  phone: string
  hours_of_operations: HoursOfOperation
}

export type Provider = {
  id: number
  location_id: number
  firstname: string
  middlename: string
  lastname: string
  credentials: string
}