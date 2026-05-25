import { motion, useReducedMotion } from 'framer-motion';
import { Button, Descriptions, Flex, Typography } from 'antd';
import { getCountryLabel } from './constants.js';
import {
  fadeSlideBlock,
  getMotionTransition,
  staggerContainer,
} from './wizardAnimations.js';

const { Title } = Typography;

const WizardSummary = ({ values, onRestart }) => {
  const reduceMotion = useReducedMotion();
  const transition = getMotionTransition(reduceMotion);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Flex vertical gap="large">
        <motion.div variants={fadeSlideBlock} transition={transition}>
          <Title level={1}>Submission summary</Title>
        </motion.div>

        <motion.div variants={fadeSlideBlock} transition={transition}>
          <Descriptions bordered column={1} size="middle">
            <Descriptions.Item label="Name">{values.name}</Descriptions.Item>
            <Descriptions.Item label="Email">{values.email}</Descriptions.Item>
            <Descriptions.Item label="Country">
              {getCountryLabel(values.country)}
            </Descriptions.Item>
            <Descriptions.Item label="Age">{values.age}</Descriptions.Item>
          </Descriptions>
        </motion.div>

        <motion.div variants={fadeSlideBlock} transition={transition}>
          <Button type="primary" onClick={onRestart}>
            Почати заново
          </Button>
        </motion.div>
      </Flex>
    </motion.div>
  );
};

export default WizardSummary;
