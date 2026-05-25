import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button, Flex, Form, Input, InputNumber, Select, Typography } from 'antd';
import { COUNTRY_OPTIONS } from './constants.js';
import { getMotionTransition } from './wizardAnimations.js';

const { Title } = Typography;

const WizardForm = ({ form, onFinish }) => {
  const reduceMotion = useReducedMotion();
  const [submitTable, setSubmitTable] = useState(false);
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmitTable(true))
      .catch(() => setSubmitTable(false));
  }, [form, values]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={getMotionTransition(reduceMotion, 0.25)}
    >
      <Flex vertical gap="large">
        <Title level={1}>Registration wizard</Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark="optional"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: 'Please enter your name' },
              { min: 2, message: 'Name must be at least 2 characters' },
            ]}
          >
            <Input placeholder="Test Test" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input placeholder="test@test.com" />
          </Form.Item>

          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true, message: 'Please select a country' }]}
          >
            <Select
              placeholder="Select country"
              options={COUNTRY_OPTIONS}
              allowClear
            />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[
              { required: true, message: 'Please enter your age' },
              {
                type: 'number',
                min: 18,
                max: 100,
                message: 'Age must be between 18 and 100',
              },
            ]}
          >
            <InputNumber min={18} max={100} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={!submitTable}>
              Відправити
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </motion.div>
  );
};

export default WizardForm;
