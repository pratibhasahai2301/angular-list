import { Leaderboard } from '../models/leaderboard.model';
import { ReportCard } from '../models/report-card.model';
import { getRandomDateOfWeek } from '../utils/leaderboard.utils';

export const REPORT_CARD: ReportCard[] = [
  {
    id: 'RC1',
    studentId: 'Stu1',
    timeInMinutes: 234,
    level: 'L1',
    date: getRandomDateOfWeek(),
  },
  {
    id: 'RC2',
    studentId: 'Stu2',
    timeInMinutes: 254,
    level: 'L1',
    date: getRandomDateOfWeek(),
  },
  {
    id: 'RC3',
    studentId: 'Stu3',
    timeInMinutes: 233,
    level: 'L1',
    date: getRandomDateOfWeek(),
  },
  {
    id: 'RC4',
    studentId: 'Stu9',
    timeInMinutes: 234,
    level: 'L1',
    date: getRandomDateOfWeek(),
  },
  {
    id: 'RC5',
    studentId: 'Stu16',
    timeInMinutes: 245,
    level: 'L1',
    date: getRandomDateOfWeek(),
  },
  {
    id: 'RC6',
    studentId: 'Stu14',
    timeInMinutes: 194,
    level: 'L1',
    date: getRandomDateOfWeek(-1),
  },
  {
    id: 'RC7',
    studentId: 'Stu8',
    timeInMinutes: 234,
    level: 'L1',
    date: getRandomDateOfWeek(),
  },
  {
    id: 'RC8',
    studentId: 'Stu4',
    timeInMinutes: 247,
    level: 'L2',
    date: getRandomDateOfWeek(-1),
  },
  {
    id: 'RC9',
    studentId: 'Stu6',
    timeInMinutes: 234,
    level: 'L2',
    date: getRandomDateOfWeek(-1),
  },
  {
    id: 'RC10',
    studentId: 'Stu10',
    timeInMinutes: 214,
    level: 'L2',
    date: getRandomDateOfWeek(),
  },
  {
    id: 'RC11',
    studentId: 'Stu11',
    timeInMinutes: 221,
    level: 'L1',
    date: getRandomDateOfWeek(),
  },
];

export const LEADERBOARDS: Leaderboard[] = [
  {
    id: 'Lead1',
    report: REPORT_CARD,
  },
];
