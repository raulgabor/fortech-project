import React from "react";
import { AppShell, Footer, Header } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import FooterContent from "./FooterContent";
import { useMediaQuery } from "@mantine/hooks";

const Layout = () => {
  const headerHeight = useMediaQuery("(max-width: 750px)");

  return (
    <>
      <AppShell
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
        header={
          <Header height={headerHeight ? 270 : 60} p="md">
            {<Navigation />}
          </Header>
        }
      >
        <Outlet />
      </AppShell>
      <Footer p="md" height={60}>
        <FooterContent />
      </Footer>
    </>
  );
};

export default Layout;
