import clsx from "clsx";
import { ArrowRightIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import * as React from "react";

import { ArgosEmblem } from "@/components/ArgosEmblem";
import { BRANDS } from "@/components/BrandTestimonials";
import { CallToActionSection } from "@/components/CallToActionSection";
import { Container } from "@/components/Container";
import { getMetadata } from "@/lib/metadata";

import { Users } from "../home/users/Users";

export const metadata: Metadata = getMetadata({
  title: "Customers",
  description: "Meet the teams that trust Argos for their frontend testing.",
  pathname: "/customers",
});

export default function Page() {
  return (
    <div className="">
      <Container className="my-20 text-balance text-center">
        <h1 className="mb-4 font-accent text-5xl md:text-6xl">Customers</h1>
        <p className="mx-auto max-w-2xl text-lg text-low">
          Argos empowers product teams at leading companies to catch visual bugs
          before they reach production – from startups to industry giants.
        </p>
      </Container>
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-3" asChild>
        <section>
          <Column>
            <CustomerCard brand={BRANDS.meta} />
            <QuoteCard
              href="/customers/mermaid"
              brand={BRANDS.mermaid}
              author="Sidharth Vinod"
              authorRole="Core maintainer"
              quote={
                <>
                  Argos has been a game-changer for us. It catches even the
                  smallest visual changes in our diagram rendering, giving us
                  peace of mind before every release.
                </>
              }
            />
            <CustomerCard brand={BRANDS.pivot} />
            <CustomerCard brand={BRANDS.planable} />
            <CustomerCard brand={BRANDS.yotpo} />
            <CustomerCard brand={BRANDS.sindri} />
          </Column>
          <Column>
            <QuoteCard
              href="/customers/lemonde"
              brand={BRANDS.lemonde}
              author="Paul Laleu"
              authorRole="CTO/CIO"
              quote={
                <>
                  Thanks to Argos, we can confidently deploy updates to Sirius
                  without worrying about unexpected issues disrupting our
                  editorial workflows.
                </>
              }
            />
            <CustomerCard brand={BRANDS.handsontable} />
            <QuoteCard
              href={BRANDS.mui.url}
              brand={BRANDS.mui}
              author="Olivier Tassinari"
              authorRole="Co-founder & CEO"
              quote={
                <>Argos CI is very helpful for us to maintain Material UI!</>
              }
            />
            <CustomerCard brand={BRANDS.rapidata} />
            <CustomerCard brand={BRANDS.businessInsider} />
          </Column>

          <Column>
            <CustomerCard brand={BRANDS.doctolib} />
            <QuoteCard
              href="/customers/gitbook"
              brand={BRANDS.gitbook}
              author="Samy Pessé"
              authorRole="Co-founder & CTO"
              quote={
                <>
                  Argos has become a cornerstone of our testing process. Its
                  ability to catch visual issues early has saved us countless
                  hours of manual QA and protected the integrity of our product
                  for millions of users.
                </>
              }
            />
            <CustomerCard brand={BRANDS.interactiveThings} />
            <CustomerCard brand={BRANDS.rho} />
            <CustomerCard brand={BRANDS.sivo} />
            <CustomerCard brand={BRANDS.forethought} />
          </Column>
        </section>
      </Container>
      <Container asChild>
        <Users />
      </Container>
      <Container asChild>
        <section>
          <CallToActionSection
            supercharge="your visual testing experience"
            description="Discover why Argos is the preferred visual testing tool of developers."
          >
            <ArgosEmblem className="mx-auto aspect-square size-24" />
          </CallToActionSection>
        </section>
      </Container>
    </div>
  );
}

function Column(props: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-8">{props.children}</div>;
}

function CardLink(props: {
  href: string;
  target?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      className={clsx(
        "group block rounded-lg border shadow outline-none transition duration-300",
        "hover:border-primary-hover hover:shadow-lg",
        "focus:border-primary-hover focus:shadow-lg",
      )}
      {...props}
    />
  );
}

type Brand = { src: string; alt: string; url: string };

function CardImage(props: { brand: Brand }) {
  return (
    <div className="flex items-center justify-center p-8">
      <Image
        priority
        height={64}
        className="dark:brightness-0 dark:invert"
        src={props.brand.src}
        alt={props.brand.alt}
      />
    </div>
  );
}

function CustomerCard(props: { brand: Brand }) {
  return (
    <CardLink href={props.brand.url} target="_blank">
      <CardImage brand={props.brand} />
    </CardLink>
  );
}

function QuoteCard(props: {
  href: string;
  brand: Brand;
  quote: React.ReactNode;
  author: string;
  authorRole: string;
}) {
  return (
    <CardLink href={props.href}>
      <CardImage brand={props.brand} />
      <div className="border-t p-8">
        <div className="text-lg">{props.quote}</div>
        <div className="mt-8 flex justify-between text-sm">
          <div>
            <div className="font-medium">{props.author}</div>
            <div className="text-low">{props.authorRole}</div>
          </div>
          <div>
            <div
              className={clsx(
                "rounded-full border p-2 transition duration-300",
                "group-hover:translate-x-1 group-hover:scale-105",
                "group-focus:translate-x-1 group-focus:scale-105",
              )}
            >
              <ArrowRightIcon className="size-5" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </CardLink>
  );
}