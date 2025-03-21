import Heading from '@/components/ui/styled-heading';
import Link from 'next/link';

// ! This should be in it's own file to be used elsewhere
function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      {...{ href }}
      target={external ? '_blank' : '_self'}
      className="text-sky-300 underline underline-offset-2 hover:text-sky-400"
    >
      {children}
    </Link>
  );
}

export default function Page() {
  return (
    <div className="flex flex-1 flex-col px-5 py-7">
      <div className="flex flex-col gap-10 p-4">
        <Heading level={1}>Showcase</Heading>
        <p>
          This portfolio covers all the publicly available projects that
          I&apos;ve developed since starting my journey into software
          engineering. It acts as a central hub for my work and tells the story
          of my growth as a developer. It is in reverse chronological order.
        </p>
        <div className="">
          <h2 className="text-3xl font-medium">LocalVol</h2>
          <p className="mb-2 text-lg font-medium">A Volunteer Jobs Board</p>
          <p>
            My most recent project is the LocalVol platform, a user-facing web
            app with a searchable database, events calendar, and job board to
            connect volunteers with nonprofits. LocalVol is the flagship product
            of Antonym Partners, and originally shipped under the name{' '}
            <TextLink external href="https://branfordvolunteers.org">
              BranfordVolunteers.org
            </TextLink>
            . Backed by the Branford Community Foundation, its initial release
            made the local news, both{' '}
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
          {/* Add tech used, images, links, etc */}
        </div>
        <div className="">
          <h2 className="text-3xl font-medium">Yuedpao</h2>
          <p className="mb-2 text-lg font-medium">An E-Commerce Website</p>
          <p>
            This responsive mock storefront for the Thai clothing company
            Yuedpao was a major step forward for me as a frontend developer, as
            it was the first time I worked with many important types of user
            interactivity: form actions, data submission, fetchers, loaders, and
            optimistic UI. It was also my largest project at the time and taught
            me a lot about keeping routing simple and readable to improve DX.
            Built as a Single-Page Application with React Router and Vite, the
            site fetches data from the REST API at <code>fakeStoreApi</code>.
            It&apos;s fully interactive and designed to be mobile-first. Users
            can add products to their cart, adjust quantities, and remove items
            they no longer want.
          </p>
        </div>
        <div className="">
          <h2 className="text-3xl font-medium">Welcome to the RaceTrack</h2>
          <p className="mb-2 text-lg font-medium">A Memory Game</p>
          <p>
            A Ted Lasso-themed challenge to pick the correct characters. Built
            with React and Vite, and fetching data from TVmaze&apos;s REST API.
          </p>
        </div>
        <div className="">
          <h2 className="text-3xl font-medium">ASSET</h2>
          <p className="mb-2 text-lg font-medium">A Restaurant in NYC</p>
          <p>
            Dynamic site, webpack, recursive, HTML-building utility functions
            (created a DOM in JS objects, then built it all at once).
          </p>
        </div>
        <div className="">
          <h2 className="text-3xl font-medium">Tic Tac Toe</h2>
          <p className="mb-2 text-lg font-medium">A Mobile-friendly Web Game</p>
          <p>Description.</p>
        </div>
        <div className="">
          <h2 className="text-3xl font-medium">Todo Web App</h2>
          <p className="mb-2 text-lg font-medium">
            A Kanban-style productivity tool
          </p>
          <p>Description.</p>
        </div>
      </div>
    </div>
  );
}
