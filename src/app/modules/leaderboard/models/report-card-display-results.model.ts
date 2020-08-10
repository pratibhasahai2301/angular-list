import { Student } from '@app/modules/leaderboard/models/student.model';

export interface ReportCardDisplayResults {
  id: string;
  student: Student;
  timeInMinutes: number;
  rank: number;
}
