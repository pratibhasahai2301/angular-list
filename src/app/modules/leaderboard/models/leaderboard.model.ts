import { ReportCardDisplayResults } from '@app/modules/leaderboard/models/report-card-display-results.model';
import { ReportCard } from '@app/modules/leaderboard/models/report-card.model';

export interface Leaderboard {
  id: string;
  report: ReportCard[];
  results?: ReportCardDisplayResults[];
}
