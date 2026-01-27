export type SubscriptionStatus = "active" | "unused" | "expiring";

export interface Tools {
  id: number;
  name: string;
  description: string;
  vendor: string;
  category: string;
  owner_department: string;
  status: SubscriptionStatus;

  website_url: string;
  icon_url: string;

  /** Coûts (peuvent arriver sous forme de string côté API) */
  monthly_cost?: number | string;
  previous_month_cost?: number | string;

  /** Utilisateurs actifs (parfois absent ou string) */
  active_users_count?: number | string;

  /** Dates ISO (pas toujours présentes) */
  created_at?: string;
  updated_at?: string;
}
