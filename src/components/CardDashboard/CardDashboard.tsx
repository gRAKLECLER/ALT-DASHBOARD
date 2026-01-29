import { Card } from '../Card/Card';
import { Container } from './CardDashboard.styled';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BuildIcon from '@mui/icons-material/Build';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import { useTools } from '../../hooks/get/useDashboardTools';
import { useDashboardAnalytics } from '../../hooks/get/useDashboardAnalytics';
import { useDepartment } from '../../hooks/get/useDashboardDepartment';





export const CardDashboard = () => {
  const { tools} = useTools();
  const { analytics } = useDashboardAnalytics();
  const { department } = useDepartment();
  
    return (
      <Container>
        <Card icon={<TrendingUpIcon/>} type={1} title='Monthly Budget' text={`${analytics?.budget_overview.current_month_total}/${analytics?.budget_overview.monthly_limit}`} data={analytics?.kpi_trends.budget_change ?? ''}/>
        <Card icon={<BuildIcon/>} type={2} title='Active tools' text={`${tools?.length}`} data={analytics?.kpi_trends.tools_change ?? ''}/>
        <Card icon={<ApartmentIcon/>} type={3}title='Department' text={`${department?.length}`} data={analytics?.kpi_trends.departments_change ?? ''}/>
        <Card icon={<PeopleOutlinedIcon/>} type={4} title='Cost/User' text={`€${analytics?.cost_analytics.cost_per_user}`} data={analytics?.kpi_trends.cost_per_user_change ?? ''}/>
      </Container>
    )
}