import axios from "axios";
import { useState, useEffect } from "react";
import { MonthlySpendChart } from "../components/Charts/MonthlySpendChart/MonthlySpendChart"
import type { DashboardAnalyticsResponse } from "../types/analytics";
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