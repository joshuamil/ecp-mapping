export type UserT = {
  googleId: string
  imageUrl: string
  email: string
  name: string
  givenName: string
  familyName: string
}

export type AddressT = {
  id: number
  first_name: string
  last_name: string
  company: string
  street_1: string
  street_2: string
  city: string
  state: string
  country: string
  country_iso2: string
  zip: string
  phone: string
  address_verified: string
}

export type OptionT = {
  label: string
  id: string
}
