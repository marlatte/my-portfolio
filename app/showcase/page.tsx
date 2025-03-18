import { Laptop } from 'react-bootstrap-icons';
import Heading from '@/components/ui/styled-heading';
import TextLink from '@/components/ui/text-link';
import Contents from '@/components/ui/sticky-contents';
import ShowcaseEntry from '@/components/ui/showcase-item';

function CodeInline({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md bg-neutral-950 px-1 py-0.5">{children}</code>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col px-4 py-7">
      <Heading level={1} className="pt-5 pb-7">
        Showcase
      </Heading>
      <div className="flex h-full flex-col gap-4 lg:flex-row lg:pr-32 lg:text-lg">
        <Contents
          sections={[
            'LocalVol',
            'Yuedpao',
            'RichMind FC',
            'ASSET',
            'Tic Tac Toe',
            'Todo Web App',
          ]}
        />
        <div>
          <div className="mb-14">
            <div className="float-right mx-3 mb-1 grid place-content-center rounded-lg bg-indigo-900 px-2 py-1">
              <Laptop className="size-12 fill-indigo-300 md:size-20" />
            </div>
            <p>
              This portfolio covers all the publicly available projects that
              I&apos;ve developed since starting my journey into software
              engineering. It acts as a central hub for my work and tells the
              story of my growth as a developer. It is in reverse chronological
              order.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10">
            <ShowcaseEntry
              title="LocalVol"
              subtitle="A Volunteer Jobs Board"
              href="https://branfordvolunteers.org"
              image={{
                src: '/showcase/branvol-home.png',
                alt: 'A screenshot of BranfordVolunteers.org',
              }}
            >
              <p>
                My most recent project is the LocalVol platform, a user-facing
                web app with a searchable database, events calendar, and job
                board to connect volunteers with nonprofits. LocalVol is the
                flagship product of Antonym Partners, and originally shipped
                under the name{' '}
                <TextLink external href="https://branfordvolunteers.org">
                  BranfordVolunteers.org
                </TextLink>
                . Backed by the Branford Community Foundation, its initial
                release made the local news, both{' '}
                <TextLink
                  external
                  href="https://www.ctinsider.com/shoreline/article/branford-volunteers-nonprofit-groups-website-19959224.php"
                >
                  print
                </TextLink>{' '}
                and{' '}
                <TextLink
                  external
                  href="https://www.youtube.com/watch?v=tzjTc0z0fnw"
                >
                  television
                </TextLink>
                .
              </p>
            </ShowcaseEntry>
            <ShowcaseEntry
              title="ClimaCast"
              subtitle="A Weather App"
              href="https://github.com/marlatte/grassroots-weather"
              image={{
                src: '/showcase/weather-app.png',
                alt: 'A screenshot of the weather forecast in New York',
              }}
            >
              <p>
                Built as part of a challenge, I finished this browser-based
                weather app in just 2.5 days. I used Next.js to scaffold it
                quickly, TypeScript to keep it bug-free, Tremor to graph data,
                and Tailwind to give it a consistent style. It uses{' '}
                <CodeInline> localStorage</CodeInline> to keep track of
                users&apos; favorite cities and fetches its data from
                OpenWeather&apos;s{' '}
                <TextLink external href="https://openweathermap.org/api">
                  REST API
                </TextLink>
                . As with most of my projects, it was built to be mobile-first.
              </p>
              <p className="mt-3">Other features include:</p>
              <ul className="list-inside list-disc">
                <li>Multi-city comparisons.</li>
                <li>Interactive charts.</li>
                <li>
                  iOS-inspired visualizations for wind direction, sunrise/set,
                  and air pressure.
                </li>
              </ul>
            </ShowcaseEntry>
            <ShowcaseEntry
              title="Portfolio"
              subtitle="this === window; // true"
              href="https://github.com/marlatte/my-portfolio"
              image={{
                src: '/showcase/portfolio-home.png',
                alt: "A screenshot of this site's homepage.",
              }}
            >
              <p>
                Listing <CodeInline>my-portfolio</CodeInline> in my portfolio?
                Now that&apos;s some good recursion! The{' '}
                <TextLink
                  external
                  href="https://github.com/marlatte/my-portfolio/blob/main/components/ui/dots.tsx"
                >
                  dots background
                </TextLink>{' '}
                on the homepage was by far the most time-consuming to create.
                Especially since the number of dots vary by screen width.
                Pro-tip, refresh the page if the <CodeInline>canvas</CodeInline>{' '}
                element isn&apos;t resizing.
              </p>
              <p className="mt-3">Built with all my favorites:</p>
              <ul className="list-inside list-disc">
                <li>TypeScript</li>
                <li>
                  <TextLink external href="https://storybook.js.org/">
                    Storybook
                  </TextLink>
                </li>
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind</li>
              </ul>
            </ShowcaseEntry>
            <ShowcaseEntry
              title="Yuedpao"
              subtitle="An E-Commerce Website"
              href="https://github.com/marlatte/shopping-cart"
              image={{
                src: '/showcase/yuedpao-home.png',
                alt: 'A screenshot of the Yuedpao mockup',
              }}
            >
              <p>
                This responsive mock storefront for the Thai clothing company
                Yuedpao was a major step forward for me as a frontend developer,
                as it was the first time I worked with many important types of
                user interactivity: form actions, data submission, fetchers,
                loaders, and optimistic UI. It was also my largest project at
                the time and taught me a lot about keeping routing simple and
                readable to improve DX. Built as a Single-Page Application with
                React Router and Vite, the site fetches data from the REST API
                at <CodeInline> fakeStoreApi</CodeInline>. It&apos;s fully
                interactive and designed to be mobile-first. Users can add
                products to their cart, adjust quantities, and remove items they
                no longer want.
              </p>
            </ShowcaseEntry>
            <ShowcaseEntry
              title="RichMind FC"
              subtitle="A Memory Game"
              href="https://github.com/marlatte/memory-card"
              image={{
                src: '/showcase/memory-game.png',
                alt: 'A screenshot of RichMind FC',
              }}
            >
              <p>
                Pick your starting lineup without clicking the same character
                twice in this Ted Lasso-themed challenge. Easy mode is a breeze,
                but can you get 15 in a row right to beat Hard mode? Built with
                React and Vite, this game fetches character data from
                TVmaze&apos;s REST API.
              </p>
            </ShowcaseEntry>
            <ShowcaseEntry
              title="ASSET"
              subtitle="A Restaurant in NYC"
              href="https://github.com/marlatte/restaurant-js-page"
              image={{
                src: '/showcase/restaurant-home.png',
                alt: 'A screenshot of the restaurant homepage',
              }}
            >
              <p>
                This dynamic site was built entirely in vanilla JavaScript,
                using Webpack to inject content into a blank HTML document. To
                do this efficiently, I wrote some{' '}
                <TextLink
                  external
                  href="https://github.com/marlatte/restaurant-js-page/blob/main/src/dom-factories.js"
                >
                  recursive, HTML-building utility functions
                </TextLink>{' '}
                that create a virtual DOM in JS objects, then build it all at
                once in <CodeInline> index.js</CodeInline>, which acts as a{' '}
                <TextLink
                  external
                  href="https://github.com/marlatte/restaurant-js-page/blob/main/src/index.js"
                >
                  controller module
                </TextLink>
                .
              </p>
            </ShowcaseEntry>
            <ShowcaseEntry
              title="Tic Tac Toe"
              subtitle="A Mobile-friendly Web Game"
              href="https://github.com/marlatte/tic-tac-toe"
              image={{
                src: '/showcase/tic-tac-toe-home.png',
                alt: 'A screenshot of the tic tac toe homepage',
              }}
            >
              <p>
                My mobile-first game of tic-tac-toe has multi-player and single
                player modes. This was my first vanilla JS project focused on
                minimizing global code by using factory functions and the module
                pattern. I put a lot of emphasis on its responsive design in
                CSS, including fallbacks for features not available on all
                browsers.
              </p>
            </ShowcaseEntry>
            <ShowcaseEntry
              title="Todo Web App"
              subtitle="A Kanban-style productivity tool"
              href="https://github.com/marlatte/todo-app"
              image={{
                src: '/showcase/todo-home.png',
                alt: 'A screenshot of the Todo App',
              }}
            >
              <p>
                Organize your tasks, from a simple &quot;note to self&quot; to
                more complex data like due-dates to priority levels, all
                displayed on a Kanban-style board. For mobile users, columns
                become stacked vertically.
              </p>
            </ShowcaseEntry>
            <ShowcaseEntry
              title="Rock Paper Scissors"
              subtitle="A Playground Classic"
              href="https://github.com/marlatte/rock-paper-scissors"
              image={{
                src: '/showcase/rock-paper-scissors.png',
                alt: 'A screenshot of the Rock Paper Scissors homepage',
              }}
            >
              <p>
                My take on a classic, with retro-futuristic styling and
                mobile-first design. This was my first JavaScript game! The
                initial version was played in the console. I added a GUI as I
                moved through the Odin Project lessons, and later refactored it
                again after peer-review.
              </p>
            </ShowcaseEntry>
          </div>
        </div>
      </div>
    </div>
  );
}
