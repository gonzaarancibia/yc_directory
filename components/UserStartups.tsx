import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import { NextPage } from "next";
import StartupCard, { StartupTypeCard } from "./StartupCard";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

interface Props {
  id: string;
}

const UserStartups: NextPage<Props> = async ({ id }) => {
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });
  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartupTypeCard) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result"> No posts yet</p>
      )}
    </>
  );
};

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);

export default UserStartups;
