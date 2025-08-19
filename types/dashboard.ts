// app/types/dashboard.ts
export type DashboardBudgetRequest = {
  id: string;
  email: string;
  createdAt: Date;
  phone: string;
  companyName: string;
  contactName: string;
  projectType: string;
  location: string;
  services: string[];
  status: string;
  priority: string;
};
