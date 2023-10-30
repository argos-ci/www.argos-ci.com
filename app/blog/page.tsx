import { Container } from "@/components/Container";
import { Link } from "@/components/Link";
import {
  PostCard,
  PostCardBody,
  PostCardTag,
  PostCardTitle,
  PostCardDescription,
  PostCardFooter,
  PostCardAuthor,
  PostCardDate,
  PostCardImage,
} from "@/components/PostCard";
import { Separator } from "@/components/Separator";
import { getArticles } from "@/lib/api";
import { Metadata } from "next";

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  }).format(new Date(date));
};

export const metadata: Metadata = {
  title: "Updates from the Argos team",
};

export default async function Page() {
  const articles = await getArticles();
  const firstArticle = articles[0];
  return (
    <Container className="my-10" style={{ contain: "none" }}>
      <div className="flex flex-col md:flex-row items-baseline gap-x-2">
        <h2 className="font-semibold text-white">Latest updates</h2>
        <div
          role="separator"
          aria-orientation="vertical"
          className="text-slate-600 hidden md:block"
        >
          |
        </div>
        <div className="text-sm text-on-light">
          All the latest Argos news, straight from the team.
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-20 gap-x-16 mt-12">
        <Link href={`/blog/${firstArticle.slug}`} className="col-span-2">
          <PostCard>
            <PostCardImage
              width={firstArticle.image.width}
              height={firstArticle.image.height}
              src={firstArticle.image.src}
              alt={firstArticle.imageAlt}
              extended
            />
            <PostCardBody>
              {firstArticle.category && (
                <PostCardTag>{firstArticle.category}</PostCardTag>
              )}
              <PostCardTitle extended>{firstArticle.title}</PostCardTitle>
              <PostCardDescription>
                {firstArticle.description}
              </PostCardDescription>
              <PostCardFooter>
                <PostCardAuthor>{firstArticle.author}</PostCardAuthor>
                <Separator />
                <PostCardDate>{formatDate(firstArticle.date)}</PostCardDate>
              </PostCardFooter>
            </PostCardBody>
          </PostCard>
        </Link>

        {articles.slice(1).map((article) => {
          return (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="col-span-2 md:col-span-1"
            >
              <PostCard>
                <PostCardImage
                  width={article.image.width}
                  height={article.image.height}
                  src={article.image.src}
                  alt={article.imageAlt}
                />
                <PostCardBody>
                  {article.category && (
                    <PostCardTag>{article.category}</PostCardTag>
                  )}
                  <PostCardTitle>{article.title}</PostCardTitle>
                  <PostCardDescription>
                    {article.description}
                  </PostCardDescription>
                  <PostCardFooter>
                    <PostCardAuthor>{article.author}</PostCardAuthor>
                    <Separator />
                    <PostCardDate>{formatDate(article.date)}</PostCardDate>
                  </PostCardFooter>
                </PostCardBody>
              </PostCard>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}