import StartupCard, { StartupCardType } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();

  // Entender que esto trae información en tiempo real - Habilitando la conexión en vivo para reflejar cambios inmediatos
  // Esto significa que cuando haya cambios inmediatos, esta función se actualizará automáticamente
  // Esto se logra gracias a la conexión en vivo de Sanity con la base de datos
  const { data: posts } = await sanityFetch({
    query: STARTUPS_QUERY,
    params,
  });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results"> No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}