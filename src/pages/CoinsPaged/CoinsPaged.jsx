import { useState } from 'react';
import { Alert, Flex, Typography } from 'antd';
import { useCoinsPaged, PER_PAGE } from '../../hooks/useCoinsPaged';
import CoinsTable from '../../components/CoinsTable.jsx';

const { Title } = Typography;

const TOTAL_PAGES = 20;

const CoinsPaged = () => {
    const [page, setPage] = useState(1);
    const { data: coins, isFetching, error } = useCoinsPaged(page);

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
            <Title level={1}>Cryptocurrencies (paged)</Title>

            <CoinsTable
                dataSource={coins}
                loading={isFetching}
                pagination={{
                    current: page,
                    pageSize: PER_PAGE,
                    total: TOTAL_PAGES * PER_PAGE,
                    showSizeChanger: false,
                    onChange: setPage,
                }}
            />
        </Flex>
    );
};

export default CoinsPaged;
