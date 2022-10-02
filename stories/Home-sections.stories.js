/* eslint-disable react/no-unescaped-entities */
import { x, useUp } from "@xstyled/styled-components";
import {
  SparklesIcon,
  EyeIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import {
  CameraIcon,
  ArrowUpOnSquareStackIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";
import heroIllustration from "@/images/hero-illustration.png";
import {
  Features,
  Feature,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
} from "../components/Feature";
import { CompatibilityIllustration } from "@/components/CompatibilityIllustration";
import argosDiagramMobile from "@/images/argos-diagram-mobile.png";
import argosDiagramDesktop from "@/images/argos-diagram-desktop.png";
import tassinariProfile from "@/images/tassinari-profile.png";
import { InfiniteLooper } from "@/components/AnimatedHorizontalSlider";
import { AntDesign } from "@/components/AntDesign";
import { GitBook } from "@/components/GitBook";
import { LeMonde } from "@/components/LeMonde";
import { Doctolib } from "@/components/Doctolib";
import { Mui } from "@/components/Mui";

const main = {
  title: "Home Sections",
};

export default main;

export const AboveTheFold = () => (
  <x.div display="flex" gap={11} alignItems="center">
    <x.div display="flex" flexDirection="column" gap={6} flex={1}>
      <Chip link>
        <x.div as={SparklesIcon} w={4} />
        <x.span fontWeight="700">New · </x.span>
        Storybook support
      </Chip>
      <x.h1 text="h1">Ship pixel perfect apps with no bug.</x.h1>
      <x.p text="hero-paragraph">
        Argos detects all visual changes in websites, components or applications
        and notifies in pull-requests.
      </x.p>
      <x.div display="flex" gap={{ _: 4, sm: 6 }}>
        <Button>View a demo build</Button>
        <Button color="secondary" variant="outline">
          Documentation
        </Button>
      </x.div>
    </x.div>

    <x.div flex={1} display={{ _: "none", md: "block" }}>
      <x.img src={heroIllustration} alt="hero-illustration" w={1} />
    </x.div>
  </x.div>
);

export const HowDoesItWorks = () => (
  <x.div display="flex" flexDirection="column" gap={6} alignItems="center">
    <Chip link>
      <x.div as={EyeIcon} w={4} />
      What is Argos?
    </Chip>
    <x.h2 text="h2" textAlign="center">
      Get instant value from a simple screenshot
    </x.h2>
    <x.p text="paragraph" textAlign="center">
      Take screenshots, upload them and get instant value by being notified of
      changes.
    </x.p>
    <Features>
      <Feature>
        <FeatureIcon icon={CameraIcon} />
        <FeatureTitle>Take screenshots</FeatureTitle>
        <FeatureText>
          Use one of Argos’ many integrations to take screenshots or do it
          yourself.
        </FeatureText>
      </Feature>
      <Feature>
        <FeatureIcon icon={ArrowUpOnSquareStackIcon} color="orange" />
        <FeatureTitle>Upload screenshots</FeatureTitle>
        <FeatureText>
          Add one command in your CI to upload screenshots to Argos.
        </FeatureText>
      </Feature>
      <Feature>
        <FeatureIcon icon={CheckCircleIcon} color="green" />
        <FeatureTitle>Review changes</FeatureTitle>
        <FeatureText>
          Get status on your pull-requests and use Argos to review and approve
          changes.
        </FeatureText>
      </Feature>
    </Features>
  </x.div>
);

export const Compatibility = () => (
  <x.div
    display="flex"
    flexDirection={{ _: "column", md: "row" }}
    gap={16}
    alignItems="center"
  >
    <x.div flex={1} display="flex" justifyContent="center">
      <CompatibilityIllustration />
    </x.div>
    <x.div display="flex" flexDirection="column" gap={6} flex={1}>
      <Chip>
        <x.div as={Square3Stack3DIcon} w={4} />
        Easy integration
      </Chip>
      <x.h2 text="h2">Compatible with your stack</x.h2>
      <x.p text="paragraph">
        Argos offers SDK for most frameworks, testing libraries and CI
        providers. This is not mandatory, as long as you can take screenshots,
        you can use Argos.
      </x.p>
    </x.div>
  </x.div>
);

export const Universal = () => {
  const md = useUp("md");

  return (
    <x.div
      display="flex"
      flexDirection={{ _: "column-reverse", md: "row" }}
      gap={20}
    >
      <x.div flex={1} display="flex" flexDirection="column" gap={6}>
        <Chip>
          <x.svg as={RocketLaunchIcon} w={4} />
          Unified platform
        </Chip>
        <x.div text="h2">Review websites, apps and components together</x.div>
        <x.div text="paragraph">
          Argos has no limit. Whether it's a single component or a website in
          multiple resolutions, everything is possible. Use a single tool for
          Visual Testing.
        </x.div>
      </x.div>

      <x.div flex={1} display="flex" justifyContent="center">
        {md ? (
          <x.img
            src={argosDiagramDesktop}
            alt="argos-diagram"
            objectFit="contain"
            w={1}
            h="auto"
            mt={-4}
          />
        ) : (
          <x.img src={argosDiagramMobile} alt="argos-diagram" w={300} />
        )}
      </x.div>
    </x.div>
  );
};

export const Testimonial = () => (
  <x.div position="relative" mt={200}>
    <x.div
      backgroundImage="gradient-to-b"
      gradientFrom="fuchsia-100-a70"
      gradientTo="sky-100-a70"
      position="absolute"
      h="180%"
      w="150%"
      top={0}
      left={0}
      zIndex={-1}
      opacity={0.5}
      transform
      rotate={-6}
      translateY={-150}
      translateX={-150}
    />
    <x.div
      display="flex"
      flexDirection="column"
      gap={8}
      textAlign="center"
      alignItems="center"
    >
      <x.div text="testimonial">
        "Argos helps us every day to avoid regression on all MUI components."
      </x.div>
      <x.img src={tassinariProfile} w={20} h={20} borderRadius="full" />
      <x.div lineHeight={1.5} fontWeight="semibold">
        Olivier Tassinari
        <br />
        Founder & CEO of MUI
      </x.div>
      <x.hr borderBottom={1} borderColor="border" w={1} />
      <x.div color="slate-700" fontWeight={700} fontSize="sm" lineHeight={1.3}>
        TRUSTED BY THE BEST FRONT-END TEAMS
      </x.div>

      <InfiniteLooper gap={10} repeat={4}>
        <x.svg as={Mui} />
        <x.svg as={AntDesign} />
        <x.svg as={Doctolib} />
        <x.svg as={LeMonde} />
        <x.svg as={GitBook} />
      </InfiniteLooper>
    </x.div>
  </x.div>
);

export const Community = () => (
  <x.div
    display="flex"
    flexDirection="column"
    gap={6}
    textAlign="center"
    alignItems="center"
  >
    <Chip>
      <x.svg as={HeartIcon} w={4} />
      Open source
    </Chip>
    <x.h2 text="h2">Join the community</x.h2>
    <x.div text="paragraph">
      Argos is open source and community driven. Supported by a network of early
      advocates, contributors, and champions.
    </x.div>
    <Button display="flex" gap={1} w="fit-content">
      <x.svg as={ChatBubbleLeftRightIcon} w={4} />
      Chat about Argos on Discord
    </Button>
  </x.div>
);
