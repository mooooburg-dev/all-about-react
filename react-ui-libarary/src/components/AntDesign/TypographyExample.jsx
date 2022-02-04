import { Space, Typography } from "antd";
import React from "react";

export default function TypographyExample() {
  const { Text, Link, Title } = Typography;

  return (
    <Space direction="vertical">
      <Title></Title>
      <Text>Ant Design (default)</Text>
      <Text type="secondary">Ant Design (secondary)</Text>
      <Text type="success">Ant Design (success)</Text>
      <Text type="warning">Ant Design (warning)</Text>
      <Text type="danger">Ant Design (danger)</Text>
      <Text disabled>Ant Design (disabled)</Text>
      <Text mark>Ant Design (mark)</Text>
      <Text code>Ant Design (code)</Text>
      <Text keyboard>Ant Design (keyboard)</Text>
      <Text underline>Ant Design (underline)</Text>
      <Text delete>Ant Design (delete)</Text>
      <Text strong>Ant Design (strong)</Text>
      <Text italic>Ant Design (italic)</Text>
      <Text editable>Ant Design (editable)</Text>
      <Text copyable>Ant Design (copyable)</Text>
      <Link href="https://ant.design" target="_blank">
        Ant Design (Link)
      </Link>
    </Space>
  );
}
