import { PageContainer, PageHeader, PageRow, PageTitle } from '../styles';
import ThemeButtons from '../components/ThemeButtons';
import UserBlock from '../components/UserBlock';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import Chart from '../components/Chart';

const DashboardPage = () => {
    const { user: {name, avatar} } = useSelector( state => state.user);

    return (
        <PageContainer>
            <PageHeader>
                <PageTitle>Dashboard</PageTitle>
                <ThemeButtons margin="0 0 0 auto"/>
                <UserBlock 
                    margin="0 0 0 33px" 
                    name={name} 
                    avatarUrl={avatar}
                />
            </PageHeader>
            <PageRow>
                <Card title="Total High" counter="60" />
                <Card title="Total Normal" counter="16" />
                <Card title="Total Low" counter="43" />
                <Card title="Total Uncompleted" counter="119" percent="60" />
            </PageRow>
            <Chart />
            <PageRow>
                <Card title="High" counter="20" />
                <Card title="Normal" counter="4" />
                <Card title="Low" counter="0" />
                <Card title="Uncompleted" counter="24" percent="10" />
            </PageRow>
        </PageContainer>
    );
};

export default DashboardPage;