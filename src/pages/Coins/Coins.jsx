import { Table, Spin, Alert, theme, Flex, Typography } from 'antd';
import { useCoins } from '../../hooks/useCoins';
import { getColumns } from './columns.jsx';

const { Title } = Typography;

const Coins = () => {
    const { token } = theme.useToken();
    const { data: coins, isLoading, error } = useCoins();

    const columns = getColumns(token);

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

            <Table
                dataSource={coins}
                columns={columns}
                scroll={{ x: 800 }}
                sticky
                rowKey="id"
                size="middle"
                pagination={false}
            />
        </Flex>
    );
};

export default Coins;