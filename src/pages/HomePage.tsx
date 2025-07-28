import { Link } from 'react-router'

function HomePage() {
  return (
    <div>
      <section className="mb-8">
        <h2>Welcome to HatchWars!</h2>
        <p>Get ready for an intergalactic battle like no other!</p>
      </section>
      <section className="mb-8">
        <p>
          <strong>Explore the vast universe of planets</strong>
        </p>
        <p className="mb-4">Select a planet to start your adventure!</p>
        <Link to="/planets" className="bg-fuchsia-800 !text-white px-4 py-2 rounded">
          View Planets
        </Link>
      </section>
    </div>
  )
}

export default HomePage
