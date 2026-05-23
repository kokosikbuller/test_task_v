import { Button, Card, Typography } from "antd";

const { Title, Paragraph, Link } = Typography;

function Home() {
    const title = "Тестове завдання";
    
    return (
        <Card>
            <Title level={2}>Тестове завдання</Title>
            <Paragraph>
                Це стартовий шаблон. Усі завдання описані у файлі{" "}
                <Link href="/TASK.md" target="_blank">
                    TASK.md
                </Link>{" "}
                у корені проєкту.
            </Paragraph>
            <Paragraph type="secondary">
                Стек: React + Vite + Ant Design + React Router.
            </Paragraph>
            <Button type="primary" href="/TASK.md" target="_blank"> Відкрити завдання</Button>
        </Card>
    );
}

export default Home;
