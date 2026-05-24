import { Table, theme } from 'antd';
import { getColumns } from '../pages/Coins/columns.jsx';

const CoinsTable = ({ dataSource, loading = false, pagination = false }) => {
    const { token } = theme.useToken();

    return (
        <Table
            dataSource={dataSource}
            columns={getColumns(token)}
            loading={loading}
            scroll={{ x: 800 }}
            sticky
            rowKey="id"
            size="middle"
            pagination={pagination}
        />
    );
};

export default CoinsTable;
