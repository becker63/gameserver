import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import css from "styled-jsx/css"
import { Box, Stack, HStack, Flex, styled, Center } from "styled-system/jsx";
import { Collapsible } from '~/components/ui/collapsible'
import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'
import { Popover, Tooltip } from '@ark-ui/react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Heading } from '~/components/ui/heading'
import { DotGothic } from "../fonts"

export default function Navbar() {
  return (
    <>
      <styled.nav color={"text"}>
        <HStack h={"60px"}>
          <Box display={{ base: "", }} marginLeft="20px" >
            <Heading size={"3xl"} fontWeight={'bold'} className={`${DotGothic.className}`} color={"text"}>{"<(^_^)>"}</Heading>
          </Box>
          <Heading mt={'5px'} size={"2xl"} fontWeight={'bold'} className={`${DotGothic.className}`} color={"text"}>GameServer</Heading>
          <Box paddingTop={"6px"} marginLeft={"auto"}>
            <DesktopNavBox />
          </Box>
        </HStack>
      </styled.nav>
    </>
  );
}

const PopOverContent = ({ title, desc }: { title: string, desc: string }) => {
  return (
    <Stack gap="1" key={title} backgroundColor={"grey"} position={"relative"} z-index={10}>
      <Heading color={"text"}>{title}</Heading>
        <Text color={"rgb(51, 51, 51)"}>
          {desc}
        </Text>
    </Stack>
  )
}

const DesktopNavBox = () => {
  const linkColor = "fc";
  const linkHoverColor = "fc";
  const popoverContentBgColor = "white";

  return (
    <Stack
      direction={"row"}
      padding={4}
      border={"2px"}
      borderRadius={"5"}
      boxShadow={"xl"}
    >
      {NAV_ITEMS.map((navItem) => (
        <Tooltip.Root openDelay={100} closeDelay={100} interactive={true}>
          <Tooltip.Trigger>{navItem.label}</Tooltip.Trigger>
          <Tooltip.Positioner>
            {navItem.children && (
              <Box transition={'all 1s linear'}>
              <Tooltip.Content>
                {/* big ew down here, only fix I got tho */}
                <Box z-index={1} position={"relative"}>
                <Tooltip.Arrow  style={{
                "--arrow-size": "20px",
                "--arrow-background": "grey"
              } as any}>
                  <Tooltip.ArrowTip/>
                </Tooltip.Arrow>
                </Box>
                {navItem.children.map((child) => (
                  <PopOverContent title={child.label} desc={child.subLabel!} />
                ))}
              </Tooltip.Content>
              </Box>
            )}
          </Tooltip.Positioner>
        </Tooltip.Root>
      ))}
    </Stack>
  );
};

const MobileView = () => {
  return (
    <Collapsible.Root defaultOpen>
      <Collapsible.Trigger asChild>
        <Button variant="outline">Toggle</Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Box bg="accent.default" color="accent.fg" p="4" borderRadius="l3" mt="3">
          Content
        </Box>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Inspiration",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Find Work",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Pricing",
    href: "#",
  },
];
