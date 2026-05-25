import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Form } from 'antd';
import WizardForm from './WizardForm.jsx';
import WizardSummary from './WizardSummary.jsx';

const Wizard = () => {
  const [form] = Form.useForm();
  const [submittedValues, setSubmittedValues] = useState(null);

  const handleFinish = (values) => {
    setSubmittedValues(values);
  };

  const handleRestart = () => {
    form.resetFields();
    setSubmittedValues(null);
  };

  return (
     <AnimatePresence mode="wait">
      {submittedValues ? (
        <WizardSummary
          key="summary"
          values={submittedValues}
          onRestart={handleRestart}
        />
      ) : (
        <WizardForm key="form" form={form} onFinish={handleFinish} />
      )}
    </AnimatePresence>
  );
};

export default Wizard;
