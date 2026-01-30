import { MonthlySpendChart } from "../components/Charts/MonthlySpendChart/MonthlySpendChart"
import { useDashboardAnalytics } from "../hooks/get/useDashboardAnalytics";


function Analytics() {

  const { analytics } = useDashboardAnalytics();

    return (
      <>
        <MonthlySpendChart data={analytics}/>
      </>
    )

  }
  
  export default Analytics