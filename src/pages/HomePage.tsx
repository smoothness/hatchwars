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
          <strong>
            For now, you can just explore the vast universe of planets, we are under construction to bring you more
            features!
          </strong>
        </p>
        <p className="mb-4">Select a planet to start your adventure!</p>
        <Link to="/planets" className="bg-fuchsia-800 !text-white px-4 py-2 rounded">
          View Planets
        </Link>
      </section>
      <section>
        <h2>Project Features</h2>
        <p>This is what I did here...</p>
        <p className="mb-6">I tried to implement all the requirements that Juan Carlos sent me, including:</p>
        <ul className="!list-disc pl-6">
          <li>
            React with NO framework... I have not work on a SPA for ages, been on Next.js for over 5 years, so this was
            a nice challenge to go back to basics.
          </li>
          <li>
            Added Eslint and Prettier tooling, play nice together, also configured them to work with VS Code, format on
            save.
          </li>
          <li>Used TypeScript, I use it all the time, so no problem there.</li>
          <li>Used React-router, again, havent used it in a while, just Next routing with app or pages router.</li>
          <li>Created a responsive design using Tailwind CSS without a component library, BTW I love Shadcn.</li>
          <li>
            Used a public API, JC gave me the following options (e.g., Yelp, Flickr, New York Times, etc.), but I
            prefered to go with something a little more relaxed, so I went with a Star Wars API... one of the many out
            there...
          </li>
          <li>
            I wanted, and tried to deploy with Dokploy spinning an EC2 AWS instance, but for some weird reason the
            instance is crashing... I spent some time trying to debug the issue, but at the end decided to use GOOD OLD
            Cloudflare Workers to deploy the app.
          </li>
          <li>The deployment works with a single `npm run deploy` command.</li>
          <li>
            I did not use any AI agents or generative tools, I coded all by hand, but I use VS Code with Copilot, so
            sure, I got some of the niceties of intellicense and autocompletion, but that is it... (I can prove it, ask
            me anything 👓)
          </li>
          <li>
            Installed and confiugured Jest, and created a test suite for the utility functions.. (I have to be honest,
            and in my day to day I think that unit and E2E tests are a good area were AI code generation works very
            good... as well as for documentation.
          </li>
        </ul>
      </section>
    </div>
  )
}

export default HomePage
