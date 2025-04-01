import Heading from '@/components/ui/styled-heading';
import Image from 'next/image';
import albumArt from '@/public/music/something-simple-art.jpg';
import { Apple, Spotify } from 'react-bootstrap-icons';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-7 px-6 py-7 text-pretty">
      <Heading level={1} className="pt-5">
        Music
      </Heading>
      <p className="text-center">
        A lifelong musician, I play drums, guitar, and some piano.
      </p>
      <div className="flex max-w-4xl flex-col gap-7 text-lg">
        <div>
          <h2 className="text-3xl break-keep max-[495px]:text-center">
            Something Simple
          </h2>
          <Image
            src={albumArt}
            className="m-4 w-3/4 rounded-md max-[495px]:mx-auto min-[495px]:float-right min-[495px]:size-52 sm:size-60 md:size-72"
            alt="The artwork for Something Simple's album Big Big House"
            priority
          />
          <p className="my-2 text-xl max-[495px]:text-center">2006-2016</p>
          <p>
            I spent a decade as the drummer and backup singer for a group that
            built a small following in the New Haven area. Formed while we were
            still in school, our band mixed punk, indie, and alt rock influences
            to create a show that took us all around the state.
          </p>
          <p className="my-6">
            In 2013, we went up to Portsmouth, New Hampshire, to record an album
            at The Wild Arctic Studio. Recording and publishing our work was a
            highlight of our time together, matched only by headlining at Toads
            Place on a stage graced by such legends as the Rolling Stones,
            Johnny Cash, Bob Dylan, and U2.
          </p>
          <p>Stream it on:</p>
          <div className="mt-3 flex items-center gap-5">
            <Link
              href="https://music.apple.com/us/album/big-big-house/646769117"
              target="_blank"
              className="transition-colors hover:text-[#fa586a]"
            >
              <Apple className="size-6" />
              <span className="sr-only">Apple Music</span>
            </Link>
            <Link
              href="https://open.spotify.com/album/6vXMu8MNkOmkQI3uymMlzW?si=ia_EX4xZSBiZFyeuTzrzwQ"
              target="_blank"
              className="transition-colors hover:text-[#1ed760]"
            >
              <Spotify className="size-6" />
              <span className="sr-only">Spotify</span>
            </Link>
            <Link
              href="https://somethingsimpleband.bandcamp.com/"
              target="_blank"
              className="group flex gap-1.5 leading-4"
            >
              <span className="w-4 rotate-[11deg] -skew-12 bg-current transition-colors group-hover:bg-[#1da0c3]" />
              <span>bandcamp</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
