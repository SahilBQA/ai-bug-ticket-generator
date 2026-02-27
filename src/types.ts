export interface BugTicket {
  title: string;
  description: string;
  expectedResult: string;
  actualResult: string;
  stepsToReproduce: string[];
  reproductionRate: string;
  impact: string;
  priority: string;
  version: string;
  environment: string;
}
