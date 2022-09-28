import React from "react";
import {
  Anchor,
  Group,
  MediaQuery,
  SimpleGrid,
  Space,
  Text,
} from "@mantine/core";

const FooterContent = () => {
  return (
    <SimpleGrid cols={3}>
      <MediaQuery
        query="(max-width: 957px)"
        styles={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "150%",
        }}
      >
        <Group>
          <Text ml="xs" style={{ display: "flex" }} size={20}>
            <Text weight="bold">Telephone:</Text>
            <Space w="xs" />
            +40
            <Space w="xs" />
            <Text>200</Text>
            <Space w="xs" />
            <Text>000</Text>
            <Space w="xs" />
            <Text>000</Text>
          </Text>
          <MediaQuery
            query="(max-width: 957px)"
            styles={{ marginBottom: "150px" }}
          >
            <Group>
              <Text ml="xs" style={{ display: "flex" }} size={20} pb="sm">
                <Text weight="bold">Fax:</Text>
                <Space w="xs" />
                +40
                <Space w="xs" />
                <Text>211</Text>
                <Space w="xs" />
                <Text>111</Text>
                <Space w="xs" />
                <Text>111</Text>
              </Text>
            </Group>
          </MediaQuery>
        </Group>
      </MediaQuery>
      <MediaQuery
        query="(max-width: 957px)"
        styles={{ marginTop: "50px", textAlign: "center" }}
      >
        <Group position="center">
          <Text weight="bold">© 2022 X Company. All rights reserved.</Text>
        </Group>
      </MediaQuery>
      <MediaQuery
        query="(max-width: 957px)"
        styles={{
          display: "none",
        }}
      >
        <Group position="right">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Text weight="bold" size={20} pb="sm">
              USEFUL LINKS
            </Text>
            <Anchor
              size={14}
              style={{ color: "#C1C2C5" }}
              href="https://verilymag.com/2020/03/make-a-reading-log-of-your-past-reading-how-to"
              target="_blank"
            >
              The Benefits of Keeping a Reading Log
            </Anchor>
            <Anchor
              pb="sm"
              size={14}
              style={{ color: "#C1C2C5" }}
              href="https://www.healthline.com/health/benefits-of-reading-books"
              target="_blank"
            >
              Benefits of Reading Books
            </Anchor>
          </div>
        </Group>
      </MediaQuery>
    </SimpleGrid>
  );
};

export default FooterContent;
