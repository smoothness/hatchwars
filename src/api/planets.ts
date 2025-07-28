const API_BASE_URL = import.meta.env.VITE_API_ENDPOINT

import type { Planet } from '@/types'

type PlanetsListPromise = {
  results: Planet[]
  count: number
  next: string | null
  previous: string | null
}

let planetsPromise: Promise<PlanetsListPromise> | null = null

async function getPlanets(): Promise<PlanetsListPromise> {
  planetsPromise = planetsPromise ?? fetch(`${API_BASE_URL}planets/`).then((response) => response.json())

  return planetsPromise
}

export { getPlanets }
