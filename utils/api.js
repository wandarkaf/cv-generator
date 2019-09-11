import fetch from 'isomorphic-unfetch'

// constants
import {
  API_ROOT_URL,
  PROFILE_ID
} from '../constants'

// endpoints
const searchProfile = `?profileId=${PROFILE_ID}&_sort=startDate&_order=desc`
const endpoints = {
  studies: `${API_ROOT_URL}studies${searchProfile}`,
  jobs: `${API_ROOT_URL}jobs${searchProfile}`,
  skills: `${API_ROOT_URL}skills?profileId=${PROFILE_ID}`,
  profile: `${API_ROOT_URL}profiles?id=${PROFILE_ID}`
}

export const getData = async endpoint => {
  const res = await fetch(endpoints[endpoint])
  const data = await res.json()
  return data
}
