export interface BudgetOverview {
    monthly_limit: number;
    current_month_total: number;
    previous_month_total: number;
  
    /** Pourcentages renvoyés en string côté API */
    budget_utilization: string; // ex: "59.8"
    trend_percentage: string;   // ex: "2.0"
  }
  
  export interface KpiTrends {
    /** Valeurs formatées pour affichage */
    budget_change: string;        // "+2%"
    tools_change: string;         // "+9"
    departments_change: string;   // "+2"
    cost_per_user_change: string; // "+€6"
  }
  
  export interface CostAnalytics {
    cost_per_user: number;
    previous_cost_per_user: number;
    active_users: number;
    total_users: number;
  }
  
  export interface DashboardAnalyticsResponse {
    budget_overview: BudgetOverview;
    kpi_trends: KpiTrends;
    cost_analytics: CostAnalytics;
  }
  