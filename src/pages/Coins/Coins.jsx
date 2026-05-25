import { Spin, Alert, Flex, Typography } from 'antd';
import { useCoins } from '../../hooks/useCoins';
import CoinsTable from '../../components/CoinsTable.jsx';

const { Title } = Typography;

const Coins = () => {
    const { data: coins, isLoading, error } = useCoins();

    if (isLoading) {
        return (
            <Flex justify="center">
                <Spin size="large" />
            </Flex>
        );
    }

    if (error) {
        return (
            <Flex vertical>
                <Alert
                    message="Error"
                    description={error?.message}
                    type="error"
                    showIcon
                />
            </Flex>
        );
    }

    return (
        <Flex vertical gap="large">
            <Title level={1}>
                Top 50 Cryptocurrencies
            </Title>

            <CoinsTable dataSource={coins} />
        </Flex>
    );
};

export default Coins;