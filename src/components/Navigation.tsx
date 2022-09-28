import React from "react";
import {
  Group,
  Text,
  NavLink as MantineNavLink,
  MediaQuery,
} from "@mantine/core";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  IconBook2,
  IconBooks,
  IconHome2,
  IconLogin,
  IconLogout,
  IconVocabulary,
  IconWorld,
} from "@tabler/icons";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Navigation = () => {
  const location = useLocation();
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <>
      <Group position="left">
        <IconBook2 size={36} />
        <MediaQuery query="(max-width: 750px)" styles={{ fontSize: "20px" }}>
          <Text component={Link} to="/" size={24} weight={700}>
            Reading Tracker
          </Text>
        </MediaQuery>
      </Group>

      <MediaQuery
        query="(max-width: 750px)"
        styles={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          marginLeft: "auto",
          marginTop: "auto",
        }}
      >
        <Group position="right" m={-42} pr={35}>
          {!isAuth && (
            <>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <MantineNavLink
                  active={location.pathname === "/"}
                  variant="subtle"
                  label="Home"
                  icon={<IconHome2 />}
                />
              </NavLink>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <MantineNavLink
                  label="Login"
                  icon={<IconLogin />}
                  active={location.pathname === "/login"}
                  variant="subtle"
                />
              </NavLink>
              <NavLink to="/register" style={{ textDecoration: "none" }}>
                <MantineNavLink
                  label="Register"
                  icon={<IconVocabulary />}
                  active={location.pathname === "/register"}
                  variant="subtle"
                />
              </NavLink>
            </>
          )}

          {isAuth && (
            <>
              <NavLink to="/books" style={{ textDecoration: "none" }}>
                <MantineNavLink
                  active={location.pathname === "/books"}
                  variant="subtle"
                  label="Books"
                  icon={<IconBooks />}
                />
              </NavLink>
              <NavLink to="/logout" style={{ textDecoration: "none" }}>
                <MantineNavLink
                  active={location.pathname === "/logout"}
                  variant="subtle"
                  label="Logout"
                  icon={<IconLogout />}
                />
              </NavLink>
            </>
          )}
          <NavLink to="/contact" style={{ textDecoration: "none" }}>
            <MantineNavLink
              label="Contact"
              icon={<IconWorld />}
              active={location.pathname === "/contact"}
              variant="subtle"
            />
          </NavLink>
        </Group>
      </MediaQuery>
    </>
  );
};

export default Navigation;
