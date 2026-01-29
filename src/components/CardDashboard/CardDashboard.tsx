import { Card } from '../Card/Card';
import { useEffect, useState } from 'react';
import type { DashboardAnalyticsResponse } from '../../types/analytics';
import axios from 'axios';
import type { Department } from '../../types/department';
import type { Tools } from '../../types/tools';
import { Container } from './CardDashboard.styled';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BuildIcon from '@mui/icons-material/Build';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';





export const CardDashboard = () => {
  const [data, setData] = useState<DashboardAnalyticsResponse>()
  const [departments, setDepartments] = useState<Department[]>()
  const [tools, setTools] = useState<Tools[]>()

  
  useEffect(() => {
    axios
      .get<DashboardAnalyticsResponse>(
        'https://tt-jsonserver-01.alt-tools.tech/analytics'
      )
      .then(res => setData(res.data))
      .catch(err => {
        console.error('Erreur API analytics', err);
      });

    axios
      .get<Department[]>(
        'https://tt-jsonserver-01.alt-tools.tech/departments'
      )
      .then(res => setDepartments(res.data))
      .catch(err => {
        console.error('Erreur API analytics', err);
      });

      axios
        .get<Tools[]>(
          'https://tt-jsonserver-01.alt-tools.tech/tools'
        )
        .then(res => setTools(res.data))
        .catch(err => {
          console.error('Erreur API analytics', err);
        });
  }, []);

  
  
    return (
      <Container>
        <Card icon={<TrendingUpIcon/>} type={1} title='Monthly Budget' text={`${data?.budget_overview.current_month_total}/${data?.budget_overview.monthly_limit}`} data={data?.kpi_trends.budget_change ?? ''}/>
        <Card icon={<BuildIcon/>} type={2} title='Active tools' text={`${tools?.length}`} data={data?.kpi_trends.tools_change ?? ''}/>
        <Card icon={<ApartmentIcon/>} type={3}title='Department' text={`${departments?.length}`} data={data?.kpi_trends.departments_change ?? ''}/>
        <Card icon={<PeopleOutlinedIcon/>} type={4} title='Cost/User' text={`€${data?.cost_analytics.cost_per_user}`} data={data?.kpi_trends.cost_per_user_change ?? ''}/>
      </Container>
    )
}