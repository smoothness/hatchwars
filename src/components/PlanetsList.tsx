import { use } from 'react'

import type { Planet } from '@/types'
import { getPlanets } from '@/api/planets'

function PlanetsList() {
  const planetsResponse = use(getPlanets())
  const { results: planets } = planetsResponse

  return (
    <div>
      {planets.map((planet: Planet) => (
        <details key={planet.url} className="mb-3">
          <summary>{planet.name}</summary>
          <ul className="border border-gray-200 !p-4">
            <li className="mb-">
              <strong className="text-fuchsia-800">Diameter:</strong> {planet.diameter}
            </li>
            <li className="mb-">
              <strong className="text-fuchsia-800">Gravity:</strong> {planet.gravity}
            </li>
            <li className="mb-">
              <strong className="text-fuchsia-800">Population:</strong> {planet.population}
            </li>
            <li className="mb-">
              <strong className="text-fuchsia-800">Climate:</strong> {planet.climate}
            </li>
            <li className="mb-">
              <strong className="text-fuchsia-800">Terrain:</strong> {planet.terrain}
            </li>
          </ul>
        </details>
      ))}
    </div>
  )
}

export default PlanetsList
