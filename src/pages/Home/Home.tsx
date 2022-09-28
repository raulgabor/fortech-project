import React from "react";
import { Group, MediaQuery, Text } from "@mantine/core";
import { IconBook, IconNotebook } from "@tabler/icons";

const Home = () => {
  return (
    <>
      <Group>
        <IconNotebook size={60} style={{ transform: "rotate(45deg)" }} />
      </Group>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "100%",
        }}
      >
        <Text size={24} mt={-30} sx={{ width: "90%" }} weight="bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non
          mauris mollis, lacinia nunc vel, ullamcorper turpis. Sed congue
          lobortis elit, id malesuada mi fermentum ac. Vivamus eget metus
          consectetur, venenatis ligula eu, tempus libero. Suspendisse in eros
          pellentesque, auctor nisl vel, pharetra sapien. Donec tempus, magna
          nec placerat convallis, diam leo suscipit turpis, et malesuada ipsum
          leo sed dui. In ut ligula porttitor, finibus risus quis, cursus
          turpis. Vestibulum ut euismod magna. Nunc quis pharetra urna, a
          euismod arcu. Curabitur dictum odio leo, sit amet tincidunt tellus
          rhoncus quis. Cras scelerisque mi purus. Etiam sed lectus sapien.
          Nullam ut magna eu lectus ullamcorper facilisis ac eget nulla.
          Pellentesque id lectus tellus. Quisque laoreet nunc at eros congue
          mattis. Cras et ipsum malesuada, commodo felis vel, cursus magna. Sed
          tincidunt elit non semper bibendum. Praesent elementum consectetur
          massa ut vestibulum. Aenean vitae justo ut urna molestie tempor in
          dignissim justo. Vivamus nec urna massa. Vivamus eget efficitur metus.
          Sed id urna ac erat consequat dignissim. Ut a velit ac sem vestibulum
          sollicitudin quis eget ex. Nulla scelerisque pulvinar est ut mattis.
          Nullam at sem eget diam interdum pellentesque non nec ipsum. Proin
          blandit sem ut odio malesuada, a sagittis libero hendrerit.
        </Text>
      </div>
      <MediaQuery query="(max-width: 426px)" styles={{ marginBottom: "80px" }}>
        <Group position="right" mt={-60} mr="sm">
          <IconBook size={60} style={{ transform: "rotate(-45deg)" }} />
        </Group>
      </MediaQuery>
    </>
  );
};

export default Home;
