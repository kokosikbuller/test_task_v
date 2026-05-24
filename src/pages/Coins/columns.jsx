import { Avatar, Space } from 'antd';
import { formatNumber } from './utils';

export const getColumns = (token) => [
    {
        title: '#',
        dataIndex: 'market_cap_rank',
        sorter: (a, b) => a.market_cap_rank - b.market_cap_rank,
        width: 60,
    },
    {
        title: 'Name',
        key: 'name',
        render: (_, record) => (
            <Space>
                <Avatar src={record.image} size={24} />
                {record.name}
            </Space>
        ),
        width: 150,
    },
    {
        title: 'Price',
        dataIndex: 'current_price',
        sorter: (a, b) => a.current_price - b.current_price,
        render: (price) =>
            new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
            }).format(price),
    },
    {
        title: '24h %',
        dataIndex: 'price_change_percentage_24h',
        sorter: (a, b) =>
            a.price_change_percentage_24h - b.price_change_percentage_24h,
        render: (change) => (
            <span
                style={{
                    color:
                        change >= 0
                            ? token.colorSuccess
                            : token.colorError,
                }}
            >
                {change?.toFixed(2)}%
            </span>
        ),
    },
    {
        title: 'Market Cap',
        dataIndex: 'market_cap',
        sorter: (a, b) => a.market_cap - b.market_cap,
        render: (cap) => formatNumber(cap),
    },
    {
        title: 'Volume (24h)',
        dataIndex: 'total_volume',
        sorter: (a, b) => a.total_volume - b.total_volume,
        render: (volume) => formatNumber(volume),
    },
];
